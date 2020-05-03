const dayjs = require('dayjs')
const pathlib = require('path')

module.exports = (options, context) => {

    return {

        name: 'vuepress-plugin-simple-blog',

        /**
         * Extend the $page attribute on the pages.
         */
        async extendPageData($page) {
            const {
                _filePath,           // file's absolute path
                _computed,           // access the client global computed mixins at build time, e.g _computed.$localePath.
                _content,            // file's raw content string
                _strippedContent,    // file's content string without frontmatter
                key,                 // page's unique hash key
                frontmatter,         // page's frontmatter object
                regularPath,         // current page's default link (follow the file hierarchy)
                path,                // current page's real link (use regularPath when permalink does not exist)
            } = $page

            // check if the publish flag was already
            if (typeof frontmatter.publish == 'undefined') {
                // if there is a date
                if (frontmatter.date) {
                    frontmatter.publish = dayjs().format('YYYY-MM-DD') >= dayjs(frontmatter.date).format('YYYY-MM-DD')
                }
                // otherwise we can set publish to true anyways
                else {
                    frontmatter.publish = true
                }
            }
        },

        /**
         * generate some pages
         */
        additionalPages() {
            // only use the posts
            let posts = context.pages.filter(function(page) {
                return page.path.startsWith(options.posts.path)
            })

            // sort the posts
            posts.sort((prev, next) => {
                const dayjs = require('dayjs');
                const prevTime = dayjs(prev.frontmatter.date);
                const nextTime = dayjs(next.frontmatter.date);
                return prevTime - nextTime > 0 ? -1 : 1;
            })

            // filter out posts that should not be published (using publish flag)
            posts = posts.filter((post) => post.frontmatter.publish)

            // create container for the pages that we are going to add
            let pages = []

            // first, we push the home page, because there is not much to do
            pages.push({
                path: options.home.path || '/',
                title: options.home.title || context.siteConfig.title,
                frontmatter: options.home.frontmatter || {},
            })

            // get limit from options or set default value
            const limit = options.limit || 5

            // chunk the posts by limit
            for (let i = 0; i < posts.length; i += limit) {

                // create pagination page index
                let page_title_index = i / limit + 1
                let pages_array_index = i / limit

                // generate page title
                let title = options.posts.title || 'Posts Page #';
                title = title.replace('#', page_title_index)

                // overwrite title for posts pagination index page (/posts/index.html)
                if (!pages_array_index) {
                    title = title.slice(0, title.indexOf(' '))
                }

                // create page path
                let posts_path = options.posts.path || '/posts/'
                let path = posts_path
                if (pages_array_index) {
                    path += page_title_index + '/'
                }

                pages.push({
                    path: path,
                    title: title,
                    frontmatter: {
                        publish: false,
                        pagination: {
                            index: pages_array_index,
                            page: page_title_index
                        },
                        layout: options.posts.frontmatter.layout
                    }
                })

            }

            return pages
        },

        /**
         * generate dynamic modules
         */
        clientDynamicModules() {
            // prefix to be used as the folder name in @vuepress/core/.temp/dynamic
            const DIRECTORY_PREFIX = 'simple-blog'

            // stringify the options of the plugin
            let options_json_string = JSON.stringify(options)

            // actually create the dynamic modules
            return [
                {
                    name: `${DIRECTORY_PREFIX}/options.js`,
                    content: `export default ${options_json_string}`
                }
            ]
        },

        /**
         * add pagination object to vue
         */
        enhanceAppFiles() {
            // add the $pagination object to the vue root element
            return [
                pathlib.resolve(__dirname, 'pagination.js')
            ]
        }
    }
}
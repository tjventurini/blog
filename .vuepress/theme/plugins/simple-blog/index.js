const dayjs = require('dayjs')
const util = require('util')
const path = require('path')

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

            // if there is a date
            if (frontmatter.date) {
                frontmatter.publish = dayjs() >= dayjs(frontmatter.date)
            }
            // otherwise we can set publish to true anyways
            else {
                frontmatter.publish = true
            }
        },

        /**
         * generate some pages
         */
        additionalPages() {
            return [
                {
                    path: options.home.path || '/',
                    title: options.home.title || context.siteConfig.title,
                    frontmatter: options.home.frontmatter || {},
                }
            ]
        },

        /**
         * generate pagination index
         */
        clientDynamicModules() {
            // prefix to be used as the folder name in @vuepress/core/.temp/dynamic
            const PREFIX = 'simple-blog'

            // create container to hold the pagination index
            let paginations = {
                pages: []
            }

            // get posts
            let posts = context.pages.filter(function(page) {
                return page.path.startsWith(options.posts.path)
            })

            // sort by date
            posts.sort((prev, next) => {
                const dayjs = require('dayjs');
                const prevTime = dayjs(prev.frontmatter.date);
                const nextTime = dayjs(next.frontmatter.date);
                return prevTime - nextTime > 0 ? -1 : 1;
            })

            // filter out posts that should not be published (using publish flag)
            posts = posts.filter((post) => post.frontmatter.publish)

            // chunk posts down using the limit option and 
            const limit = options.limit || 5
            for (let i = 0; i < posts.length; i += limit) {
                let pages = []
                let chunk = posts.slice(i, i + limit)
                chunk.forEach(function(page) {
                    pages.push({
                        key: page.key,
                        path: page.path,
                    })
                })
                paginations.pages.push(pages)
            }

            // stringify paginations to save it in pagination index
            paginations = JSON.stringify(paginations)

            // actually create the dynamic module
            return [
                {
                    name: `${PREFIX}/paginations.js`,
                    content: `export default ${paginations}`
                }
            ]
        },

        /**
         * add pagination object to vue
         */
        enhanceAppFiles() {
            // add the $pagination object to the vue root element
            return [
                path.resolve(__dirname, 'pagination.js')
            ]
        }
    }
}
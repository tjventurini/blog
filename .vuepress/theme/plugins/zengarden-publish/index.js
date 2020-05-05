const dayjs = require('dayjs')

module.exports = (options, context) => {

    /**
     * The function that sets the flag to true or false. Can be overwritten
     * by the configuration in the theme.
     */
    let publishFunction = options.publish || function(date) {
        return dayjs().format('YYYY-MM-DD') >= dayjs(date).format('YYYY-MM-DD')
    }

    return {

        name: 'vuepress-plugin-zengarden-publish',

        /**
         * Extend the $page attribute on the pages.
         */
        extendPageData($page) {
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
                    frontmatter.publish = publishFunction(frontmatter.date)
                }
                // otherwise we can set publish to true anyways
                else {
                    frontmatter.publish = true
                }
            }
        }
    }
}
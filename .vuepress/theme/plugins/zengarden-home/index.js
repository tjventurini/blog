const dayjs = require('dayjs')
const pathlib = require('path')

module.exports = (options, context) => {

    return {

        name: 'vuepress-plugin-zengarden-home',

        /**
         * generate home page
         */
        additionalPages() {
            return {
                path: options.path || '/',
                title: options.title || context.siteConfig.title,
                frontmatter: options.frontmatter || {},
            }
        }
    }
}
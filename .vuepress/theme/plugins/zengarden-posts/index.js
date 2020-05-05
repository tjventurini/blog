const dayjs = require('dayjs')
const pathlib = require('path')

module.exports = (options, context) => {

    return {

        name: 'vuepress-plugin-zengarden-posts',

        /**
         * generate dynamic modules
         */
        clientDynamicModules() {
            // prefix to be used as the folder name in @vuepress/core/.temp/dynamic
            const DIRECTORY_PREFIX = 'zengarden-posts'

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
         * enhance app files
         */
        enhanceAppFiles() {
            
            // add the $posts object to the vue root element
            return [
                pathlib.resolve(__dirname, 'posts.js')
            ]
        },


    }

}
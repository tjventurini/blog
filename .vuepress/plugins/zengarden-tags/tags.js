import Vue from 'vue'

import options from '@dynamic/zengarden-tags/options'
import tags_collection from '@dynamic/zengarden-tags/tags'

export default ({ Vue }) => {

    Vue.mixin({
        computed: {
            $tags() {
                let tags = {}

                for (let tag in tags_collection) {
                    let pages = tags_collection[tag].map((key) => {
                        return this.$posts.filter((page) => {

                            if (page.key === key) {
                                return true
                            }

                            return false
                        })[0]
                    }).filter((page) => {
                        // TODO: find a way to filter these upfront 
                        return !! page
                    })

                    tags[tag] = {
                        name: tag,
                        pages: pages,
                        path: options.path + tag
                    }
                }

                return tags
            }
        }
    });
}
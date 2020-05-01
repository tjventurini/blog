import Vue from 'vue'

import paginations from '@dynamic/simple-blog/paginations'

export default ({ Vue }) => {
    Vue.mixin({
        computed: {
            $pagination() {
                return this.$getPagination()
            }
        },
        methods: {
            $getPagination() {
                return {
                    pages: this.$site.pages
                }
            }
        }
    })
}
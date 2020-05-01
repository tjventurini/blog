import Vue from 'vue'

import options from '@dynamic/simple-blog/options'

export default ({ Vue }) => {
    Vue.mixin({
        computed: {
            $pagination() {
                // only work with published posts
                let posts = this.$site.pages.filter(function(page) {
                    return page.path.startsWith(options.posts.path)
                }).filter(function(page) {
                    return page.frontmatter.publish
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

                // chunk the posts by limit
                let pages = []
                const limit = options.limit || 5
                for (let i = 0; i < posts.length; i += limit) {
                    pages.push( posts.slice(i, i+limit) )
                }

                // return the object
                return {
                    posts: posts,
                    pages: pages
                }
            }
        },
    })
}
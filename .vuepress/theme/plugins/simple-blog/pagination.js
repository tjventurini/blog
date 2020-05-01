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

                // check if there is a previous page to go for
                let hasPrev = false
                if (
                    this.$page.frontmatter.pagination
                    && this.$page.frontmatter.pagination.page > 1
                ) {
                    hasPrev = true
                }
                // if there is a previous page to go for, then we need
                // a link to that page
                let prevLink = null
                if (hasPrev) {
                    let prevIndex = this.$page.frontmatter.pagination.page - 1
                    if (prevIndex > 1) {
                        prevLink = options.posts.path + prevIndex + '/'
                    } else {
                        prevLink = options.posts.path
                    }
                }

                // check if there is another page to go for
                let hasNext = false
                if (
                    this.$page.frontmatter.pagination
                    && this.$page.frontmatter.pagination.page < pages.length
                ) {
                    hasNext = true
                }
                // if there is another page to go for, then we need
                // a link to that page
                let nextLink = null
                if (hasNext) {
                    let nextIndex = this.$page.frontmatter.pagination.page + 1
                    nextLink = options.posts.path + nextIndex + '/'
                }

                // return the object
                return {
                    posts: posts,
                    pages: pages,
                    hasPrev: hasPrev,
                    prevLink: prevLink,
                    hasNext: hasNext,
                    nextLink: nextLink,
                }
            }
        },
    })
}
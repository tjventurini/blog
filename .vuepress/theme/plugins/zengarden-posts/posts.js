import Vue from 'vue'
import dayjs from 'dayjs'

import options from '@dynamic/zengarden-posts/options'

export default ({ Vue }) => {

    /**
     * filter the pages by the path from the configuration
     */
    let filterByPath = options.filterByPath || function(page) {
        return page.path.startsWith(options.path)
    }

    /**
     * sort the posts by day from date in frontmatter
     */
    let sortPosts = function (prev, next) {
        const prevTime = dayjs(prev.frontmatter.date);
        const nextTime = dayjs(next.frontmatter.date);
        return prevTime - nextTime > 0 ? -1 : 1;
    }

    Vue.mixin({
        computed: {
            $posts() {

                // only work with pages that are in the given path
                // - see configuration
                let posts = this.$site.pages.filter(filterByPath);

                // only work with pages that are published
                // - see vuepress-plugin-zengarden-publish
                posts = posts.filter(function(page) {
                    return page.frontmatter.publish
                });

                // sort the posts
                // - see configuration
                posts.sort(sortPosts)

                // return the filtered pages as posts
                return posts;
            }
        }
    })
}
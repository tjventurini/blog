module.exports = {
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-36004715-1' // UA-00000000-0
            }
        ],
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['vuepress-plugin-autometa',{
            site: {
                name: 'Thomas Venturini',
                twitter: 'tjventurini',
            },
            canonical_base: 'https://thomasventurini.com'
        }],
        ['@vuepress/blog', {
            sitemap: {
                hostname: 'https://thomasventurini.com',
            },
            // frontmatters: [
            //     {
            //         id: 'tags',
            //         keys: ['tags'],
            //         path: '/tag/',
            //         layout: 'Tags',
            //         scopeLayout: 'Tag'
            //     }
            // ]
        }],
        ['vuepress-plugin-rss', {
            base_url: '/', // required
            site_url: 'https://thomasventurini.com', // required
            filter: frontmatter => frontmatter.date <= new Date(),
            count: 100
        }],
        ['zengarden-publish'],
        ['zengarden-home', {
            title: 'Home',
            frontmatter: {
                layout: 'Home'
            }
        }],
        ['zengarden-posts', {
            path: '/articles/'
        }],
        ['zengarden-pagination', {
            title: 'Articles Page #',
            path: '/articles/',
            dist: '/articles/', // TODO: make use of this!
            frontmatter: {
                layout: 'Directory'
            }
        }],
        [require('../plugins/zengarden-tags'), {
            tag: 'Tag',
            tags: 'Tags',
        }]
    ]
}
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
            frontmatters: [
                {
                    id: 'tags',
                    keys: ['tags'],
                    path: '/tag/',
                    layout: 'Tags',
                    scopeLayout: 'Tag'
                }
            ]
        }],
        ['vuepress-plugin-rss', {
            base_url: '/', // required
            site_url: 'https://thomasventurini.com', // required
            filter: frontmatter => frontmatter.date <= new Date(),
            count: 100
        }],
        [require('./plugins/zengarden-home/index.js'), {
            title: 'Home',
            frontmatter: {
                layout: 'Home'
            }
        }],
        [require('./plugins/zengarden-publish/index.js')],
        [require('./plugins/zengarden-posts/index.js'), {
            path: '/articles/'
        }],
        [require('./plugins/zengarden-pagination/index.js'), {
            title: 'Articles Page #',
            path: '/articles/',
            dist: '/articles/', // TODO: make use of this!
            frontmatter: {
                layout: 'Directory'
            }
        }]
    ]
}
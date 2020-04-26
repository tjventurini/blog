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
            directories: [
                {
                    id: 'articles',
                    title: 'Articles',
                    dirname: 'articles',
                    path: '/articles/',
                    layout: 'Directory',
                    pagination: {
                        lengthPerPage: 5,
                        layout: 'Directory'
                    }
                }
            ],
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
        }
      ]
    ]
}
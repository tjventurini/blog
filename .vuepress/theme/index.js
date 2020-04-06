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
                    },
                    itemPermalink: '/articles/:slug'
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
    ]
}
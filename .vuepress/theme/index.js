module.exports = {
    plugins: [
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
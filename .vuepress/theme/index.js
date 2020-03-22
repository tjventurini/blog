module.exports = {
    plugins: [
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
                        lengthPerPage: 2
                    },
                    itemPermalink: '/articles/:slug'
                }
            ]
        }],
    ]
}
module.exports = {
    plugins: [
        ['@vuepress/blog', {
            directories: [
                {
                    id: 'articles',
                    title: 'Home',
                    dirname: 'articles',
                    path: '/',
                    layout: 'Home',
                    pagination: {
                        lengthPerPage: 2
                    },
                    itemPermalink: '/articles/:slug'
                }
            ]
        }],
    ]
}
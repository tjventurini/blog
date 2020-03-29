module.exports = {
    title: "Thomas Venturini",
    description: "My personal blog.",
    themeConfig: {
        socialLinks: [
            {
                icon: 'fab fa-twitter',
                url: 'https://twitter.com/tjventurini'
            },
            {
                icon: 'fab fa-github',
                url: 'https://github.com/tjventurini'
            },
            {
                icon: 'fab fa-xing',
                url: 'https://www.xing.com/profile/Thomas_Venturini/cv'
            },
            {
                icon: 'fab fa-linkedin',
                url: 'https://www.linkedin.com/in/thomas-venturini-863b20168/'
            }
        ],
        skills: [
            {
                name: 'laravel',
                icon: 'fab fa-laravel',
            },
            {
                name: 'vue',
                icon: 'fab fa-vuejs',
            },
            {
                name: 'php',
                icon: 'fab fa-php',
            },
            {
                name: 'javascript',
                icon: 'fab fa-js-square',
            },
            {
                name: 'css',
                icon: 'fab fa-css3-alt',
            },
            {
                name: 'html',
                icon: 'fab fa-html5'
            },
            {
                name: 'sql',
                icon: 'fa fa-database',
            },
            {
                name: 'python',
                icon: 'fab fa-python'
            },
            {
                name: 'linux',
                icon: 'fab fa-linux'
            }
        ],
        cv: 'downloads/cv.pdf',
    },
    head: [
        ['link', {rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png"}],
    ],
    postcss: {
        plugins: [
            require('tailwindcss')(),
        ]
    },
}
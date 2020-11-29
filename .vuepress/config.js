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
        cv: '/downloads/cv.pdf',
        notFoundImages: [
            `<div style="width:100%;height:0;padding-bottom:145%;position:relative;"><iframe src="https://giphy.com/embed/VwoJkTfZAUBSU" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/89a-eightninea-VwoJkTfZAUBSU">via GIPHY</a></p>`,
            `<div style="width:100%;height:0;padding-bottom:84%;position:relative;"><iframe src="https://giphy.com/embed/9J7tdYltWyXIY" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/internet-google-chrone-9J7tdYltWyXIY">via GIPHY</a></p>`,
            `<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/Ke8JKfxe83FpLrra71" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/error-404-Ke8JKfxe83FpLrra71">via GIPHY</a></p>`
        ]
    },
    head: [
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" }],
    ],
    postcss: {
        plugins: [
            require('tailwindcss'),
        ]
    },
}
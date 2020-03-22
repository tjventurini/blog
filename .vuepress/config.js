module.exports = {
    title: "Thomas Venturini",
    description: "My personal blog.",
    themeConfig: {},
    head: [
        ['link', {rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png"}],
    ],
    postcss: {
        plugins: [
            require('tailwindcss')(),
        ]
    },
}
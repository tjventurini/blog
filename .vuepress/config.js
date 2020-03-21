module.exports = {
    title: "Blog",
    description: "My personal blog.",
    themeConfig: {},
    head: [
        // https://vuepress.vuejs.org/config/#head
    ],
    postcss: {
        plugins: [
            require('tailwindcss')(),
        ]
    }
}
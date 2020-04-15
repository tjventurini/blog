<template>
    <div class="page max-w-screen-lg mx-auto text-gray-700">
        <Header/>
        <div class="grid grid-cols-12">
            <div class="col-span-12 lg:col-span-8 pb-4">

                <PageTitle/>

                <ArticleList :articles="articles"/>

                <div class="more-button text-center mb-4">
                    <a class="font-bold moving-gradient-bg text-white p-2 rounded-lg" href="/articles/">See all
                        articles</a>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-4">

                <Sidebar/>

            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header'
    import ArticleList from '../components/ArticleList'
    import PageTitle from "../components/PageTitle"
    import Sidebar from "../components/Sidebar"

    export default {
        components: {Sidebar, PageTitle, Header, ArticleList},
        computed: {
            articles() {
                return this.$site.pages.filter(function (page) {
                    return /^\/articles\//.test(page.regularPath)
                })
                    .filter((page) => (page.title))
                    .sort((prev, next) => {
                        const dayjs = require('dayjs');
                        const prevTime = dayjs(prev.frontmatter.date);
                        const nextTime = dayjs(next.frontmatter.date);
                        return prevTime - nextTime > 0 ? -1 : 1;
                    })
                    .slice(0, 5);
            }
        }
    }
</script>

<style lang="sass">
    .article-item
        div 
            p 
                a
                    @apply underline text-gray-500
</style>
<template>
    <div class="page mx-auto max-w-screen-lg text-gray-700">
        <Header/>
        <div class="grid grid-cols-12">
            <div class="col-span-8">

                <PageTitle/>

                <ArticleList :articles="articles"/>

                <div v-if="articles.length > 5" class="more-button text-center">
                    <a class="font-bold moving-gradient-bg text-white p-2 rounded-lg" href="/articles/">See all
                        articles</a>
                </div>
            </div>
            <div class="col-span-4">

                <Sidebar/>

            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@theme/components/Header'
    import ArticleList from '@theme/components/ArticleList'
    import PageTitle from "../components/PageTitle";
    import Sidebar from "../components/Sidebar";

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
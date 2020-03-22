<template>
    <div class="page mx-auto max-w-screen-lg text-gray-700">
        <Header/>
        <div class="grid grid-cols-12">
            <div class="col-span-8">
                <PageTitle/>
                <ArticleList :articles="articles"/>
            </div>
            <div class="col-span-4">

            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@theme/components/Header'
    import ArticleList from '@theme/components/ArticleList'
    import PageTitle from "../components/PageTitle";

    export default {
        components: {PageTitle, Header, ArticleList},
        computed: {
            articles() {
                console.log(this.$pagination);
                return this.$pagination.pages;
            }
        }
    }
</script>
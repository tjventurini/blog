<template>
    <div class="page mx-auto max-w-screen-lg text-gray-700">
        <Header/>
        <ArticleList :articles="articles"/>
    </div>
</template>

<script>
    import Header from '@theme/components/Header'
    import ArticleList from '@theme/components/ArticleList'

    export default {
        components: {Header, ArticleList},
        computed: {
            articles() {
                return this.$site.pages;
            }
        }
    }
</script>
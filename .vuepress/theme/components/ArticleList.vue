<template>
    <div>
        <ArticleItem v-for="article in articles" :article="article"/>
    </div>
</template>

<script>
    import ArticleItem from '@theme/components/ArticleItem'

    export default {
        name: "ArticleList",
        components: {ArticleItem},
        props: ['articles'],
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <h3># {{ article.title }}</h3>
        <div v-html="article.excerpt"></div>
    </div>
</template>

<script>
    export default {
        name: "ArticleItem",
        props: ['article'],
        data() {
            console.log(this.article);
            return {}
        }
    }
</script>

<style scoped>

</style>
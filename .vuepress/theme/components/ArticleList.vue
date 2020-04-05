<template>
    <div>
        <ArticleItem v-for="article in articles" :article="article"/>
    </div>
</template>

<script>
    import ArticleItem from '../components/ArticleItem'

    export default {
        name: "ArticleList",
        components: {ArticleItem},
        props: ['articles'],
    }
</script>
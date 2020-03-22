<template>
    <div class="article-item w-auto">
        <div class="grid grid-cols-12">
            <div class="col-span-1">
                <div class="article-icon text-center moving-gradient-text text-xl font-bold">
                    #
                </div>
            </div>
            <div class="col-span-11 pb-4">
                <div v-if="article.frontmatter.image" class="article-image pt-2 pb-4">
                    <a :href="article.path"><img class="rounded-lg" :src="article.frontmatter.image"/></a>
                </div>
                <h3 class="pb-2 text-xl font-bold"><a :href="article.path">{{ article.title }}</a></h3>
                <div v-html="article.excerpt"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleItem",
        props: ['article'],
        data() {
            console.log(this.article);
            return {
                articleImage: '.' + this.article.path + this.article.frontmatter.image
            }
        }
    }
</script>
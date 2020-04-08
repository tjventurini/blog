<template>
    <div class="article-item w-auto">
        <div class="grid grid-cols-6 sm:grid-cols-8">
            <div class="col-span-1">
                <div class="article-icon text-center text-xl">
                    <i class="fa fa-hashtag moving-gradient-text align-middle"></i>
                </div>
            </div>
            <div class="col-span-5 sm:col-span-7">
                <div v-if="article.frontmatter.image" class="article-image pt-2 pb-4">
                    <a :href="article.path"><img class="rounded-lg" :src="article.frontmatter.image"/></a>
                </div>
                <h3 class="pb-2 text-xl font-bold"><a :href="article.path">{{ article.title }}</a></h3>
            </div>
            <div class="col-span-1">
                <div class="article-date text-center text-xl my-2">
                    <i class="fa fa-calendar-day moving-gradient-text"></i>
                </div>
            </div>
            <div class="col-span-5 sm:col-span-7 pb-4">
                <div class="my-2 font-bold">
                    {{ new Date(article.frontmatter.date).toLocaleDateString() }}
                </div>
                <div v-html="article.excerpt"></div>
                <div class="mt-4">
                    <div v-for="tag in article.frontmatter.tags"
                         class="inline-block mb-1"
                    >
                        <a :href="$tags.map[tag].path"
                           class="tag pr-3 py-1 font-bold text-sm whitespace-no-wrap"
                        >{{ tag }}<i class="fas fa-tag text-xs pl-2"></i></a>
                    </div>
                </div>
                <div class="more-button pt-4">
                    <a :href="article.path"
                       class="moving-gradient-bg p-4 text-center px-3 py-1 rounded-lg font-bold text-white text-sm">
                        <i class="far fa-eye"></i>
                        &nbsp; more</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleItem",
        props: ['article'],
        data() {
            return {
                articleImage: '.' + this.article.path + this.article.frontmatter.image
            }
        }
    }
</script>
<template>
    <div class="grid grid-cols-12 mb-4">
        <div class="col-span-1">
            <div class="article-icon text-center text-4xl">
                <i class="fa fa-hashtag moving-gradient-text align-middle"></i>
            </div>
        </div>
        <div class="col-span-11">
            <h2><span class="align-middle heading-10 font-bold text-4xl">{{ pageTitle }}</span></h2>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'PageTitle',
        props: ['title'],
        computed: {
            pageTitle: function () {
                return this.title || this.$page.title || this.$page.frontmatter.title
            }
        }
    }
</script>
<template>
    <div class="grid grid-cols-12 mb-2">
        <div class="col-span-1">
            <div class="article-icon moving-gradient-text text-4xl font-bold text-center">
                #
            </div>
        </div>
        <div class="col-span-11">
            <h2><span class="align-middle heading-10 font-bold text-4xl">{{ $page.title || $page.frontmatter.title
                }}</span></h2>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'PageTitle'
    }
</script>
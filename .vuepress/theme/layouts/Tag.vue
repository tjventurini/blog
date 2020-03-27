<template>
    <div class="page mx-auto max-w-screen-lg text-gray-700">
        <Header/>
        <div class="grid grid-cols-12">
            <div class="col-span-8">
                <PageTitle/>
                <div class="grid grid-cols-12">
                    <div class="col-start-2 col-span-11">

                        <ArticleList :articles="$currentTags.pages"/>

                    </div>
                </div>
            </div>
            <div class="col-span-4">

            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@theme/components/Header'
    import PageTitle from "../components/PageTitle";
    import ArticleList from "../components/ArticleList";

    export default {
        components: {ArticleList, PageTitle, Header},
        data() {
            console.log(this)
            return {};
        }
    }
</script>
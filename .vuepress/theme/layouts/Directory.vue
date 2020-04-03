<template>
    <div class="page mx-auto max-w-screen-lg text-gray-700">
        <Header/>
        <div class="grid grid-cols-12">
            <div class="col-span-8">
                <PageTitle/>
                <ArticleList :articles="pagination.pages"/>
                <Pagination :pagination="pagination"/>
            </div>
            <div class="col-span-4">

            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header'
    import ArticleList from '../components/ArticleList'
    import PageTitle from "../components/PageTitle"
    import Pagination from "../components/Pagination"

    export default {
        components: {Pagination, PageTitle, Header, ArticleList},
        computed: {
            pagination() {
                return this.$pagination;
            }
        }
    }
</script>
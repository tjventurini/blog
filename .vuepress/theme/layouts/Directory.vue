<template>
    <div class="page max-w-screen-lg mx-auto text-gray-700">
        <Header />
        <div class="grid grid-cols-12">
            <div class="col-span-12 lg:col-span-8 pb-4">
                <PageTitle />
                <ArticleList :articles="articles" />
                <Pagination :pagination="pagination" />
            </div>
            <div class="col-span-12 lg:col-span-4">
                <Sidebar />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header";
import ArticleList from "../components/ArticleList";
import PageTitle from "../components/PageTitle";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default {
    components: { Pagination, PageTitle, Header, ArticleList, Sidebar, Footer },
    computed: {
        articles() {
            return this.$pagination.pages[
                this.$page.frontmatter.pagination.index
            ];
        },
        pagination() {
            return this.$pagination;
        },
    },
};
</script>

<style lang="sass">
.article-item
    div
        p
            a
                @apply underline text-gray-500
</style>
<template>
    <div class="page max-w-screen-lg mx-auto text-gray-700">
        <Header />
        <div class="grid grid-cols-12">
            <div class="col-span-12 lg:col-span-8 pb-4">
                <PageTitle />
                <div class="grid grid-cols-12">
                    <div class="col-start-2 col-span-11">
                        <ArticleList :articles="pages" />
                    </div>
                </div>
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
import PageTitle from "../components/PageTitle";
import ArticleList from "../components/ArticleList";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default {
    components: { ArticleList, PageTitle, Header, Sidebar, Footer },
    computed: {
        pages: function () {
            return this.$tags[this.$page.frontmatter.page_tag].pages;
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
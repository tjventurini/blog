<template>
    <div class="page max-w-screen-lg mx-auto text-gray-700">
        <Header/>
        <div class="grid grid-cols-12">
            <div class="col-span-12 lg:col-span-8 pb-4">
                <PageTitle/>
                <div class="grid grid-cols-6 sm:grid-cols-8">
                    <div v-if="$page.frontmatter.cover" class="col-start-2 col-span-4 sm:col-start-2 sm:col-span-6 lg:col-start-2 lg:col-span-7">
                        <div class="article-cover pt-2 pb-4">
                            <img class="rounded-lg w-full" :src="$page.frontmatter.cover"/>
                        </div>
                    </div>
                    <div v-if="$page.frontmatter.cover" class="col-span-1 lg:hidden"></div>
                    <div class="col-span-1 text-center">
                        <div class="article-date text-center text-xl my-1">
                            <i class="fa fa-calendar-day moving-gradient-text"></i>
                        </div>
                    </div>
                    <div class="col-span-4 sm:col-start-2 sm:col-span-6 lg:col-start-2 lg:col-span-7">

                        <div class="date font-bold text-xl my-2">
                            {{ new Date($page.frontmatter.date).toLocaleDateString() }}
                        </div>

                        <div class="content">
                            <Content/>
                        </div>

                        <div class="mt-4">
                            <div v-for="tag in $page.frontmatter.tags"
                                 class="inline-block mb-1"
                            >
                                <a :href="$tags.map[tag].path"
                                   class="tag pr-3 py-1 font-bold text-sm whitespace-no-wrap"
                                >{{ tag }}<i class="fas fa-tag text-xs pl-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-4">

                <Sidebar/>

            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header'
    import PageTitle from "../components/PageTitle";
    import Sidebar from "../components/Sidebar"

    export default {
        components: {PageTitle, Header, Sidebar}
    }
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>

<style lang="sass" src="../styles/code-highlighting.sass"></style>

<style lang="sass">
    .content
        h2
            @apply font-bold my-4
            a
                @apply no-underline

        a
            @apply underline text-gray-500

        p
            @apply mb-4
</style>


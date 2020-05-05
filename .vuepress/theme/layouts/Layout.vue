<template>
    <div class="page max-w-screen-lg mx-auto text-gray-700">
        <Header/>
        <div class="grid grid-cols-12">
            <article class="col-span-12 lg:col-span-8 pb-4">
                <PageTitle/>
                <div class="grid grid-cols-6 sm:grid-cols-8">
                    <div v-if="$page.frontmatter.image" class="col-start-2 col-span-4 sm:col-start-2 sm:col-span-6 lg:col-start-2 lg:col-span-7">
                        <div class="article-cover pt-2 pb-4">
                            <img class="rounded-lg w-full" :src="$page.frontmatter.image"/>
                        </div>
                    </div>
                    <div v-if="$page.frontmatter.image" class="col-span-1 lg:hidden"></div>
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
<!--                             <div v-for="tag in $page.frontmatter.tags"
                                 class="inline-block mb-1"
                            >
                                <a :href="$tags.map[tag].path"
                                   class="tag pr-3 py-1 font-bold text-sm whitespace-no-wrap"
                                >{{ tag }}<i class="fas fa-tag text-xs pl-2"></i></a>
                            </div>
 -->                        </div>
                    </div>
                </div>
            </article>
            <div class="col-span-12 lg:col-span-4">

                <!-- <Sidebar/> -->

            </div>
        </div>

        <script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script>

    </div>
</template>

<script>
    import Header from '../components/Header'
    import PageTitle from "../components/PageTitle";
    // import Sidebar from "../components/Sidebar"

    export default {
        // components: {PageTitle, Header, Sidebar},
        components: {PageTitle, Header},
        methods: {
            mailchimp: function() {
                window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us16.list-manage.com","uuid":"ca1aaebb1c402c379aa8edf82","lid":"1d24155121","uniqueMethods":true}) })
            }
        },
        mounted() {
            this.mailchimp()
        }
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

        p
            @apply mb-4

            code 
                @apply bg-gray-200 p-1 px-2 rounded text-red-400 text-sm border border-gray-400

        ul 
            @apply list-disc px-8

        a
            @apply underline text-gray-500

            svg
                @apply ml-1

        img
            @apply rounded-lg
</style>


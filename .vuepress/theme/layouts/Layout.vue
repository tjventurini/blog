<template>
    <div class="page max-w-screen-lg mx-auto text-gray-700">
        <Header />
        <div class="grid grid-cols-12">
            <article class="col-span-12 lg:col-span-8 pb-4">
                <PageTitle />
                <div class="grid grid-cols-6 sm:grid-cols-8">
                    <div
                        v-if="$page.frontmatter.image"
                        class="col-start-2 col-span-4 sm:col-start-2 sm:col-span-6 lg:col-start-2 lg:col-span-7"
                    >
                        <div class="article-cover pt-2 pb-4">
                            <img
                                class="rounded-lg w-full"
                                :src="$page.frontmatter.image"
                            />
                        </div>
                    </div>
                    <div
                        v-if="$page.frontmatter.image"
                        class="col-span-1 lg:hidden"
                    ></div>
                    <div class="col-span-1 text-center">
                        <div class="article-date text-center text-xl my-1">
                            <i
                                class="fa fa-calendar-day moving-gradient-text"
                            ></i>
                        </div>
                    </div>
                    <div
                        class="col-span-4 sm:col-start-2 sm:col-span-6 lg:col-start-2 lg:col-span-7"
                    >
                        <div class="date font-bold text-xl my-2">
                            {{
                                new Date(
                                    $page.frontmatter.date
                                ).toLocaleDateString()
                            }}
                        </div>

                        <div class="content">
                            <Content />
                        </div>
                        <div class="mt-4">
                            <div
                                v-bind:key="tag"
                                v-for="tag in $page.frontmatter.tags"
                                class="inline-block mb-1"
                                v-if="!!$tags[tag]"
                            >
                                <a
                                    :href="$tags[tag].path"
                                    class="tag pr-3 py-1 font-bold text-sm whitespace-no-wrap"
                                    >{{ tag
                                    }}<i class="fas fa-tag text-xs pl-2"></i
                                ></a>
                            </div>
                        </div>

                        <ShareOnTwitter />

                        <Newsletter />
                    </div>
                </div>
            </article>
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
import Sidebar from "../components/Sidebar";
import Newsletter from "../components/Newsletter";
import ShareOnTwitter from "../components/ShareOnTwitter";
import Footer from "../components/Footer";

export default {
    components: {
        PageTitle,
        Header,
        Sidebar,
        Newsletter,
        ShareOnTwitter,
        Footer,
    },
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>

<style lang="sass" src="../styles/code-highlighting.sass"></style>

<style lang="sass">
.content
    h2
        @apply text-lg
    h3
        @apply text-xl
    h2,h3
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

    blockquote
        @apply italic border-l-8 border-gray-500 bg-gray-200 px-4 py-2 rounded-lg mb-4

        p
            @apply m-0
</style>


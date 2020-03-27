<template>
    <div class="page mx-auto max-w-screen-lg text-gray-700">
        <Header/>
        <div class="grid grid-cols-12">
            <div class="col-span-8">
                <PageTitle/>
                <div class="grid grid-cols-12">
                    <div class="col-start-2 col-span-11">
                        <Content/>

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
            <div class="col-span-4">

            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@theme/components/Header'
    import PageTitle from "../components/PageTitle";

    export default {
        components: {PageTitle, Header},
        data() {
            console.log(this);
            return {};
        }
    }
</script>
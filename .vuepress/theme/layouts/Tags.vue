<template>
    <div class="page mx-auto max-w-screen-lg text-gray-700">
        <Header/>
        <div class="grid grid-cols-12">
            <div class="col-span-8">
                <PageTitle/>
                <div class="grid grid-cols-12">
                    <div class="col-start-2 col-span-11">
                        <div v-for="tag in $tags.list"
                             class="inline-block mb-1"
                        >
                            <a :href="tag.path"
                               class="tag moving-gradient-bg p-4 text-center px-3 py-1 rounded-lg font-bold text-white text-sm whitespace-no-wrap mx-1"
                            >{{ tag.name }}<i class="fas fa-tag text-xs pl-2"></i></a>
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
            return {};
        }
    }
</script>
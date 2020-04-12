<template>
    <div class="page max-w-screen-lg mx-auto text-gray-700">
        <Header/>
        <div class="grid grid-cols-12">
            <div class="col-span-12 lg:col-span-8 pb-4">
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
            <div class="col-span-12 lg:col-span-4">

                <Sidebar/>

            </div>
        </div>
        <cookie-law theme="dark-lime"></cookie-law>
    </div>
</template>

<script>
    import Header from '../components/Header'
    import PageTitle from "../components/PageTitle";
    import Sidebar from "../components/Sidebar"
    import CookieLaw from "vue-cookie-law"

    export default {
        components: {PageTitle, Header, Sidebar, CookieLaw},
        data() {
            return {};
        }
    }
</script>
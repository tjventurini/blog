<template>
    <div class="page max-w-screen-lg mx-auto text-gray-700">
        <Header />
        <div class="grid grid-cols-12">
            <div class="col-span-12 lg:col-span-8 pb-4">
                <PageTitle title="404 Page not found" />
                <div class="grid grid-cols-12">
                    <div class="col-start-2 col-span-11">
                        <div
                            class="max-w-md mx-auto"
                            v-html="notFoundImage"
                        ></div>
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
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default {
    components: { PageTitle, Header, Sidebar, Footer },
    computed: {
        notFoundImage: function () {
            // get images from theme config
            const images = this.$themeConfig.notFoundImages;

            // get random index
            let index = Math.floor(Math.random() * images.length);

            // return image by index
            return images[index];
        },
    },
};
</script>
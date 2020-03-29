<template>
    <div class="header mx-auto py-4">
        <div class="grid grid-cols-12">
            <div class="col-span-1 align-middle">
                <a href="/">
                    <Logo/>
                </a>
            </div>
            <div class="col-span-10">
                <a href="/">
                    <h1><span class="align-middle heading-10 font-bold text-4xl">Thomas Venturini</span></h1>
                </a>
            </div>
            <div class="col-span-1 text-center">
                <button
                        @click="toggleNavigationOverlay"
                        class="navigation moving-gradient-text text-center font-bold text-4xl"
                >
                    <i class="fa fa-bars moving-gradient-text text-3xl"></i>
                </button>
            </div>
        </div>
        <div
                class="navigation-overlay fixed bg-white w-full h-full top-0 left-0 flex"
                :class="{hidden: !showNavigation}"
        >
            <div class="navigation-body relative top-0 mx-auto w-full max-w-screen-lg">
                <button
                        @click="toggleNavigationOverlay"
                        class="absolute top-0 right-0 mt-6 mr-8"
                >
                    <i class="fa fa-times moving-gradient-text text-4xl"></i>
                </button>

                <div class="navigation-content mt-20">

                    <div class="navigation text-center mt-4 text-xl">
                        <a href="/"><i class="fa fa-home moving-gradient-text"></i>&nbsp;Home</a>
                        | <a href="/articles/"><i class="fa fa-feather-alt moving-gradient-text"></i>&nbsp;Articles</a>
                        | <a href="/tag/"><i class="fa fa-tags moving-gradient-text"></i>&nbsp;Tags</a>
                    </div>

                    <div class="search mt-4 mx-auto w-1/3 h-10">
                        <SearchBox/>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from '@theme/components/Logo'
    import Profile from "./Profile";
    import SocialLinks from "./SocialLinks";
    import SearchBox from "./SearchBox"

    export default {
        components: {SocialLinks, Profile, Logo, SearchBox},
        data() {
            return {
                showNavigation: false
            }
        },
        methods: {
            toggleNavigationOverlay(event) {
                this.showNavigation = !this.showNavigation
            }
        }
    }
</script>
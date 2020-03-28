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
                class="navigation-overlay fixed w-full h-full top-0 left-0 flex items-center justify-center"
                :class="{hidden: !showNavigation}"
        >
            <div class="navigation-body">

            </div>
        </div>
    </div>
</template>

<script>
    import Logo from '@theme/components/Logo'
    import SearchBox from '@SearchBox'

    export default {
        components: {Logo, SearchBox},
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

<style>
    .navigation-overlay {
        transition: opacity 0.25s ease;
    }

    body.navigation-overlay-active {
        overflow-x: hidden;
        overflow-y: visible !important;
    }
</style>
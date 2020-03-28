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
                <a href="#" class="navigation moving-gradient-text text-center font-bold text-4xl">
                    <i class="fa fa-bars moving-gradient-text text-3xl"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from '@theme/components/Logo'
    import SearchBox from '@SearchBox'

    export default {
        components: {Logo, SearchBox}
    }
</script>
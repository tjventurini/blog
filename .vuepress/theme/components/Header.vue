<template>
    <div class="header mx-auto py-4">
        <div class="grid grid-cols-12">
            <div class="col-span-1 align-middle">
                <a href="/">
                    <Logo/>
                </a>
            </div>
            <div class="col-span-11">
                <a href="/">
                    <h1><span class="align-middle heading-10 font-bold text-4xl">Thomas Venturini</span></h1>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from '@theme/components/Logo'

    export default {
        components: {Logo}
    }
</script>
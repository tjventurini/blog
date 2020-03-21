<template>
    <div class="header mx-auto p-4">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-1 align-middle">
                <Logo/>
            </div>
            <div class="col-span-11">
                <h1><span class="align-middle heading-10">Thomas Venturini</span></h1>
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

<style lang="sass" scoped>
    .header
        h1
            font-weight: bolder
            font-size: 32px
</style>
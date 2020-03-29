<template>
    <div class="tags pt-4 text-center">
        <h3 class="text-lg font-bold mb-2">CV</h3>
        <div class="text-center">
            <a :href="this.$themeConfig.cv"
               class="moving-gradient-bg px-3 py-1 rounded-lg font-bold text-white">
                Download<i class="fas fa-file-download ml-3 text-sm"></i>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CV'
    }
</script>
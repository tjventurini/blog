<template>
    <div class="skills pt-4 text-center w-2/3 m-auto">
        <h3 class="text-lg font-bold mb-2">Social</h3>
        <div class="text-center">
            <div v-for="socialLink in this.$themeConfig.socialLinks" class="social-link inline-block m-1 mt-0">
                <a :href="socialLink.url"
                   target="_blank"
                   class="moving-gradient-bg text-center px-3 py-1 rounded-lg text-white">
                    <i :class="socialLink.icon"></i>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'SocialLinks'
    }
</script>
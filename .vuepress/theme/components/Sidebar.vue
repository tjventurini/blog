<template>
    <div class="sidebar">

        <div class="profile-image overflow-hidden rounded-full w-1/2 m-auto border-2 border">
            <img src="profile.jpg" alt="Profile picture of Thomas Venturini" title="Thomas Venturini"/>
        </div>

        <div class="profile-meta pt-4">
            <h3 class="font-bold text-center text-xl">Thomas Venturini</h3>
            <p class="text-center">Laravel and Vue Developer</p>
        </div>

        <div class="skills pt-4 text-center w-2/3 m-auto">
            <h3 class="text-lg font-bold mb-2">Social</h3>
            <div class="text-center">
                <div v-for="socialLink in this.$themeConfig.socialLinks" class="social-link inline-block m-1 mt-0">
                    <a :href="socialLink.url"
                       class="moving-gradient-bg text-center px-3 py-1 rounded-lg text-white">
                        <i :class="socialLink.icon"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="skills pt-4 text-center w-2/3 m-auto">
            <h3 class="text-lg font-bold mb-2">Skills</h3>
            <div v-for="skill in this.$themeConfig.skills" class="skill inline-block mb-1">
                <span
                        class="text-center px-3 py-1 rounded-lg font-bold text-sm whitespace-no-wrap mx-1"
                ><i class="text-xs mr-2" :class="skill.icon"></i>{{ skill.name }}</span>
            </div>
        </div>

        <div class="tags pt-4 text-center">
            <h3 class="text-lg font-bold mb-2">CV</h3>
            <div class="text-center">
                <a :href="this.$themeConfig.cv"
                   class="moving-gradient-bg px-3 py-1 rounded-lg font-bold text-white">
                    Download<i class="fas fa-file-download ml-3 text-sm"></i>
                </a>
            </div>
        </div>

        <div class="tags pt-4 text-center w-2/3 m-auto">
            <h3 class="text-lg font-bold mb-2">Tags</h3>
            <div v-for="tag in $tags.list"
                 class="inline-block mb-1"
            >
                <a :href="tag.path"
                   class="tag text-center px-3 py-1 font-bold text-sm whitespace-no-wrap mx-1"
                >{{ tag.name }}<i class="fas fa-tag text-xs pl-2"></i></a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        data() {
            return {}
        }
    }
</script>
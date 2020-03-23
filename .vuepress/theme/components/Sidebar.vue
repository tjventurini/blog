<template>
    <div class="sidebar">

        <div class="profile-image overflow-hidden rounded-full w-1/2 m-auto border-2 border">
            <img src="profile.jpg" alt="Profile picture of Thomas Venturini" title="Thomas Venturini"/>
        </div>

        <div class="profile-meta pt-4">
            <h3 class="font-bold text-center text-xl">Thomas Venturini</h3>
            <p class="text-center">Laravel and Vue Developer</p>
        </div>

        <div class="tags pt-4">
            <h3 class="text-center text-lg font-bold">Tags</h3>
            <ul class="">
                <li v-for="tag in tags" class="tag">{{ tag }}</li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        data() {
            console.log(this);
            return {}
        },
        computed: {
            tags() {
                let tags = this.$site.pages.map(function (page) {
                    if (typeof page.frontmatter.tags == 'undefined') {
                        return [];
                    }
                    return page.frontmatter.tags;
                }).flat();
                return tags;
            }
        }
    }
</script>
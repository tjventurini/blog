<template>
    <div class="skills pt-4 text-center w-2/3 m-auto">
        <h3 class="text-lg font-bold mb-2">Skills</h3>
        <div v-for="skill in this.$themeConfig.skills" class="skill inline-block mb-1">
                <span
                        class="text-center px-3 py-1 rounded-lg font-bold text-sm whitespace-no-wrap mx-1"
                ><i class="text-xs mr-2" :class="skill.icon"></i>{{ skill.name }}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Skills'
    }
</script>
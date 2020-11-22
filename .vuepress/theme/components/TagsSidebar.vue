<template>
    <div class="tags pt-4 text-center w-2/3 m-auto">
        <h3 class="text-lg font-bold mb-2">Tags</h3>
        <div v-for="tag in $tags" class="inline-block mb-1">
            <a
                :href="tag.path"
                class="tag text-center px-3 py-1 font-bold text-sm whitespace-no-wrap mx-1"
                >{{ tag.name }}<i class="fas fa-tag text-xs pl-2"></i
            ></a>
        </div>
    </div>
</template>
<script>
export default {
    name: "TagsSidebar",
};
</script>
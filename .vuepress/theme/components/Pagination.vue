<template>
    <div class="pagination grid grid-cols-5 sm:grid-cols-3 gap-4 my-4">
        <div class="prev text-right">
            <a v-if="pagination.hasPrev" :href="pagination.prevLink"
               class="moving-gradient-bg text-white text-center px-4 py-2 rounded-lg">⬅</a>
        </div>
        <div class="text-center col-span-3 sm:col-span-1">
            <span class="moving-gradient-bg text-white text-center px-4 py-2 rounded-lg font-bold">Page {{
                pagination.paginationIndex }} of {{ pagination.pages.length }}</span>
        </div>
        <div class="next">
            <a v-if="pagination.hasNext" :href="pagination.nextLink"
               class="moving-gradient-bg text-white text-center px-4 py-2 rounded-lg">➡</a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Pagination',
        props: {
            pagination: {}
        }
    }
</script>
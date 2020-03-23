<template>
    <div class="pagination grid grid-cols-3 gap-4">
        <div class="prev text-right">
            <a v-if="pagination.hasPrev" :href="pagination.prevLink"
               class="moving-gradient-bg text-white text-center px-4 py-2 rounded-lg">⬅</a>
        </div>
        <div class="text-center">
            <span class="moving-gradient-bg text-white text-center px-4 py-2 rounded-lg font-bold">Page {{
                pagination.paginationIndex + 1 }} of {{ pagination.length }}</span>
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
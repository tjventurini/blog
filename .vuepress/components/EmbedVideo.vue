<template>
    <div>
        <div class="video-wrapper">
            <div class="video-spacer"></div>
            <iframe
                class="video-embed"
                :src="video"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmbedVideo",
    props: ["video"],
};
</script>

<style scoped>
.video-wrapper {
    position: relative;
}
.video-spacer {
    width: 100%;
    padding-bottom: 56.25%;
}
.video-embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
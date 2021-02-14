<template>
    <div>
        <div class="share-on-twitter w-full mt-5 bg-gray-200 p-10 rounded-lg">
            <div class="mb-5">
                <h3 class="font-bold text-xl mb-2">
                    Tweet&nbsp;
                    <i class="fab fa-twitter twitter-icon"></i>
                </h3>

                <p class="mb-5">
                    What do you think about this article? Let me know! 😁
                </p>

                <!-- code from twitter -->
                <p>
                    <a
                        :href="twitterUrl"
                        target="_blank"
                        class="button moving-gradient-bg text-center px-3 py-2 rounded-lg text-white"
                        ><i class="fab fa-twitter"></i> <b>@tjventurini</b></a
                    >
                </p>
                <!-- code from twitter -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShareOnTwitter",
    computed: {
        twitterUrl: function () {
            // set base url
            let url = "https://twitter.com/intent/tweet";

            // add screen name
            url += "?screen_name=tjventurini";

            // add some text
            url += "&text=Nice article 👍 Thx for sharing!";

            // add the tags
            if (this.$page.frontmatter.tags ?? false) {
                url += "&hashtags=" + this.$page.frontmatter.tags.join(",");
            }

            // add the url
            url +=
                "&url=" +
                this.$themeConfig.baseUrl +
                "/" +
                this.$frontmatter.permalink;

            // return the generated url
            return url;
        },
    },
};
</script>

<style scoped>
.twitter-icon {
    color: #1d9bf0;
}
</style>
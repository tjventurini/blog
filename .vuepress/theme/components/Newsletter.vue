<template>
    <div>
        <div class="newsletter w-full mt-5 bg-gray-200 p-10 rounded-lg">
            <!-- Begin Mailchimp Signup Form -->
            <form
                class="w-full"
                action="https://thomasventurini.us16.list-manage.com/subscribe/post?u=ca1aaebb1c402c379aa8edf82&amp;id=1d24155121"
                method="post"
                name="mc-embedded-subscribe-form"
                target="_blank"
                novalidate
            >
                <div class="mb-5">
                    <h3 class="font-bold text-xl mb-2">Newsletter 📨</h3>
                    <p>
                        Don't want to miss any tips? Then signup for my
                        newsletter, it will be worth it!
                    </p>
                </div>
                <div>
                    <div class="w-full mb-5">
                        <input
                            type="email"
                            value=""
                            name="EMAIL"
                            class="p-3 rounded-lg w-full"
                            id="mce-EMAIL"
                            placeholder="email address"
                            required
                        />
                    </div>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <input
                    type="hidden"
                    name="b_ca1aaebb1c402c379aa8edf82_1d24155121"
                    value=""
                />
                <div>
                    <input
                        type="submit"
                        value="Subscribe ✔"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        class="button moving-gradient-bg text-center px-3 py-1 rounded-lg text-white"
                    />
                </div>
            </form>
            <!--End mc_embed_signup-->
        </div>
    </div>
</template>

<script>
export default {
    name: "Newsletter",
};
</script>

<style scoped>
</style>
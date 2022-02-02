<template>
    <div>
        <div class="profile-image overflow-hidden rounded-full w-40 m-auto">
            <img
                class="rounded-full"
                src="/profile.png"
                alt="Profile picture of Thomas Venturini"
                title="Thomas Venturini"
            />
        </div>
        <div class="profile-meta pt-4">
            <h3 class="font-bold text-center text-xl">Thomas Venturini</h3>
            <p class="text-center">Laravel and Vue Developer</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "Profile",
};
</script>
<template>
    <div class="sidebar">

        <Profile/>

        <SocialLinks/>

        <Skills/>

        <CV/>

        <TagsSidebar/>

    </div>
</template>

<script>
    import Profile from "@theme/components/Profile";
    import SocialLinks from "./SocialLinks";
    import Skills from "./Skills";
    import CV from "./CV";
    import TagsSidebar from "./TagsSidebar";

    export default {
        name: 'Sidebar',
        components: {TagsSidebar, CV, Skills, SocialLinks, Profile},
        data() {
            return {}
        }
    }
</script>
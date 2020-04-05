<template>
    <div class="search-box">
        <input
                ref="input"
                aria-label="Search"
                :value="query"
                class="w-full"
                :class="{ 'focused': focused }"
                :placeholder="placeholder"
                autocomplete="off"
                spellcheck="false"
                @input="query = $event.target.value"
                @focus="focused = true"
                @blur="focused = false"
                @keyup.enter="go(focusIndex)"
                @keyup.up="onUp"
                @keyup.down="onDown"
        >
        <ul
                v-if="showSuggestions"
                class="suggestions top-8"
                :class="{ 'align-right': alignRight }"
                @mouseleave="unfocus"
        >
            <li
                    v-for="(s, i) in suggestions"
                    :key="i"
                    class="suggestion"
                    :class="{ focused: i === focusIndex }"
                    @mousedown="closeNavigationAndGo(i)"
                    @mouseenter="focus(i)"
            >
                <a
                        :href="s.path"
                        @click.prevent
                >
                    <span class="page-title">{{ s.title || s.path }}</span>
                    <span
                            v-if="s.header"
                            class="header"
                    >&gt; {{ s.header.title }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import SearchBox from '@SearchBox'

    export default {
        name: "SearchBox",
        extends: SearchBox,
        methods: {
            closeNavigationAndGo(i) {
                document.querySelector('.close-navigation-overlay').dispatchEvent(new Event('click'))
                this.go(i)
            }
        }
    }
</script>

<style lang="sass">
    .search-box
        margin: 0
        padding: 0
        width: 100%
        height: 100%

        input
            border-radius: 0.5rem
            width: 100%
            height: 100%
            background-position: 0.5rem center
            left: 0
            @apply bg-gray-200

            &:focus, .focus
                border-radius: 0.5rem
                width: 100%
                height: 100%
                background-position: 0.5rem center

        .suggestions
            width: 100%
            margin-top: 0.75rem
</style>
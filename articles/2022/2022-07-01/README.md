---
title: Add Scroll Event to Window in Vue Component
description: Add scroll event to window in vue component.
date: 2022-07-01
permalink: articles/add-scroll-event-to-window-in-vue-component
image: /covers/add-scroll-event-to-window-in-vue-component.png
tags: 
    - javascript
    - vue
---

Today I learned how to add a *on scroll* event listener to the `window` property when a vue component is mounted.

<!-- more -->

This task turned out to be very simple in the end. So without further ado, here is the solution you are looking for 😉

```vue
<script setup>
import { onBeforeUnmount, onMounted } from "vue"

function logScroll() {
    console.log(window.scrollY)
}

onMounted(() => {
    window.addEventListener('scroll', logScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', logScroll)
})
</script>
```

See you next time! 😁

![See you space cowboy](https://c.tenor.com/l2B3a_CL4EYAAAAC/cowboy-bebop-spike-spiegel.gif)


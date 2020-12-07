---
title: Hide GRUB on Bootup
description: How to hide GRUB on Bootup using GRUB Customizer.
date: 2021-01-29
permalink: articles/hide-grub-on-bootup
image: /covers/hide-grub-on-bootup.png
tags: 
    - ubuntu
---

When you have a single boot system but GRUB still shows up, you probably want to hide it, since it adds to your boot time. Here is how 😃

<!-- more -->

First you will need to install the `grub-customizer`.

```bash
sudo apt install grub-customizer
```

Next you just have to start it and go to _General Settings_ to disable the options _Hide Menu_ and _Look for other Operating Systems_. See screenshot below.

![GRUB Customizer](./grub-customizer.png)

Press _Save_ and you're done! 👌
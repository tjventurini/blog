---
title: Set Server Timezone on Ubuntu
description: How to set the timezone on an Ubuntu server.
date: 2020-04-05
permalink: articles/set-server-timezone-on-ubuntu
image: /covers/set-server-timezone-on-ubuntu.png
tags:
    - ubuntu
---

Yesterday I noticed that the server time on my new server at digital ocean was still set to the wrong timezone. Here is how to fix it with a simple command.

<!-- more -->

So here you go. Just run the following command.

```bash
sudo dpkg-reconfigure tzdata
```

You will have to select the right timezone from a list that will be presented to you. After that step, you should have the right time on your server.
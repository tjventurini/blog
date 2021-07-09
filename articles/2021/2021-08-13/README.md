---
title: Switch windows on current workspace only
description: How to switch windows on current workspace only.
date: 2021-08-13
permalink: articles/how-to-switch-windows-on-current-workspace-only
image: /covers/switch-windows-on-current-workspace-only.png
tags: 
    - ubuntu
    - gnome

---

In this short tutorial we are going to see how to switch windows on current workspace only in gnome on ubuntu.

<!-- more -->

So for some reason you can isolate workspaces in the gnome configuration of ubuntu, but you can't isolate the app switcher to do the same ... Let's fix that! 😎

Open a terminal and execute the following. This will set the option `current-workspace-only` to `true` on the app-switcher configuration.

```bash
gsettings set org.gnome.shell.app-switcher current-workspace-only true
```

And that's it! 😁
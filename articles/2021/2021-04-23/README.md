---
title: Keep Signal open in the Background
description: Keep signal open in the background.
date: 2021-04-23
permalink: articles/keep-signal-open-in-the-background
image: /covers/keep-signal-open-in-the-background.png
tags: 
    - ubuntu
---

Ever wondered if you can keep [signal](https://signal.org) in the background? 🤔

<!-- more -->

It is actually super easy. After you have installed the signal application from [signal.org](https://signal.org) you have to add the `--start-in-tray` flag to the command that starts the application. You can do so by editing the application launcher.

```
sudo vim /usr/share/applications/signal-desktop.desktop
```

Now update the application starter so it has the `Exec` statement as shown below.

```
Exec=/opt/Signal/signal-desktop --no-sandbox --start-in-tray %U
```

Now signal will be opened in the tray and will stay there after you have closed the window.

And that's it! 😁
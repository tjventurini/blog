---
title: Keep Signal open in the Background
description: Keep signal open in the background.
date: 2021-04-23
permalink: articles/keep-signal-open-in-the-background
image: /covers/keep-signal-open-in-the-background.png
tags: 
    - ubuntu
---

Ever wondered if you can keep [signal](https://signal.org) open in the background? 🤔

<!-- more -->

It is actually super easy. After you have installed the signal application from [signal.org](https://signal.org) you have to add the `--start-in-tray` flag to the command that starts the application. 

In order to do so, copy the application launcher over to your home directory and add the flag there.

```
cp /usr/share/applications/signal-desktop.desktop ~/.local/share/applications/signal-desktop.desktop
```

Now update the application starter so it has the `Exec` statement as shown below.

```
Exec=/opt/Signal/signal-desktop --no-sandbox --start-in-tray %U
```

Last but not least you will have to update the system cache of application files.

```bash
update-desktop-database ~/.local/share/applications
```

Now signal will be opened in the tray and will stay there after you have closed the window.

And that's it! 😁
---
title: Install composer already ...
description: One-liner to install composer.
date: 2021-01-22
permalink: articles/install-composer-already
image: /covers/install-composer-already.png
tags: 
    - ubuntu
    - composer
---

I know it is not recommended but I use it often enough, so here you have it too: A one-liner to install composer in ubuntu.

<!-- more -->

As I said before, this is not the recommended way, so you do it on your own risk.

The following will make sure you have everything installed you need for composer to install and work, get the installer, execute it with the install directory being set to `/usr/local/bin` and renaming it to `composer`.

```bash
sudo apt install curl php-cli php-mbstring git unzip \
    && php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
    && php -r "unlink('composer-setup.php');" \
    && composer --version
```

If this works, you should be see the composer version that got installed at the end of the output.

Done! 👍
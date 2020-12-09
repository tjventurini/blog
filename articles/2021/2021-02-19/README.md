---
title: Require PHP Extensions for your Project through Composer
description: How to require php extensions for your project through composer.
date: 2021-02-19
permalink: articles/require-php-extensions-for-your-project-through-composer
image: /covers/require-php-extensions-for-your-project-through-composer.png
tags: 
    - composer
    - php
    - laravel
---

So today we are going to make sure your php project has everything it needs to run when installing it on a new environment. Let's go! 🚀

<!-- more -->

Sometimes you need to make sure that your php project has the necessary tools in the environment that you want to use it. Therefore it is handy to know how to require these tools through composer.

In this example we are going to assume that you have a laravel project and you want to make sure that the environment has opcache installed on it.

First you need to find out what you want to require. If you have it installed locally you can use the following composer command.

```bash
composer show --platform
# will return something like
composer-plugin-api  1.1.0    The Composer Plugin API
composer-runtime-api 1.0.0    The Composer Runtime API
ext-ast              1.0.3    The ast PHP extension
ext-bcmath           7.4.13   The bcmath PHP extension
ext-calendar         7.4.13   The calendar PHP extension
ext-ctype            7.4.13   The ctype PHP extension
ext-curl             7.4.13   The curl PHP extension
# ...
ext-Zend-OPcache     7.4.13   The Zend OPcache PHP extension
# ...
```

As you can see you get the extension name and it's version. In this example we are going to require `ext-Zend-OPcache` in version `7.4.13`.

```json
"require": {
        "php": "^7.3|^8.0",
        "ext-zend-opcache": "7.4.13",
        "fideloper/proxy": "^4.4.1",
        "fruitcake/laravel-cors": "^2.0.3",
        "guzzlehttp/guzzle": "^7.0.1",
...
```

If you want to you can of course use a version range just as you know if from composer.

```json
"ext-zend-opcache": "^7.3",
```

Ok, now you know how to require PHP extensions in your laravel project and you will be noticed if you want to install it into a new environment ✔
---
title: How to set a Default Vendor Name for your Composer Packages
description: Learn how to set a default vendor name for your composer packgaes when running `composer init`.
permalink: articles/how-to-set-a-default-vendor-name-for-your-composer-packages
date: 2020-05-09
image: /covers/how-to-set-a-default-vendor-name-for-your-composer-packages.png
tags:
    - php
    - composer
---

When initializing a composer package with `composer init` you are asked for a `vendor/package-name`. I used to type this out all the time, but today I learned how to set a default value for the vendor name.

<!-- more -->

  

With the following fine line of magic you can set a default vendor name for your packages, that composer will use as default value for your packages. Add this to your `~/.bashrc` and you don't have to type out your `vendor/package-name` each time you run `composer init`.


```bash
vim ~/.bashrc

# ...

# set custom composer vendor name (tjventurini)
export COMPOSER_DEFAULT_VENDOR=tjventurini
```

  

Now when you run `composer init` you should already see something like the following prefilled.

  

```
Package name (<vendor>/<name>) [tjventurini/package-name]: 
```

  

The package name will come from the directory your are in.

  

Awesome!

  

**Source:** [stackoverflow.com](https://stackoverflow.com/questions/55097473/how-to-change-default-vendor-name-for-composer-init-command#answer-55200568)
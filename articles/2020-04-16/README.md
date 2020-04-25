---
title: The Most Common Composer Commands
description: A list of the most common composer commands.
permalink: the-most-common-composer-commands
date: 2020-04-16
image: /covers/common-composer-commands.png
tags:
    - composer
    - php
    - console
---

How much do you really know about composer or the composer commands that you use? Here is a list of the most common composer commands I use.

<!-- more -->

## composer requrie

This one is easy and you all know it by hard, `composer require` let's you require a new package. It will be saved to the `composer.json` file as a requirement.

```bash
composer require vendor/package
```

But you can also require a specific version of a package. This can also be used to downgrade a package, eg. because the new version has a bug or introduces a new requirement.

```bash
composer require vendor/package v1.2.3
```

## composer install

If you have ever required a package, then you probably have already installed a project with composer dependencies.

```bash
composer install
```

## composer update

Whenever you want to update the dependencies of your project, then you just have to run the following and composer will do the rest.

```bash
composer update
```

But you can also decide to just update a specific package.

```bash
composer update vendor/package
```

## composer show

If you ever need to know the exact version of some package but you don't want to search through the `composer.lock` file in your project then you can just run the following.

```bash
composer show vendor/package
```

If you want to list all your dependencies, then you can run the command without providing a `vendor/package`.

```bash
composer show
```

But the output is probably huge so I would recommend chaining it to `less`.

```bash
composer show | less
```

You can exit less by pressing `q`.

## composer outdated

Another useful one is the `outdated` command of composer. Use this command to find outdated packages in your project.

```bash
composer outdated
```

## composer remove

To remove a package you can just run the following.

```bash
composer remove vendor/package
```

## composer init

Whenever you want to start using composer in your project you can use the `init` composer command to setup the `composer.json` file for you. It will ask you some questions regarding the package name, author and license.

```bash
composer init
```

## composer dump

If you are adding php files and classes to your project, you might need to tell composer that before it can find them. To do so just run the following.

```bash
composer dump
# or
composer dump-autoload
```

## composer create-project

Finaly I want you to show you, how you can set up a blueprint repository but without the source repository being attached to it - so there won't be a `.git` folder in your working directory.

```bash
composer create-project --prefer-dist vendor/package <project-folder>
```

This will install the given package in the `<project-folder>` directory but without `.git`. This is useful if you ever want to make a project accessible for others. [Laravel](https://laravel.com/docs/7.x#installing-laravel) uses the same command to install provide you with a new instance of the framework.

Note, that this only works if you provide your repository through [Packagist](https://packagist.org/).
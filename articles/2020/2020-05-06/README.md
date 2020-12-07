---
title: PHPUnit Tests for your Laravel Package
description: A very short intro on how to create PHPUnit tests for your Laravel packages.
permalink: articles/phpunit-tests-for-your-laravel-package
date: 2020-05-06
image: /covers/phpunit-tests-for-your-laravel-package.png
tags:
    - laravel 
    - php 
    - phpunit 
    - composer 
---

A very short intro on how to create PHPUnit tests for your Laravel packages.

<!-- more -->

## Install Laravel

Before we can do anything, we have to setup setup a new Laravel project. You can of course use an existing project, but I recommend to quickly create a new one just for the purpose of this tutorial.

You can create a new Laravel project using the [Laravel CLI](https://laravel.com/docs/7.x#installing-laravel) or [Composer](https://getcomposer.org/). Replace `<project-name>` with the name you choose for your project.

```bash
laravel new <project-name>
# or
composer create-project --prefer-dist laravel/laravel <project-name> 
```

## Create Composer Package

In the past I used to have a folder `packages` at the root of my Laravel projects in which I develop but that was always quite annoying, because I had no way to use git on the Laravel instance, since there where other git repositories in the `packages` folder. My current approach is to create a new folder outside of Laravel and just linking it through the `composer.json` file.

So let's go ahead and create a new folder somewhere outside Laravel and initialize a new Composer project. Remember to replace `<folder-name>`.

```bash
cd .. # go one level up from your laravel project
mkdir <folder-name> # create a new folder
cd <folder-name> # go inside the new directory
composer init # initialize a new composer project
```

Fill out the information that Composer asks for. When you are done, open the `composer.json` file and add the Laravel specific section. Remember to replace `Your\\Namespace` with the namespace you want to use.

```javascript
{
    // ...

    "extra": {
        "laravel": {
            "providers": [
                "Your\\Namespace\\ServiceProvider"
            ]
        }
    }
}
```

Also we need to add the `autoload` section for the `src/` folder. This is the section that defines all options for Composer autoloading.

```javascript
{
    // ...

    "autoload": {
        "psr-4": {
            "Your\\Namespace\\": "src/"
        },
    },

    // ...
}
```

As you see, we are referencing the `ServiceProvider` class. This class is the real link between your Package and Laravel. So let's create it.

```bash
mkdir src # create source directory in your package
touch src/ServiceProvider.php # create the file
```

Since we are not going to add anything besides our sample test we don't need much here. Open the `ServiceProvider` class in any text editor and add the following. Remember to replace `Your\Namespace` with the namespace you are using for your package.

```php
<?php

namespace Your\Namespace;

use Illuminate\Support\ServiceProvider;

class ServiceProvider extends ServiceProvider
{
    /**
     * Boot method of this service provider.
     *
     * @return void
     */
    public function boot()
    {
        // nothing
    }

    /**
     * Register method of this service provider.
     *
     * @return void
     */
    public function register()
    {
        // nothing
    }
}
```

Last thing to do for our Composer setup, is to require the package in our Laravel application. To do so open the `composer.json` file of your project in an editor and add the following section to it. Remember to replace `<folder-name>` with the actual name of the folder. 

```javascript
{
    // ...

    "repositories": [
        {
            "type": "path",
            "url": "../<folder-name>"
        }
    ],
}
```

Now we should be able to require it in our Laravel project. Open the `composer.json` file of the Laravel project and add the following. Remember to replace `vendor/package-name` with what you are actually using in your package.

```javascript
{
    // ...

    "require": {
        // ...

        "vendor/package-name": "@dev"
    }

    // ...
}
```

Now you can just run `composer update` and Composer will create a symlink for your package in the `vendor` folder of your Laravel project. You should see an according message when composer pulls in all the dependencies.

If you missed it, you can always check if it worked by running the following. Remember to replace `<your-vendor-name>/<and-package-name>` with whatever you chose for during the Composer setup.

```bash
ll vendor/<your-vendor-name>/<and-package-name>
```

## Add a Test

Now it is time to create an actual test inside of your package. We'll use `artisan` to create a new test inside the Laravel project and then copy it to your package folder.

```bash
artisan make:test SampleTest # create SampleTest class
mkdir ../<folder-name>/tests # create directory for tests of your package
mv tests/Feature/SampleTest.php ../<folder-name>/tests/ # move the class to the composer package.
```

Now you should have the `SampleTest` class in the `tests` folder of your package. The class should look similar to the following. Make sure to update the namespaces to match the namespace you use for your package.

```php
<?php

namespace Your\\Namespace\\Tests;

use Tests\TestCase;

class SampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}

```

Now we need to update the `composer.json` file of the package so composer will also autoload the classes inside the `tests` folder of your package. Update the "autoload" section in your packages `composer.json` file as shown below.

```javascript
{
    // ...

    "autoload": {
        "psr-4": {
            "Your\\Namespace\\Tests\\": "tests/",
            "Your\\Namespace\\": "src/"
        },
    },

    // ...
}
```

Awesome, you are almost there! just one more thing and you can execute your tests!

## Setup Testsuite in Laravel

Laravel ships with a default setup for PHPUnit. In order to execute our tests as part of this setup, we need to update the `phpunit.xml` file inside the root of your Laravel project as shown below. Remember to replace `YourPackage` and `your-vendor-name/your-package-name`.

```xml
<?xml version="1.0" encoding="UTF-8"?>

    <!-- ... -->

    <testsuites>

        <!-- ... -->

        <testsuite name="YourPackage">
            <directory suffix="Test.php">./vendor/your-vendor-name/your-package-name</directory>
        </testsuite>
    </testsuites>
```

## Done!

When you now run `phpunit` the tests of your package should execute along with the ones in the Laravel project. If you only want to filter for a specific test of your package (or in the Laravel project), then you can use `--filter` on `phpunit` to only execute what you need. This also works with methods!

```bash
phpunit --filter=SampleTest
# or for the method
phpunit --filter=testBasicTest
```

## Troubleshooting

If it happens, that composer can't find the tests of your package, then you probably have a typo in one of your `composer.json` files or in the namespace of your class. I'm just pointing this out because if anything goes wrong it's typically an issue with that 😉 

If composer tries to load the package from packagist instead of your local package then make sure, that you don't have `"preferred-install": "dist",` in your `composer.json` file of the Laravel project It's typically there since Laravel 7. Also make sure to use `@dev` as version for your package when requiring in the Laravel project.


Now go out there and have fun testing your packages 😁
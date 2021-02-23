---
title: How to use Laravel Security Checker
description: How to use laravel security checker.
date: 2021-05-14
permalink: articles/how-to-use-laravel-security-checker
image: /covers/how-to-use-laravel-security-checker.png
tags: 
    - laravel
    - php
    - security
    - composer
---

This time we are going to make sure our laravel application does not require packages that have known security vulnerabilities.

<!-- more -->

The [Laravel Security Checker](https://github.com/Jorijn/laravel-security-checker) package, developed and maintained by [Jorijn](https://jorijn.com/), is a convenient and effortless way to check your `composer.lock` against the [Security Advisories Database](https://github.com/FriendsOfPHP/security-advisories) from [Friends of PHP](https://github.com/FriendsOfPHP).

## Installation

To install the package you can simply require it through composer. 

```bash
composer require jorijn/laravel-security-checker
```

## Manual Check

To check your laravel application manually using the console, you can just run the following.

```bash
php artisan security-check:now
```

This will provide you with a nice overview of vulnerabilities that you have in your application. 

Nice, right? 😁

## Schedule the Check

If you want to get even more out of it, you can run the following command on a schedule, so you can get a regular overview via email (or via slack) once your application is deployed. To do so, add the following to your `app/Console/Kernel.php` and make sure you have set up your configuration accordingly.

```php
protected function schedule(Schedule $schedule)
{
    $schedule->command(\Jorijn\LaravelSecurityChecker\Console\SecurityMailCommand::class)
        ->weekly();
}
```

Once you have decided which communication channel you want to get the security report through, you should set up the [configuration](https://github.com/Jorijn/laravel-security-checker#configuration) accordingly. 

You can set up the email that should receive the report through your environment configuration by specifying the following value.

```
LCS_MAIL_TO="someone@example.net"
```

If you want to use a slack channel, you will have to use the following. Just go to slack.com and create a new webhook for your channel so you can reference it here.

```
LCS_SLACK_WEBHOOK=https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
```

And basically you are done! 🤩
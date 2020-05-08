---
title: Laravel Macroable Trait
description: What the Laravel Macroable trait enables you to do and how you can use it.
permalink: articles/laravel-macroable-trait
date: 2020-05-12
image: /covers/laravel-macroable-trait.png
tags:
    - laravel
    - php
---

What the Macroable trait enables you to and how you can use it.

<!-- more -->





As a Laravel package developer you will find your self often in situations where you want to extend some class in package A but without touching that class because package B should just extend the original one.

  

The `Illuminate\Support\Traits\Macroable` trait brings in a handy solution for this. Just apply the trait on the class you want to extend and then you can call the methods of the traits in your service providers boot (or register) method to add these methods.


Ofcourse you need to be in control of both packages but still I think this is an awesome thing.

  

**Note** that this approach is not working with Eloquent models. Check out my other article on how to create [dynamic relationships on Laravel models](/articles/dynamic-relationships-on-laravel-models/).



Here is an article about the package that inspired the Macroable trait by [Freek Van der Herten](https://freek.dev).

  

*   [https://freek.dev/857-a-trait-to-dynamically-add-methods-to-a-class](https://freek.dev/857-a-trait-to-dynamically-add-methods-to-a-class)
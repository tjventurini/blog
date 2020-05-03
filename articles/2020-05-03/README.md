---
title: Finding Values in Arrays
description: Two simple ways to find values in arrays.
permalink: articles/finding-values-in-arrays
date: 2020-05-03
image: /covers/finding-values-in-arrays.png
tags:
    - php
    - laravel  
---

Two simple ways to find values in arrays. Simple and useful 😉

<!-- more -->

## Option 1: `in_array`

With the `in_array` function, PHP provides an easy way for finding values in arrays out of the box. Here is how it works.

```php
$array = ['foo', 'bar'];

if (in_array('foo', $array)) {
    // do something ...
}
```

Quite easy. The thing with `in_array` is that I kinda never see it being used - and I really don't know why ... 🤔

## Option 2: `Illuminate\Support\Collection`

With the `Illuminate\Support\Collection` class that Laravel provides you can do the same thing but a bit more readable - in my opinion 😉

```
$collection = collect(['foo', 'bar']);

if ($collection->contains('foo')) {
    // do something
}
```

Also nice, right? 😁

You can also use Laravel collection class outside of Laravel by requiring the `illuminate/support` package through composer.
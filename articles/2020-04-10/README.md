---
title: The easiest way to create slugs in Laravel
description: Here is another way to create slugs out of strings that might come in handy.
permalink: the-easiest-way-to-create-slugs-in-laravel
date: 2020-04-10
cover: /covers/the-easiest-way-to-create-slugs-in-laravel.png
tags:
    - laravel
---

Sometimes you need a slug version of a given string but don't want to include some external package. So here is the easiest way I could find to create slug representations of strings.

<!-- more -->

You probably have all used the two popular slug generation packages [spatie/laravel-sluggable](https://github.com/spatie/laravel-sluggable) and [cviebrock/eloquent-sluggable](https://github.com/cviebrock/eloquent-sluggable). But sometimes, you are not inside a model or you just don't want to pull in a package into your project, just for this little thing. So here is what you can do instead.

```php
use Illuminate\Support\Str;

$some_string = 'Some String';

Str::slug($some_string); // 'some_string'

$delimiter = '-';

Str::slug($some_string, $delimiter); // 'some-string'
```

And that's it! Now you have a really easy method to get generate slugs in your Laravel project.

* [API Reference](https://laravel.com/api/master/Illuminate/Support/Str.html#method_slug)
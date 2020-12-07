---
title: $fillable vs $guarded on Laravel Models
description: Everything to know about the $fillable vs $guarded on Laravel Models discussion.
permalink: articles/fillable-vs-guarded-on-laravel-models
date: 2020-04-18
image: /covers/fillable-vs-guarded-on-laravel-models.png
tags:
    - laravel 
---

Some time ago I stopped to maintain the `$fillable` attribute on my Laravel models, but rather started filling the `$guarded` attribute. And the reasons are pretty obvious if you think about it.

<!-- more -->

So before I discovered the `$guarded` attribute, I used to maintain the `$fillable` attribute on my models, probably like most of us do. And this works just fine in most cases, but I also was often in the situation that I forgot about the `$fillable` attribute and wondered why a given value would not be saved to the database.

The issue was always pretty obvious and it's no hustle to fix it, but I always wondered why there is no better way to handle this. Turns out that there is. 

The difference between `$fillable` and `$guarded` is like the difference of a whitelist and a blacklist on a firewall. By using `$fillable` you tell the model, that only the attributes listed in it are available for mass assignment. Contrary the `$guarded` attribute tells the model that the attributes listed in it, are _not_ available for mass assignment.

So instead of listing every attribute that should be fillable in `$fillable` you could just use the `$guarded` attribute to list the ones you don't want to be fillable - which is usually a much shorter list. 

Let's take a look at an example.

```php
protected $fillable = [
    'name',
    'slug',
    'price',
    'description',
    'image',
    // ...
];

# vs 

protected $guarded = [
    'id',
];
```

So I guess it obviously makes sense to just use `$guarded` instead of `$fillable`. If you really feel like you should use `$fillable` go ahead and do so, but in most cases, there is just no need for it.
---
title: Auto-Completion for Laravel Facades
description: Sometimes the Laravel ide-helper package can't help you with getting the auto-completion for your facades to work. So here I have a nice and easy way to handle this when the ide-helper package let's you down.
permalink: auto-completion-for-laravel-facades
date: 2020-04-15
image: /covers/auto-completion-for-laravel-facades.png
tags: 
    - laravel
    - php
---

Sometimes the [Laravel IDE Helper](https://github.com/barryvdh/laravel-ide-helper) package can't help you with getting the auto-completion for your facades to work in PhpStorm. So here I have a nice and easy way to handle this when the ide-helper package let's you down.

<!-- more -->

Today I learned about the `@mixin` phpDocBlock parameter. This handy parameter lets you link from one class to another in your DocBlock. So in case of a Laravel Facade, you can just link the class that you access through your facade. Here is an example.

```php
<?php

namespace Acme\WeatherForecast\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * Class WeatherForecast
 *
 * @mixin \Acme\WeatherForecast\Services\WeatherForecastService
 *
 * @package Acme\WeatherForecast\Facades
 */
class WeatherForecast extends Facade
{

    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'weather-forecast-service';
    }

}
```

And that's it! With this one line of code you can make auto-completion work in PhpStorm 😁
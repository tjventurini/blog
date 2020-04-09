---
title: Quick Intro to Laravel Facades
description: The shortest introduction to Laravel Facades I could write.
date: 2020-04-08
permalink: quick-intro-to-laravel-facades
cover: /covers/quick-intro-to-laravel-facades.png
tags:
    - laravel
---

I see a lot of packages that could make use of Laravel facades to make their services more accessible. But I completely agree with everyone who would say that the Laravel facades documentation is kinda hard to read. So here is a quicker version to get you started.

<!-- more -->

Let's say you have a service class like the following in your Laravel application or in a package.

```php
<?php

namespace App\Services;

class FooService
{
    private int $counter;

    public __construct(int $initial = 0) {
        $this->counter = $initial;
    }

    public function add(int $number) {
        $this->counter += $number;
    }

    public function getCounter() {
        return $this->counter;
    }
}
```

Then you can make it available through a binding in your `AppServiceProvider` like so.

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('foo-service', function ($app) {
            $initial = 3;
            return new \App\Services\FooService($initial);
        });
    }

    // ...
}
```

Alternatively you can use a `binding` instead of the `singleton`. A singleton will always return the same instance, but a binding will return a new instance.

Then you just have to create a facade like the following to make your service instance available through the facade.

```php
<?php

namespace App\Facades;

class Foo extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor() { 
        return 'foo-service';
    }
}
```

Awesome, that's it! 🤩 From now on you can use your facade like the following.

```php
Foo::getCounter(); // $counter == 3

Foo::add(2); // $counter += 2

Foo::getCounter(); // $counter == 5
```

As you can see Laravel facades are actually quite easy to set up and to use - so you should do so! 😉
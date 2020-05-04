---
title: Laravel Factories
description: Create demo content to fill your database or to use in unit tests. A short intro to Laravel factories.
permalink: articles/laravel-factories
date: 2020-05-07
image: /covers/laravel-factories.png
tags:
    - laravel
    - php
---

Create demo content to fill your database or to use in unit tests. A short intro to Laravel factories.

<!-- more -->

What are factories?
-------------------

Laravel factories are a convenient way to get model instances that are filled with sample data.

```php
factory(\App\User::class)->make();
```

This will create a model instance and fill it with data, but not save it to the database. Perfect for unit tests!
  

```php
[
   "name" => "Rollin Hartmann",
   "email" => "demarco00@example.org",
   "email_verified_at" => "2020-05-03 12:36:49"
]
```

If you need to add some data, then you can simply add the values as array through the `make` method.

```php
factory(\App\User::class)->make(['foo' => 'bar']);

[
  "name" => "Jesus Bergnaum",
  "email" => "ybrakus@example.org",
  "email_verified_at" => "2020-05-03 12:42:27",
  "foo" => "bar",
]
```

If you need to persist the data in the database, then you can use the `create` method instead. The `create` method also let's you add values to the model instance, just like the `make` method.

Creating Factories
------------------

Laravel provides a nice artisan command to create new factories in your project.

  

```bash
php artisan make:factory UserFactory
```

  

This command will create the `UserFactory` class in the `database/factories` directory of your project. In a default Laravel application this class is already there 😉

  

In your factory class, you can define the fields that it should provide. Let's take a look at the `UserFactory` to learn more.

  

```php
$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        'remember_token' => Str::random(10),
    ];
});
```

  

As you can see, you get a `Faker` instance to work with when defining the values of the model attributes. Check out the documentation of the [fzaninotto/faker](https://github.com/fzaninotto/Faker) package that is being used by Laravel for this.

  

Factory Providers
-----------------

If you ever need more functionality for your factories, you can probably use one of the providers from the faker package. Let's say we want to replace the static password in our faker with a generated one, then you could use the `Faker\Provider\Internet` provider.

  

```php
$factory->define(User::class, function (Faker $faker) {
    // add the provider to the faker instance
    $faker->addProvider(new \Faker\Provider\Internet($faker));

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => $faker->password(),
        'remember_token' => Str::random(10),
    ];
});
```

  

Of course the `password` field won't show up if you just dump the generated model instance, since it is hidden. But if you actually request it from the model instance, then it will show up.

  

```php
factory(\App\User::class)->make()->password
// _[~bo}h`j&
factory(\App\User::class)->make()->password
// ;sy4r$k5\]:vI>
```

  

As you can see, you now have randomized passwords instead of the static ones done by the default Faker class.


## Done!

And that was my super short intro to Laravel factories. I hope you liked it and that it will improve your database debugging and seeing of demo data.

As always, have fun playing around with it!
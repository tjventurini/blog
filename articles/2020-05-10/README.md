---
title: Dynamic Relationships on Laravel Models
description: How to add dynamic relationships on Laravel models.
permalink: articles/dynamic-relationships-on-laravel-models
date: 2020-05-10
image: /covers/dynamic-relationships-on-laravel-models.png
tags:
    - php
    - laravel
publish: true
---

Learn how to add dynamic relationships on Laravel models. 

<!-- more -->



Normally you can't extend a model without creating a lot of overhead. Also I learned the hard way, that it seems impossible to somehow use the Macroable trait on models ... 😞

But the following package can change all this with a similar approach, like the macroable trait uses.

  

*   [i-rocky/eloquent-dynamic-relation](https://github.com/i-rocky/eloquent-dynamic-relation)

  

This package will provide a simple trait for your model so you can then extend it in other places without having to touch the model. This makes it perfect for connecting models that are distributed over multiple packages.



The magic lays in the following trait.

  

```php
<?php

namespace Rocky\Eloquent;

trait HasDynamicRelation
{
    /**
     * Store the relations
     *
     * @var array
     */
    private static $dynamic_relations = [];

    /**
     * Add a new relation
     *
     * @param $name
     * @param $closure
     */
    public static function addDynamicRelation($name, $closure)
    {
        static::$dynamic_relations[$name] = $closure;
    }

    /**
     * Determine if a relation exists in dynamic relationships list
     *
     * @param $name
     *
     * @return bool
     */
    public static function hasDynamicRelation($name)
    {
        return array_key_exists($name, static::$dynamic_relations);
    }

    /**
     * If the key exists in relations then
     * return call to relation or else
     * return the call to the parent
     *
     * @param $name
     *
     * @return mixed
     */
    public function __get($name)
    {
        if (static::hasDynamicRelation($name)) {
            // check the cache first
            if ($this->relationLoaded($name)) {
                return $this->relations[$name];
            }

            // load the relationship
            return $this->getRelationshipFromMethod($name);
        }

        return parent::__get($name);
    }

    /**
     * If the method exists in relations then
     * return the relation or else
     * return the call to the parent
     *
     * @param $name
     * @param $arguments
     *
     * @return mixed
     */
    public function __call($name, $arguments)
    {
        if (static::hasDynamicRelation($name)) {
            return call_user_func(static::$dynamic_relations[$name], $this);
        }

        return parent::__call($name, $arguments);
    }
}


```

You cann install the package through composer.

```bash
composer require i-rocky/eloquent-dynamic-relation
```

Then you can apply it to your model like so.

```php
<?php

use Rocky\Eloquent\HasDynamicRelation;

// ...

class User extends Model 
{
    use HasDynamicRelation;

    // ...
}
```


Then, for example in the service provider of your package, you can call the `addDynamicRelation` method to assign a new relationship method to the model.


```php
User::addDynamicRelation('payments', function (User $User) {
    return $User->hasMany(Payment::class);
});
```


And thats it! You have added the `payments` method on the User model. Nice right? 😁
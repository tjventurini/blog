---
title: How to Structure your Classes
description: Here I want to give you an idea on how to structure your classes in PHP.
permalink: articles/how-to-structure-your-classes
date: 2020-04-20
image: /covers/structuring-your-classes.png
tags:
    - php
    - laravel
---

I often find it hard to read some other developers PHP classes. Mostly because they are not well structured and I have to jump around a lot. So here is how I try to arrange my code. I hope it gives you a good idea on how to increase the readability of your php classes.

<!-- more -->

## Bad

Before we go any further, let's take a look at a bad example.


```php
<?php

// ...

class Foo 
{
    // ...


    /**
     * ...
     */
    private function getData() {
        return Bar::where('something', 'has value')
            ->where('something', 'has another value')
            ->active()
            ->get();
    }
    
    /**
     * Main method of the class to be called somewhere.
     *
     * ...
     */
    public function handle()
    {
        $data = $this->getData();

        $data = $data->map(function($entry) {
            return array_merge($entry, [
                'some_attribute' => 'that is missing',
            ]);
        });

        $this->updateSomething($data);
    }


    /**
     * ...
     */
    private function updateSomething() {
        // ...
    }
}
```

You couldn't grasp it just by scrolling through it right? That's because the code is not really expressive the way it is right now. The code itself is pseudo code of course but that makes it even worse.

## Good

Now let's take a look at the same code but a bit more structured and expressive. 

```php
<?php

// ...

class Foo 
{
    // ...
    
    /**
     * Main method of the class to be called somewhere.
     *
     * ...
     */
    public function handle()
    {
        $data = $this->getData();

        $this->prepareData($data);

        $this->updateSomething($data);
    }

    /**
     * ...
     */
    private function getData() {
        return Bar::where('something', 'has value')
            ->where('something', 'has another value')
            ->active()
            ->get();
    }

    /**
     * ...
     */
    private function prepareData($data) {
        return $data->map(function($entry) {
            return array_merge($entry, [
                'some_attribute' => 'that is missing',
            ]);
        });
    }

    /**
     * ...
     */
    private function updateSomething() {
        // ...
    }
}
```

Pretty clear what happens just by looking at the `handle` method right?

## The Idea

So my principle is simple but effective: Put the most important part at the top and make it as readable as you can. Basically what I am trying to tell you is, that you will save yourself and everyone that looks at your code some time just by applying a bit of style and sense. To just make it work is not enough when working with others.

Before you go, here a general template that you can apply and that is I think pretty close to the arrangement options that you can set up in most editors like PhpStorm.

```php
<?php

// ...

class Foo
{
    // use statements
    use BarTrait;
    
    // constructor - so everyone knows where it starts
    
    // main method 
    // - if you have a main entry point for your logic
    //   then put it right under the constructor and
    //   make it as expressive as you can.
    
    // all methods that are used in the main method
    
    // all other methods
}
```

I hope this makes sense to you 😁
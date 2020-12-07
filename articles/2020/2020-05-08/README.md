---
title: Double Negations in PHP
description: Today we are going to look at this weird thing called double negations in PHP and what they are used for.
permalink: articles/double-negations-in-php
date: 2020-05-08
image: /covers/double-negations-in-php.png
tags:
    - php
---

Today we are going to look at this weird thing called double negations in PHP and what they are used for. And just to be clear, I'm talking about using `!!` in PHP 😉

<!-- more -->

The other day I saw something in a video on [laracasts.com](http://laracasts.com), that looked very weird to me. The weird thing in question was a double negation 👉 `!!` in a return statement.

  

In the first moment I was just wondering if this is a new kind of special operator that I didn't know about yet. I went to Google and started searching. Quickly I realized this is just a nice shorthand to transform any value into a boolean.

  

```php
return !! $value; // will always return true or false
```

  

So how does this work? The first `!` will transform the value into a boolean. This happens through negating the given value. The second `!` is used to restore the values original state in terms of its boolean representation.

  

```php
(null) // false
(! null) // true
(!! null) // false
```

  

Another nice example would be to use this in unit tests.

  

```php
return !! $user->is_active;

// or

$this->assertTrue(!! $user->is_active);
```

  

And that's basically it. Now you have a nice method at hand to transform any value into a boolean.

  

Have fun playing around with it! 😁
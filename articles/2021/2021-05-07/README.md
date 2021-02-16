---
title: Why PHP Traits are awesome!
description: Why php traits are awesome!.
date: 2021-05-07
permalink: articles/why-php-traits-are-awesome
image: /covers/why-php-traits-are-awesome.png
tags: 
    - php
---

Ever needed to share logic between two php classes without extending another class? Introducing php traits! 🤩

<!-- more -->

Let's say you have the following classes that don't share a common base class.

```php
class Product {
    public function getPrice() {
        return $this->price / 100;
    }
}

class Order {
    public function getPrice() {
        return $this->price / 100;
    }
}
```

As you can see they share some portion of logic. So how to extract that when they don't share a common class? 🤔

Easy: Use a trait! 😁

```php
trait HasPrice {
    public function getPrice() {
        return $this->price / 100;
    }
}

class Product {
    use HasPrice;
}

class Order {
    use HasPrice;
}
```

And that's it! You successfully extracted the shared logic without extending a class. Awesome, right? 😊
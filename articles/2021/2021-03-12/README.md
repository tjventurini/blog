---
title: Intro to the ReactPHP EventLoop
description: Intro to the ReactPHP EventLoop.
date: 2021-03-12
permalink: articles/intro-to-the-reactphp-eventloop
image: /covers/intro-to-the-reactphp-eventloop.png
tags: 
    - php
    - reactphp
    - composer
---

Recently I learned about ReactPHP for the first time and it looks amazing 🤩 Here is what I know so far about the ReactPHP EventLoop.

<!-- more -->

"ReactPHP is a low-level library for event-driven programming in PHP. At its core is an event loop, on top of which it provides low-level utilities, such as: Streams abstraction, async DNS resolver, network client/server, HTTP client/server and interaction with processes. Third-party libraries can use these components to create async network clients/servers and more." - [reactphp.org](https://reactphp.org/)

## Installing ReactPHP

Installing ReactPHP EventLoop package is easy. Just grab it through composer.

```
composer require react/event-loop
```

You can use the installed package through it's namespace. To do so you need to require the autoload php file that composer maintains for you.

```php
<?php

require __DIR__ . '/vendor/autoload.php';
```

## Creating a Loop

To create a loop, you should use the `Factory` class provided by the package. It will pick the best [event-loop-implementation](https://reactphp.org/event-loop/#loop-implementations) for your system.

```php
$loop = React\EventLoop\Factory::create();
```

Usually you would create a new event loop instance at the beginning of your logic, fill it, and then let it run at the end.

## Adding Elements to the EventLoop

An empty event loop is pretty useless, so you need to fill it. To do so you can use the `addPeriodicTimer` method provided by the event loop instance.

```php
$seconds = 1;
$loop->addPeriodicTimer($seconds, function () {
    echo "Tick\n";
});
```

In this example we add a closure that will be executed every second and will echo `Tick`.

If you want to have an element that will only be executed once, you should use the `addTimer` method.

```php
$loop->addTimer(0.8, function () {
    echo 'world!' . PHP_EOL;
});
```

## Running the Loop

Now that we have filled the event loop we can run it.

```php
$loop->run();
```

This will periodically run down the event loop and execute the elements when it's their time.

Remember that this loop will block until all the elements in the loop has been removed or the loop has been stopped. 

You can stop a loop manually with the `stop` method.

```php
$loop->stop();
```

## The Catch

Since PHP runs single threated the ReactPHP event loop is no real asynchronous event loop. Each element is blocking the execution of the next element. 

For example if you would add the following elements to the event loop ...

```php
$loop->addPeriodicTimer(1, function () {
    echo "Tick\n";
});

$loop->addPeriodicTimer(1, function () {
    sleep(5);
});
```

Then you would get the following output with the given delay.

```bash
Tick # 1s
Tick # 5s
Tick # 1s
Tick # 1s
# ...
```

As you can see, the second `Tick` would be delayed by 5 seconds.

Keep this in mind when you debug your event loop 😉

## More

This was a very short intro to the event loop. I recommend that you check out the [documentation](https://reactphp.org/event-loop/#quickstart-example) to learn more about it.

Here is also a nice [youtube video](https://www.youtube.com/watch?v=mJFbYHYxSDg) on how to use it.

## Done

And for now, that's all you need to get started with the ReactPHP EventLoop 😁
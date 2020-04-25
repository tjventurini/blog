---
title: Make Use of Array Mappings!
description: Avoid long if-elseif-elseif-else and switch blocks in your code and rather make use of array mappings!
permalink: make-use-of-array-mappings
date: 2020-04-25
image: /covers/make-use-of-array-mappings.png
tags:
    - php
    - laravel
---

Avoid long if-elseif-elseif-else and switch blocks in your code and rather make use of array mappings!

<!-- more -->

## The Ugly Approach

I bet you have all seen code like this.

```php
if ($something == 'something') {
    // ...
} elseif ($something == 'something else') {
    // ...
} elseif ($something == 'another thing') {
    // ...
} elseif ($something == 'what could it be?') {
    // ...
} else {
    // and this goes on and on until 
    // you reach the else statement ...
}
```

Or maybe you're a fan of the following.

```php
switch ($something) {
    case 'something':
        // ..
        break;
    case 'something else':
        // ..
        break;
    case 'another thing':
        // ..
        break;
    case 'what could it be?':
        // ..
        break;
    default:
        // goes on and on until you reach
        // the default statement if there is any ...
}
```

If you happen to write logic like this, then: _Bad developer! How dare you!_ - I'm just kidding 😉

But seriously: If you happen to write code like this, then get ready to learn something nice!

## Using Array Mappings

So instead of using the approaches I showed you above, you could use something like the following.

```php
$something = 'nothing';

$map = [
    'something',
    'something else',
    'another thing',
    'what could it be?'
];

if (in_array($something, $map)) {
    // do what you want
}
```

Pretty nice right? But if you have noticed it, that way you can only do one thing. But normally this kinda structure is not just laying around somewhere but is rather inside a method on a class or a function. So let's look at this next.

```php
function findSomething($something = 'nothing') {

    $map = [
        'something',
        'something else',
        'another thing',
        'what could it be?'
    ];

    if (in_array($something, $map)) {
        return $this->doSomething();
    }

    return $this->doSomethingElse();

}
```

Same code but inside a function and that gives us already some more flexibility. But we can do better by abstracting this method a bit.

```php
function findSomething(string $something = 'nothing', $map = []) {

    if (in_array($something, $map)) {
        return $this->doSomething();
    }

    return $this->doSomethingElse();

}
```

That's better. But you can use `in_array` not only for making decisions, but also to actually map values and resolve them against your map. Let's take a look.

```php
function resolveSomething(string $something, $map = []) {

    if (in_array($something, $map)) {
        return $map[$something];
    }

    return false;

}
```

Now you can get anything out of a map. Nice right?

If you now think you could also do the same with one line, then I want you to remind you of the annoying `Undefined index` exception that I'm sure you are familiar with ... 🙅‍♂️

But we are not done yet. There is another thing that I want to show you, using `in_array` to bring out the full potential of your code. Remember the huge _if-elseif-elseif-else_ and _switch_ statements from above? It's true, that until this point we could not gain the same flexibility with `in_array` as we did with them. But here is one thing to think about before you are ditching this approach: 

_If you have to use such long if-elseif-elseif-else and switch statements, isn't that a good hint that you need some more abstraction in your logic?_

I would say: _Yes!_ And here is how you can solve this using a array mappings.

```php
$map = [
    'something' => HandleSomething::class,
    'something_else' => HandleSomethingElse::class,
    ...
];

function handleSomething($something, $map) {
    if (in_array($something, $map)) {
        return $map[$something]::handle()
    }

    throw new \Exception("Could not do {$something} 🤷‍♂️");
}
```

Now you can split up your logic in multiple classes without creating huge overhead but with simple resolvers.

## Collections

If you like this approach, then you should definitely check out the [illuminate/support](https://github.com/illuminate/support) from [Laravel](https://laravel.com/docs/collections) and it's [has method](https://laravel.com/docs/7.x/collections#method-contains) and [contains method](https://laravel.com/docs/7.x/collections#method-contains).

Let's see how you could work with collections.

```php
$handlers = collect([
    'something' => HandleSomething::class,
    'something_else' => HandleSomethingElse::class,
    ...
]);

$something = 'something';

if ($handlers->has($something)) {
    $Handler = $handlers->get($something);
    return $Handler::handle();
}
```

And that's just one possible use of collections. I suggest you check out the [available methods](https://laravel.com/docs/7.x/collections#available-methods) and play a bit with them. 

Have fun! 😁
---
title: Javascript Object Existence in Arrays
description: Check javascript object existence in arrays.
date: 2021-02-05
permalink: articles/javascript-object-existence-in-arrays
image: /covers/javascript-object-existence-in-arrays.png
tags: 
    - javascripts
publish: true
---

Today I had to refresh my javascript knowledge a bit and found my self googling how I can prevent duplicates in my array that I wanted to fill with objects. So I share my findings with you 😃

<!-- more -->

Here we go:

```javascript
// create some objects
let objectOne = { foo: "bar" }
let objectTwo = { bar: "baz" }

// now let's create an array out the objects
//   we just created.
let objectArray = [objectOne, objectTwo]

// now we are going to create an object that is
//   a duplicate of `objectOne`
let duplicateObject = { foo: "bar" }

// last we use the `some` method on the `objectArray`
//   to prevent duplicates in it
if (!objectArray.some( element => JSON.stringify(element) === JSON.stringify(duplicateObject))) {
    objectArray.push(duplicateObject) // will not happen 😉
}

// let's see if it worked
console.log(objectArray)
```

If you would put that code into a javascript file and execute it with node, it would return the following.

```bash
[ { foo: 'bar' }, { bar: 'baz' } ]
```

And that's it! 😁
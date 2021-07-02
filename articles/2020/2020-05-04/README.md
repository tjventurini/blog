---
title: Regular Expressions in PHP
description: A quick intro to regular expressions in PHP.
permalink: articles/regular-expressions-in-php
date: 2020-05-04
image: /covers/regular-expressions-in-php.png
tags:
    - php 
    - regex
---

A quick intro to regular expressions in PHP.

<!-- more -->

## What are Regular Expressions?

Regular expressions are a way to efficiently search for patterns in text. These patterns follow a special syntax that the engine running these patterns against a text can understand.

Regular expressions are often just referred to as `regex`.

## PCRE - Perl Compatible Regular Expressions

Since PHP 5.3 you should only use the perl compatible regular expressions provided by PHP. At this point I am not sure if PHP is using some perl code behind the scenes or if it is just using the same standard, but for us it is only important, that the syntax in PHP is the same as in perl.

## PHP Functions

The functions that use the PCRE standard are prefixed with `preg_`. You can find a list of them in the [PCRE documentation](https://www.php.net/manual/book.pcre.php) of PHP. I guess the prefix could be read like _perl regular expression global_. `global`, because the php methods don't stop after the first match, just as if you would append the `/g` flag to all your patterns.

## Examples

Now let's look some examples on how to use regular expressions in PHP.

```php
$string = 'some random string';
$pattern = '/random/';
preg_replace($pattern, 'explicit', $string);
// some explicit string
```

Remember that I mentioned the `global` keyword represented in the `preg_` prefix of the PHP methods? Let's take a look what happens when we change the sting and add some more _randomness_.

```php
$string = 'some random string with some more randomness';
$pattern = '/random/';
preg_replace($pattern, 'explicit', $string);
// some explicit string with some more explicitness
```

_Auch!_ As you can see the regular expression also changed the `random` in `randomness`. Actually what I expected, but probably not what you want in a real life situation. So how can we prevent this? With patterns!

See, patterns allow you to add some logic to your search what makes regular expressions really mighty when it comes to working with text.

But now let's see how we can improve our pattern to only match `random` as a whole word and not when it is part of another word. My favorite method is to use the `\b` anchor. Anchors are _metacharacters_ that represent a certain position in the input string. The `\b` anchor is placed at the beginning and end of each full word. If you could actually see it in `some string`, then it would look like `\bsome\b \bstring\b`. Knowing this we can easily extend our pattern to only match the full word `random`.

```php
$string = 'some random string with some more randomness';
$pattern = '/\brandom\b/';
preg_replace($pattern, 'explicit', $string);
// some explicit string with some more randomness
```

It's true, that the patterns of a regular expression are not so readable, but as with everything you will get better at it very fast as soon as you start working with them.


## Links and Tools

Ugly but there: [regular-expression.info](https://www.regular-expressions.info/). There you can learn a lot more about regular expressions and the pattern syntax.

Of course you should also check out the [PCRE PHP documentation](https://www.php.net/manual/ref.pcre.php). There you will find a list of all `preg_` methods and some more in depth information on the whole topic.

Last but not least I want to share the [regex101.com](https://regex101.com/) tool, that I often use to play around with a given regular expression and to see if it works in all cases, before implementing it into a project.

Update 29.04.2021 - Cyril Bois from ExtendsClass.com has sent me over a link to their [regex-tester](https://extendsclass.com/regex-tester.html) that could be useful too.

Update 02.07.2021 - Today I found another useful tool to explore regular expressions, called [regexr.com](https://regexr.com).
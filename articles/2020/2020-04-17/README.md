---
title: Make Use of Grouped Use Statements in PHP7+
description: Since php7 we can use grouped use statements to make multiple classes of a namespace available through a single use statement.
permalink: articles/grouped-or-multiple-use-statements-in-php7
date: 2020-04-17
image: /covers/grouped-use-statements-in-php7.png
tags:
    - php
---

Since php7 we can use grouped use statements to make multiple classes of a namespace available through a single use statement. Let's take a look at this approach and how we can benefit from it.

<!-- more -->

When using libraries like the one from [stripe](https://github.com/stripe/stripe-php), you are very likely to include multiple classes from the same namespace. Prior to php7 you would have done this like so.

```php
<?php

namespace Acme\Foo;

use Stripe\Stripe;
use Stripe\Charge;
use Stripe\Customer;

class Bar {
    ...
}
```

This can lead to large header sections in your classes. Luckily, a lot of editors just hide this portion from you, but still, it's not so pretty.

Php7 introduced a new way to handle this, using [grouped use statements](https://www.php.net/manual/de/language.namespaces.importing.php#language.namespaces.importing.group). 

```php
<?php

namespace Acme\Foo;

use Stripe\{Stripe, Charge, Customer};

class Bar {
    ...
}
```

This approach feels a lot like the `import ... from ...` syntax of javascript but I guess this is way better then having large blocks of use statements at the top of your classes.
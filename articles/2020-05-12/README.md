---
title: Rename Attributes in GraphQL
description: How to rename attributes in GraphQL.
permalink: articles/rename-attributes-in-graphql
date: 2020-05-12
image: /covers/rename-attributes-in-graphql.png
tags:
    - graphql
---

Sometimes you just can't expose the internal as it is in your database or on your model. So GraphQL has a convenient way to rename attributes when defining your types in your schema.

<!-- more -->

So sometimes it is just not so clean to expose an attribute that has a name like `stripe_customer_id`. Wouldn't it be way better to expose something like `customer`? So it turns out, there is a [directive](https://graphql.org/learn/queries/#directives) for that. 

Here is an example of the `@rename` directive in action.

```graphql
extend type User {
    customer: String! @rename(attribute: "stripe_customer_id")
}
```

And from now on, you don't have to expose any ugly attributes to the frontend 😉
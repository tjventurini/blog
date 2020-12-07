---
title: What is GraphQL?
description: A quick answer to the question What is GraphQL?
permalink: articles/what-is-graphql
date: 2020-05-02
image: /covers/what-is-graphql.png
tags:
    - graphql
    - api
---

A quick answer to the question: _What is GraphQL?_ Very quick I promise 😉

<!-- more -->

## A Query Language

Imagine an API, that you can make requests to, much like you would query data from your MySQL database. 

For example, imagine that you have to query an API endpoint to get a list of users to show a list of names and their emails. This is what you could get back as a response.


```javascript
// GET https://example.com/api/users
[
    {
        "name": "John",
        "email": "john@doe.com",
        "street": "Himmelweg 11",
        "zip": "1234",
        "country": {
            "name": "Austria",
            "code": "AT"
        },
        // ...
    },
    {
        "name": "Jane",
        "email": "jane@doe.com",
        "street": "Himmelweg 11",
        "zip": "1234",
        "country": {
            "name": "Austria",
            "code": "AT"
        },
        // ...
    },
    // ...
]
```

A lot of data considering that you just need two fields of the given response. 

Here is what you would do in MySQL.

```sql
select name, email from users;
+--------+-------------+
| name   | email       |
+--------+-------------+
| John | john@doe.com  |
| Jane | jane@doe.com  |
+--------+-------------+
```

Much better right? See how a query language makes things way better for the client making the request? And thats where GraphQL comes to play.

## GrpahQL

So GraphQL is a query language and not just an API and thats exactly what makes it so powerful. Instead of just getting barely filtered data through a standard REST API, the client can select what he wants to get back from the server.

Here is how we would do it using GraphQL.

```graphql
query users {
    data {
        name
        email
    }
}
```

And here is what you would get back.

```javascript
{
    users: {
        data: [
            {
                name: "John",
                email: "john@doe.com"
            },
            {
                name: "Jane",
                email: "jane@doe.com"
            }
        ]
    }
}
```

Awesome! Now we have the power of a query language at an API level. I love it! 😍

If you are as excited about it as I am, I suggest you check out [graphql.org](https://graphql.org/) and their [documentation and learning section](https://graphql.org/learn/).

As a client I can suggest [Instomnia](https://insomnia.rest) and [Altair](https://altair.sirmuel.design/).

Have fun paying around with it! 🤓
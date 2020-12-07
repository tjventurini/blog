---
title: x-rate-limit-ip Header Explained
description: Get to know the x-rate-limit-ip http header.
date: 2020-04-07
permalink: articles/x-rate-limit-ip-header-explained
image: /covers/x-rate-limit-ip-header-explained.png
tags:
    - http
---

The other day I ran into a very restrictive API that basically blocked me instantly. So I had to figure out why this happened and how I can prevent this.

<!-- more -->

So I was querying an API the other day and felt like I was blocked instantly. After a short while, I learned, that there is a http header available, that can tell you how much requests, in which time interval you can make before you get throttled - if present.

The http header in question is the `x-rate-limit-ip` and you might have it in a response as follows.

```
"x-rate-limit-ip": "20:5:60"
```

This would mean you are allowed to make _20 requests_, within _5 seconds_, before you get throttled for `60 seconds`. So if you exceed the 20 requests within 5 seconds, you will be throttled for a full minute before you can make any requests again.

After I knew that, it was quite simple to prevent this from happening in the future. Just prevent your system from doing more then the requests in question.
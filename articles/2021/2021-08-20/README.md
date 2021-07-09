---
title: Disable foreign key checks in MySQL
description: Disable foreign key checks in mysql.
date: 2021-08-20
permalink: articles/disable-foreign-key-checks-in-mysql
image: /covers/disable-foreign-key-checks-in-mysql.png
tags: 
    - mysql
    - database


publish: true
---

Another short article in which I'm going to show you how to disable foreign key checks in mysql. Let's go!

<!-- more -->

Sometimes you want to just import a mysql dump or have to do something else in your database that conflicts with the foreign keys. For this reason there is the option of disabling foreign key checks when running a SQL script.

```sql
-- disable foreign key checks
SET FOREIGN_KEY_CHECKS=0; 

-- your sql code here

-- enable foreign key checks again
SET FOREIGN_KEY_CHECKS=1;

-- more sql code or nothing
```

And that's it! Now you can switch this option whenever you need it! 👍
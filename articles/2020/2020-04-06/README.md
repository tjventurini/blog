---
title: Fix Crashing MySQL Server 
description: Fix most of your MySQL issues with this little setting.
date: 2020-04-06
permalink: articles/fix-crashing-mysql-server
image: /covers/fix-crashing-mysql-server.png
tags:
    - mysql
---

This weekend I had to figure out why my mysql server first ate up my server resources and then crashes. A simple fix for most of the issues someone could have with mysql running out of resources, is a short setting in the right place. Read on to find out more!

<!-- more -->

When your server keeps crashing unexpectedly, due to memory issues, try to increase the `innodb_buffer_size` value in your mysql config file.

On my ubuntu server at digital ocean, the configuration file to update was `/etc/mysql/mysql.conf.d/mysqld.cnf` Just add the following setting below the `[mysqld]` heading.

```
[mysqld]
innodb_buffer_pool_size=64M
```

From now on your server should be working again and keep the memory used for this expencive task at a sertain level.

Now you can restart your mysql server and things should work again. Otherwise it was probably no issue related to `innodb` but in a lot of cases it is, so it's always worth trying.
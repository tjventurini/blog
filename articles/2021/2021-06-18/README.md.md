---
title: Import and Export MySQL Databases
description: How to import and export mysql databases.
date: 2021-06-18
permalink: articles/import-and-export-mysql-databases
image: /covers/import-and-export-mysql-databases.png
tags: 
    - database
    - mysql
    - ubuntu
publish: true
---

In this short tutorial we are going to take a look on how to import and export MySQL databases using the terminal.

<!-- more -->

## Export MySQL Databases

First wer are going to look at the export. Open up a terminal and run the following using your database credentials.

```bash
mysqldump -uroot my_database -p /path/to/database/dumps/my_database.sql
```

The command `mysqldump` will ask you for the password before it will run the export.

You can also provide your password in the command, but it is not recommended to do so.

```bash
mysqldump -uroot my_database -pSuperSecretPassword > /path/to/database/dumps/my_database.sql
```

## Import MySQL Databases

Now that you know how to export a database, it also makes sense to know how to import or _restore_ them. To do so we can use the `mysql` terminal client like shown below.

```bash
mysql -uroot my_database -p < /path/to/database/dumps/my_database.sql
```

Of course you can also provide your password in the command but as you already know it is not recommended 😉

```bash
mysql -uroot my_database -pSuperSecretPassword < /path/to/database/dumps/my_database.sql
```

And that's it! Now you know how to import and export mysql databases 😁
---
title: How to Read Log-Files
description: Work with log files using the commands less and tail.
permalink: articles/how-to-read-log-files
date: 2020-04-14
image: /covers/how-to-read-log-files.png
tags:
    - bash
    - ubuntu
---

I always see people using their editors to look into logs. So here is how not to embarrass yourself when working with log files 😉

<!-- more -->

So this one is short and simple, but super useful. Let's say you are around in the web and see someone on youtube open a log-file in his editor ... well don't just repeat that. Do the following.

## less

This first command will give you a vim like, read only view of the given log file. You will be able to navigate through it with `j` for down and `k` for down. Also you can use `gg` to move to the top of the file, and `G` to move to the bottom of the file. But also you can search with `/`.

```bash
less storage/logs/laravel.log
```

Taking a look at a large log file can be overwhelming. So to get some more information about where you are and what you are seeing, so here is a little trick: Press `Ctrl+G`. That will show you the line numbers that you are looking at and how many lines there are.

## tail

Sometimes you need to see a live feed of the log file you are looking at. To do so, use `tial -f`. Tail will show you the last 10 lines per default. But the magic comes in when you use the `-f` flag. This will allow you to _follow_ the content of the file in your terminal.

```bash
tail -f storage/logs/laravel.log 
```

Sometimes you just want to show the last `n` lines of a log file without following. And that is most likely more then the last 10 lines. So you can run `tail` with the `-n` flag. The following will show you the last 100 lines of the given log file.

```bash
tail -n 100 storage/logs/laravel.log
```

So there you go, now you have some easy tools at hand to work with log files.
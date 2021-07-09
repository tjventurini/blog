---
title: Log Output of Command to File
description: How to log output of a command to file.
date: 2021-08-06
permalink: articles/log-output-of-command-to-file
image: /covers/log-output-of-command-to-file.png
tags: 
    - ubuntu
    - terminal
# publish: true
---

In this post I'm going to show you my favorite way of logging the output of a command to a log file.

<!-- more -->

## Types of Output

There are two types of output that are important for us, `stdout` (1) and `stderr` (2).

## Redirect `stdout` to a File

So the simplest way to redirect all output of a command to a given log file is to use the `>` operator.

```bash
command > all.log
```

## Redirect `stderr` to a File

To redirect only the errors of a command to a given file you can use `2>`.

```bash
command 2> error.log
```

## Redirect `stdout` and `stderr` to separate Files

You can combine both syntaxes to separate the two and write into different log files.

```bash
command > stdout.log 2> stderr.log
```

## Redirect `stdout` and `stderr` to the same File

Of course you can also redirect the outputs into the same file.

```bash
command > all.log 2>&1
```

The `2>&1` rewrites the output of `stderr` (2) to `stdout` (1).

## Redirect to a `null` Device

If you basically want to ignore some or all output of a command, you can redirect it to a `null` device instead of a file.

```bash
command > /dev/null
command 2> /dev/null
command > /dev/null 2>&1
```

## Use `tee` to write to File and to Screen

The downside of the methods shown is that they do no longer write the given output to the screen. But there is `tee` for the rescue! This command writes to a given file and still writes to stdout 🤩

```bash
command |& tee all.log
```

`|&` is shorthand for `2>&1`.


And that's it! 😎
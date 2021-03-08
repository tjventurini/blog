---
title: Get Current Timestamp in Terminal
description: Get current timestamp in terminal.
date: 2021-05-28
permalink: articles/get-current-timestamp-in-terminal
image: /covers/get-current-timestamp-in-terminal.png
tags: 
    - ubuntu
    - console
    - bash
    - zsh
---

A simple alias to return the current timestamp.

<!-- more -->

Yup, this time it is a really simple one. But since I keep adding it to my terminal configs I thought I share it with you.

To get the current timestamp you can run the following.

```bash
date +"%s"
```

As you can see it's only the `date` command with a format of `%s`.

Now if you find it useful - like me 😉 - then you can save it as an alias to your `~/.bashr` or `~/.zshrc` file.

```bash
alias timestamp='date +"%s"'
```

And that's it 😁
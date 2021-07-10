---
title: Copy-Paste using the command line
description: Copy-paste using the command line.
date: 2021-09-03
permalink: articles/copy-paste-using-the-command-line
image: /covers/copy-paste-using-the-command-line.png
tags: 
    - terminal
    - ubuntu
    - bash
    - zsh
  
# publish: true
---

Today I learned how to copy-paste through the command line. So I thought I'll share it with you 😉

<!-- more -->

## Install xclip

So to copy-paste through the command line we are going to use [xclip](https://github.com/astrand/xclip). xclip ca be installed on ubuntu using the following.

```bash
sudo apt install xclip
```

## Using xclip

The simplest example on using xclip is the following.

```bash
# store "foo" in the clipboard
echo "foo" | xclip -in

# output the content of the clipboard
xclip -out
```

Before you use it you should know the following. xclip has three types of storage. `primary`, `secondary` and `clipboard`.

Per default it stores values you pass to it in `primary`. But what you typically want to do is to save it to your `clipboard`.

So what you are going to use typically is the following.

```bash
# store "foo" in the clipboard
echo "foo" | xclip -in -selection clipboard

# output the content of the clipboard
xclip -out -selection clipboard
```

I suggest that you add an alias to your `~/.bashrc` or `~/.zshrc` file so you have the clipboard set per default.

```bash
alias xclip='xclip -selection clipboard'
```

You could also go further and add aliases for `copy` and `paste`. Or if you are a vim user `yy` and `pp` or something alike 😉

```bash
alias copy='xclip -in -selection clipboard'
alias paste='xclip -out -selection clipboard'
```

You can also use xclip to copy-paste files.

```bash
xclip -in -selection clipboard some_file.txt

xclip -out -selection clipboard > target_file.txt
```

Notice the `>` in the output command.

And that's it! 😁
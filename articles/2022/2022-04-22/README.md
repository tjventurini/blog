---
title: How to check Ubuntu Version in Terminal
description: How to check ubuntu version in terminal.
date: 2022-04-22
permalink: articles/how-to-check-ubuntu-version-in-terminal
image: /covers/how-to-check-ubuntu-version-in-terminal.png
tags: 
    - ubuntu
    - linux
publish: true
---

Sometimes you need you know what Ubuntu version your server is running on. Here is how! 🤓

<!-- more -->

The command to know here is `lsb_release`. This simple command can show you the most important information about the Ubuntu release installed on the machine in question.

```bash
lsb_release --help

# output
Usage: lsb_release [options]

Options:
  -h, --help         show this help message and exit
  -v, --version      show LSB modules this system supports
  -i, --id           show distributor ID
  -d, --description  show description of this distribution
  -r, --release      show release number of this distribution
  -c, --codename     show code name of this distribution
  -a, --all          show all of the above information
  -s, --short        show requested information in short format
```

The most common usage of the command for me is to just run `lsb_release -a`. This will show you all the information about the Ubuntu release.
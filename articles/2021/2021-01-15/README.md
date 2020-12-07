---
title: Fix missing Aliases when using sudo
description: Fix missing Aliases when using sudo.
date: 2021-01-15
permalink: articles/fix-missing-aliases-when-using-sudo
image: /covers/fix-missing-aliases-when-using-sudo.png
tags: 
    - ubuntu
---

I just learned a nice fix for missing aliases when using `sudo` that I wanted to share with you.

<!-- more -->

This fix was found on [askubuntu](https://askubuntu.com/questions/22037/aliases-not-available-when-using-sudo/22043#22043) and it is so easy and elegant that everyone could have thought of.

Add this to your users `~/.bashrc`, or `~/.zshrc` file.

```bash
alias sudo='sudo '
```

⚠ Note the space at the end of the alias content `'sudo '`. This will cause that not only `sudo` is parsed using the aliases, but also the next word. 

Let's say you have the following aliases in your users `.bashrc` file.

```bash
alias vim='nvim'
alias sudo='sudo '
```

Then you can use your vim alias with sudo just as shown below.

```bash
sudo vim /etc/hosts
```

Nice and tight right? 😎
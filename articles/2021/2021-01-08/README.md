---
title: Install NeoVim 0.5 in Ubuntu
description: How to install NeoVim 0.5 in Ubuntu.
date: 2021-01-08
permalink: articles/install-neovim-05-in-ubuntu
image: /covers/install-neovim-05-in-ubuntu.png
tags: 
    - ubuntu
    - vim
---

How to install NeoVim 0.5 in Ubuntu. Short and uncomplicated.

<!-- more -->

[NeoVim](https://neovim.io) 0.5 can be installed using the neovim-ppa.

```bash
sudo add-apt-repository ppa:neovim-ppa/stable
sudo apt-get update
sudo apt-get install neovim
```

Next you should create a custom `vimrc` file for it - see `:help nvim-from-vim`.

It will tell you that you should execute (`:`) the following from within `nvim`.

```
:call mkdir(stdpath('config'), 'p')
:exe 'edit '.stdpath('config').'/init.vim'
```

Then copy in the following piece of code, which will ensure that your normal `.vimrc` file is loaded. So you don't have to manage that second configuration except it really is a `nvim` specific configuration.

```
set runtimepath^=~/.vim runtimepath+=~/.vim/after
let &packpath = &runtimepath
source ~/.vimrc
```

This file will be located under `~/.config/nvim/init.vim`.

If you are lazy and are used to type `vim` in your terminal, then you should add the following aliases to your `.bashrc` or `.zshrc` file.

```bash
alias vim='nvim'
alias vi='nvim'
```

And that's it. Have fun with it 😁
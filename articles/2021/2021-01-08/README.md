---
title: Install NeoVim 0.5 in Ubuntu
description: How to install NeoVim 0.5 in Ubuntu.
date: 2021-01-08
permalink: articles/install-neovim-05-in-ubuntu
image: /covers/install-neovim-05-in-ubuntu.png
tags: 
    - ubuntu
    - vim
    - neovim
---

How to install NeoVim 0.5 in Ubuntu. Short and uncomplicated.

<!-- more -->

[NeoVim](https://neovim.io) 0.5 can be installed using the neovim-ppa.

```bash
sudo add-apt-repository ppa:neovim-ppa/unstable
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

If you are lazy (like me) you can add `nvim` as `vim` alternative.

```bash
sudo update-alternatives --install $(which vim) vim $(which nvim) 10
```

Now you can call the following to choose `nvim` as alternative to `vim` so whenever you call `vim` in the terminal it actually starts `nvim`.

```bash
sudo update-alternatives --config vim
```

Select `nvim` through the number in the first column.

And that's it. Have fun with it 😁

## Troubleshooting 💢

If you run into issues with the [infinite file opening loop](https://github.com/asvetliakov/vscode-neovim/issues/632) you can try the following.

```bash
# vscode
curl -L https://gist.github.com/kidonng/1f70b2e3de50b519483f6c79dd3d82e2/raw/6b865cec34f78475dc50b208b30563d337427543/extension.js > ~/.vscode/extensions/asvetliakov.vscode-neovim-0.0.78/dist/extension.js

# vscode insiders
curl -L https://gist.github.com/kidonng/1f70b2e3de50b519483f6c79dd3d82e2/raw/6b865cec34f78475dc50b208b30563d337427543/extension.js > ~/.vscode-insiders/extensions/asvetliakov.vscode-neovim-0.0.78/dist/extension.js
```

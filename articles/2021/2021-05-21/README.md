---
title: How to use update-alternatives
description: How to use update-alternatives to manage editors.
date: 2021-05-21
permalink: articles/how-to-use-update-alternatives
image: /covers/how-to-use-update-alternatives.png
tags: 
    - ubuntu
    - editors
    - vim
    - vscode
    - neovim
---

This time we are going to look at the `update-alternatives` command to maintain symbolic links to chosen defaults. 

<!-- more -->

Let's clear the matter a bit with some common examples for the editors. For example you could choose to install [NeoVim](https://neovim.io) but want to call it using `vim` as you did previous. So how could we do so? Introducing `update-alternatives`!

## Add `vim` alternative for `nvim`

First we need to install the alternative. 

```bash
sudo update-alternatives --install $(which vim) vim $(which nvim) 10
```

The first argument `$(which vim)` represents the path to symbolic link that we want to mange. In this case it is `/usr/bin/vim`. 

The second argument is the name of the command that we want to use in the terminal. You can think of it as the name of the entry. In our case it is `vim`.

The third argument is the path to the alternative that we want to install. In this case it is `/usr/bin/nvim`.

If we now call `update-alternatives` with the `--config` flag we can choose from the available alternatives.

```bash
sudo update-alternatives --config vim
```

Pick your option using the number shown in the first column.

If there is only one option you will get notified that there is no other option to choose from than the default.

## Add `code` alternative for `code-insiders`

Now let's pick another example. Let's say you have installed [VS Code Insiders](https://code.visualstudio.com/insiders/) over the standard VS Code. To start it using the terminal you would need to call `code-insiders` instead of `code`. So let's add an alternative for `code`.

```bash
sudo update-alternatives --install $(which code) code $(which code-insiders) 1
```

Now you can call `update-alternatives` again with the `--config` flag to choose what you want to start when calling `code`.

```bash
sudo update-alternatives --config code
```

Choose `code-insiders` and from now on you can start it through the `code` command.

## Troubleshooting

When you don't have installed `vim` or `code` already but want install an alternative for it anyways, then you can just type out the path for it manually. For example for `vim` you would use `/usr/bin/vim` as first argument.

## Done!

And that's it. From now you are able to add alternatives for any software you want 🤩
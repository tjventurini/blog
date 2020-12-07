---
title: Install FiraCode on Ubuntu for VSCode
description: Install FiraCode on Ubuntu for VSCode
date: 2020-12-25
permalink: articles/install-firacode-on-ubuntu-for-vscode
image: /covers/install-firacode-on-ubuntu-for-vscode.png
tags: 
    - ubuntu
    - vscode
---

Recently I set up my pc with Ubuntu and so I thought I document a few things I had to look up again my self. One of the things was to set up FiraCode font in VSCode.

<!-- more -->

Ok, so it is really easy so I'm not gonna tell you much about it. Just follow the following steps and that's it 😉

## Install the Font

To install the [FiraCode](https://github.com/tonsky/FiraCode) font in [Ubuntu](https://ubuntu.com) just run the following command.

```bash
sudo apt install fonts-firacode
```

## Use the FiraCode in VSCode

Next open up the vscode settings (press `ctrl+,`) and search for `editor: font family`. Then you enter `Fira Code`. 

### Using the JSON Settings

You can also choose to use the json configuration of vscode to set the editor font to FiraCode. To do so open the command palette (press `ctrl+shift+p`), search for `preferences: open settings json` and select the entry. Then just add the following lines to the end of the file.

```json
"editor.fontFamily": "Fira Code",
"editor.fontLigatures": true,
```

## Last Step

It is very likely, that you need to restart vscode before the changes are applied.

Done! 😁
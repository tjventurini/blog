---
title: Save Vim Macros to your vimrc
description: Save vim macros to your vimrc.
date: 2021-04-09
permalink: articles/save-vim-macros-to-your-vimrc
image: /covers/save-vim-macros-to-your-vimrc.png
tags: 
    - vim
---

Lately I'm using Vim (or actually NeoVim) more and more often. This comes with the need for Macros. Here is how you can save your vim macros permanently to your vimrc.

<!-- more -->

The following two macros are good examples that you can use as a blueprint.

```
let @c ="I// \<Esc>j"
let @u = "I\<Del>\<Del>\<Del>\<Esc>j"
```

The first macro will add the string `"// "` to the start of the line.

The second macro will remove the string `"// "` from the start of the line. 

As you can see, you are able to save any combination of keystrokes as a permanent macro to your `~/.vimrc` configuration.

If you need help with the key notation, you can check out the vim help about it with `:help key-notation` from command mode.

And that's all there is to it 😁
---
title: Recording Macros in Vim
description: How to record macros in vim.
date: 2021-03-26
permalink: articles/recording-macros-in-vim
image: /covers/recording-macros-in-vim.png
tags: 
    - vim
---

Here is how to record and execute macros in vim. Short and simple.

<!-- more -->

## Recording a Macro in Vim

To record a macro press `q` in command mode and then the letter to which you want to save it. So if you press `qa` and start recording, your macro would be saved to `a`. You stop recording by pressing `q` again in command mode.

## Executing a Macro in Vim

To execute the macro you saved to `a` you would press `@a`. 

If you want to execute the same macro multiple times, you can press `.` to do so.
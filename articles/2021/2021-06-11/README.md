---
title: Best way to work with TODOs in VSCode
description: The best way to work with todos in vscode.
date: 2021-06-11
permalink: articles/the-best-way-to-work-with-todos-in-vscode
image: /covers/the-best-way-to-work-with-todos-in-vscode.png
tags: 
    - vscode
---

Today we are going to take a look at the best way to manage TODOs in vscode I found so far.

<!-- more -->

So recently I had to take over a project where the developer had left a lot of TODOs in his code - important ones that have not been represented in our task management tool. So for a short moment I was actually missing phpstorm since it has a nice way of handing TODOs out of the box. But then I found this awesome vscode extension [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree).

## What does it do?

Todo Tree does not only provide highlighting for TODOs and other tags such as `FIXME`, `BUG` or any other custom tag that you want to add, but also provides a _realy_ nice way to list them.

![Tags](./tags.png)

<br />

![List](./list.png)

As you can see Todo Tree does a great job on highlighting TODOs but also provides a nice list to navigate through it.

## Configuration

Configuration is easy. Just add the following to your vscode json settings and you have a basic self explanatory example config to start with.

```json
"todo-tree.highlights.defaultHighlight": {
    "icon": "alert",
    "type": "text-and-comment",
    "foreground": "black",
    "background": "white",
    "opacity": 50,
    "iconColour": "blue",
    "gutterIcon": true,
},
"todo-tree.highlights.customHighlight": {
    "TODO": {
        "icon": "check",
        "foreground": "black",
        "background": "white",
    },
    "NOTE": {
        "icon": "note",
        "foreground": "white",
        "background": "gray",
    },
    "COMMENT": {
        "icon": "note",
        "foreground": "white",
        "background": "gray",
    },
    "FIXME": {
        "foreground": "black",
        "background": "yellow",
        "iconColour": "yellow",
    },
    "BUG": {
        "foreground": "black",
        "background": "red",
        "iconColour": "red",
    },
    "[x]": {
        "icon": "check",
        "foreground": "white",
        "background": "green",
        "iconColour": "green",
    }
},
"todo-tree.general.tags": [
    "BUG",
    "HACK",
    "FIXME",
    "TODO",
    "NOTE",
    "COMMENT",
    "XXX",
    "[ ]",
    "[x]"
],
```

Ok, that's a bit too much to just throw it at you, so let's take a closer look.

The first section `todo-tree.highlights.defaultHighlight` defines the default highlighting styles for any tag.

The second section `todo-tree.highlights.customHighlight` overwrites it for a given tag.

The third section `todo-tree.general.tags` defines what tags to look for in your code.

## Icons

Yes icons deserve their own section 😉 Todo Tree uses the `codicon` iconfont. You can browse the list of available icons to set in your configuration [here](https://microsoft.github.io/vscode-codicons/dist/codicon.html).

## Usage Ideas

Before you go, here are some useful ideas on how you can make this extension really work for you 😁

### Checklists

![Checklist 1](./checklist-1.png)

<br />

![Checklist 2](./checklist-2.png)

For some reason the `close` icon that should represent the cross is not working 🤔

### Notes

![Notes](./notes.png)

## More!

For further insights and configuration options, I suggest you check out the [package documentation](https://github.com/Gruntfuggly/todo-tree).

And that's it! 😁
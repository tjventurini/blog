---
title: Move through Suggestions with Tab in VS Code
description: Move through suggestions with tab in vs code.
date: 2021-04-02
permalink: articles/move-through-suggestions-with-tab-in-vs-code
image: /covers/move-through-suggestions-with-tab-in-vs-code.png
tags: 
    - vscode
---

Today I have been looking for a way to move through the suggestions that VS Code provides while typing using the `TAB` key. Here is how I set it up 😎

<!-- more -->

Simply put the following into the bottom of the `keybindings.json` file of your VS Code configuration. You can reach it by searching for `Open Keyboard Shortcuts (JSON)` into the command palette. 

```json
    {
        "key": "tab",
        "command": "selectNextQuickFix",
        "when": "editorFocus && quickFixWidgetVisible"
    },
    {
        "key": "shift+tab",
        "command": "selectPrevQuickFix",
        "when": "editorFocus && quickFixWidgetVisible"
    },
    {
        "key": "tab",
        "command": "selectNextSuggestion",
        "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible"
    },
    {
        "key": "shift+tab",
        "command": "selectPrevSuggestion",
        "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible"
    }
```

You might need to restart VS Code 😉

And that's it. You should be able to navigate through the suggestions that VS Code provides using the `TAB` key.
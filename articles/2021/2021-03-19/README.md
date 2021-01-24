---
title: Run Vim Macro on Visual Selection
description: How to run vim macro on visual selection.
date: 2021-03-19
permalink: articles/run-vim-macro-on-visual-selection
image: /covers/run-vim-macro-on-visual-selection.png
tags: 
    - vim
---

Sometimes you want to run a macro in vim on a visual selection. Here is how 😁

<!-- more -->

## Setup VIM

Add the following to your `.vimrc`.

```
xnoremap @ :<C-u>call ExecuteMacroOverVisualRange()<CR>

function! ExecuteMacroOverVisualRange()
  echo "@".getcmdline()
  execute ":'<,'>normal @".nr2char(getchar())
endfunction
```

Now you can select lines with `V` in vim and execute macros on all selected lines - eg. with `@q`.

## Example

Let's say we have the following piece of code.

```php
// public function doSomething() {
//     echo "something";
// }

public function doSomethingElse() {
     echo "something else";
}

// public function doSomethingMore() {
//     echo "something more";
// }
```

Then we could record the following while we uncomment the first line of the `doSomething` method.

```
I<Del><Del><Del><Esc>j
```

Then the method would look like the following and your cursor would be on the second line.

```php
public function doSomething() {
//     echo "something";
// }
```

Now press `V` in command mode to select the current line and select the rest of the method by pressing `j` one time. Next you can run the macro you just recorded - eg. with `@a`.

This should run the sequence `I<Del><Del><Del><Esc>j` on all selected lines.

Now go ahead and try it out with the other commented out method 👨‍🏫

Awesome right? 😁
---
title: Ubuntu Show Open Ports
description: Ubuntu show open ports.
date: 2021-06-04
permalink: articles/ubuntu-show-open-ports
image: /covers/ubuntu-show-open-ports.png
tags: 
    - ubuntu
    - terminal
    - networking
---

How to list the open ports of your system.

<!-- more -->

## List your open ports

To list the currently open ports on your system we use [lsof](https://manpages.ubuntu.com/manpages/hirsute/en/man8/lsof.8.html).

```bash
sudo lsof -i -P -n
```

Here the explanation of the arguments from the man page.

| argument | description                                                                                                                                                                                                        |
| :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    -i    | selects the listing of files any of whose Internet address  matches  the  address specified  in  i.  If no address is specified, this option selects the listing of all Internet and x.25 (HP-UX) network files.   |
|    -P    | inhibits  the  conversion  of  port  numbers  to  port  names  for network files. Inhibiting the conversion may make lsof run a little faster.  It is  also  useful when port name lookup is not working properly. |
|    -n    | inhibits the conversion of network numbers  to  host  names  for  network  files. Inhibiting conversion may make lsof run faster.  It is also useful when host name lookup is not working properly.                |

You can also filter through for the listening ports using [grep](https://manpages.ubuntu.com/manpages/groovy/en/man1/grep.1posix.html).

```bash
sudo lsof -i -P -n | grep LISTEN
```

## Tip: Save as alias

If you intent to use this command a lot, I recommend that you save it as an alias in your `~/.bashrc` or `~/.zshrc`.

```bash
alias ports='lsof -i -P -n | grep LISTEN'
```

And that's it! Now you have a handy way to listen the open ports of your system 😁
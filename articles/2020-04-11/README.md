---
title: Search and Replace in Large Files
description: How to search and replace strings in large files.
permalink: articles/search-and-replace-in-large-files
date: 2020-04-11
image: /covers/search-and-replace-in-large-files.png
tags:
    - console
    - bash
    - ubuntu
---

The other day I had to prepare a very large data source before importing it into the database. So here is a nice tool to help you with this kind of task that your IDE might refuse to do for you.

<!-- more -->

The tool I want to show to you today is the command line tool `sed`. In short it is a tool to search and replace with an easy syntax. Out of the box it works with input streams and files alike, what makes it easy to work with it in a chain of commands.

The data source I had to update was a [list of airports](https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat) from [openflights.org](https://openflights.org). Unfortunately Sublime-Text refused to execute the regular expression I tried to execute on the file, so I had to find something else.

Of course the tool I used in the end was `sed`. Here are some examples to show how it works.

```bash
sed 's/search/repalce/g' input.txt
```

This command will search for `search` in the `input.txt` file and replace it with `replace`. Note that this will just return the output back to the standard output. Use the `-i` flag to write back to the input file.

```bash
sed -i 's/search/repalce/g' input.txt
```

As you can see, `sed` uses regular expressions to search and replace.

Here is a more useful example of `sed` in action. The following command will replace all empty lines in the file input file.

```bash
sed -i '/^$/d' input.txt
```

What I had to do on the list of airports from openflights.org, was to remove all entries that are not located in Europe. Fortunately for me, the timezone of the airports is also available in the list of airports. So I could remove all entries that do not have the string `Europe` in it. And this is how this can be done with `sed`.

```bash
sed -i '/Europe/!d' input.txt
```

As you can see, `sed` is a nice little command to add to your toolbox. Have some fun with it 😁
---
title: Compress PDFs using the Terminal
description: Compress pdfs using the terminal.
date: 2021-04-16
permalink: articles/compress-pdfs-using-the-terminal
image: /covers/compress-pdfs-using-the-terminal.png
tags: 
    - ubuntu
    - console
    - terminal
---

Here is a simple way to reduce the file size of your PDF files. Let's go! 😁

<!-- more -->

Ok, so let's say you have a large PDF and you want to share it via mail or some chat but it is to large to do so ... If there would just be a handy way to do so 🤔

But don't worry I got you covered! 😁

First you need to install [Imagick](https://imagemagick.org/index.php). Run the following command to do so.

```
sudo apt install imagemagick
```

This will provide you with the handy `convert` command. This command can be used to do all sorts of image manipulation and you should really check it out 😉

Now we can run the following command to reduce the file size of our large pdf using the following command.

```
convert -density 200x200 -quality 60 -compress jpeg LargeFile.pdf SmallFile.pdf
```

If you need this command frequently it makes sense to add an alias for this command. You can do so by adding the following to your `~/.bashrc` or `~/.zshrc` file.

```
alias compresspdf='convert -density 200x200 -quality 60 -compress jpeg'
```

And that's it! 😁

Source: [askubuntu.com](https://askubuntu.com/questions/113544/how-can-i-reduce-the-file-size-of-a-scanned-pdf-file/469255#469255)
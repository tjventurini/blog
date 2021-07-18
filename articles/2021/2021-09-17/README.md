---
title: How to use APT
description: How to use APT.
date: 2021-09-17
permalink: articles/how-to-use-apt
image: /covers/how-to-use-apt.png
tags: 
    - ubuntu
# publish: true
---

The [Advanced Packaging Tool](https://en.wikipedia.org/wiki/Advanced_Packaging_Tool) is a nice [dpgk](https://en.wikipedia.org/wiki/Debian_Package_Manager) wrapper that makes it easy to maintain the packages of your system. In this short article, we are going to go over the essentials of it.

<!-- more -->

APT is a package manager for Debian and its derivatives, like Ubuntu. It is a wrapper around the dpkg command, which is a tool for installing and removing packages. It is a very powerful tool, and it is a very useful tool to have in your toolbox.

## Update the Package List

The following command will update the package list of your system.

```bash
sudo apt update
```

## Installing Packages

Once your package list is updated, you can install packages using the following command.

```bash
# from package list
sudo apt install PACKAGE_NAME

# form a .deb file
sudo apt install PACKAGE_NAME.deb
```

## Updating Packages

The following command will update the packages that are already installed.

```bash
# simple update of all packages
sudo apt upgrade

# smart upgrade that can also remove package dependencies that are no longer needed
sudo apt full-upgrade
```

## Search for Packages

Of course you can also search for packages using apt.

```bash
# search the package list for a package
apt search SEARCH_TERM
```

## Show Package Information

You can also show the information of a package using the following command.

```bash
apt show PACKAGE_NAME
```

## Remove a Package

```bash
# removing a package
sudo apt remove PACKAGE_NAME

# removing a package and its configuration files
sudo apt purge PACKAGE_NAME
```

## Autoremove Packages

There is also a nice helper for you to remove packages that have been installed automatically and are no longer needed.

```bash
sudo apt autoremove
```


And that's it! 😎
---
title: Make use of SSH config file
description: How to make use of a ssh config file.
date: 2021-01-01
permalink: articles/make-use-of-ssh-config-file
image: /covers/make-use-of-ssh-config-file.png
tags: 
    - ubuntu
    - ssh
---

Today we are going to create a ssh config file so you can access common hosts faster. Also it can make everything more secure 🔒

<!-- more -->

## The Basics

SSH configuration files have a very easy schema in most cases. Basically the following example contains everything you need to know 😁

```
Host <your-host-alias>
    HostName <IP-or-domain-of-the-server>
    User <the-user-on-the-server>
    Port <the-port-to-use>
```

Here is a filled out example:

```
Host example
    HostName example.com
    User root
    Port 1234
```

If your system user is the same as on the remote server, you don't need to set the user specifically. Also you only have to specify the port if it is not port 22.

Your configuration file should be located at `~/.ssh/config`.

## Login without Password

Additionally to prevent entering a your password on each login to your servers, you can also choose to use a _ssh-key_. These are stored in the `~/.ssh` folder. 

To do so, you first need to create a ssh-key pair using the following command.

```bash
ssh-keygen
```

It will ask you for a filename and a password, but you can just leave it empty.

Such an ssh key pair consists of a _private_ and a _public_ key. To login to the server you will have to install your public key to the server. To do so we use the following command.

```bash
ssh-copy-id example # if you hav already added this host to your ssh config
ssh-copy-id example.com # if you didn't
```

Now you should be able to login now without having to enter a password.

```bash
ssh example
```

## Additional SSH Keys

You can also add additional ssh key pairs, eg. for each server or purpose. To do so just change the filename in the dialog of `ssh-keygen`.

To then specify a specific ssh key you can add it to your ssh config file.

```
Host example
    HostName example.com
    User root
    IdentityFile ~/.ssh/id_rsa_example
```

To install a specific key on a server you can use the following command.

```bash
ssh-copy-id example -i ~/.ssh/id_rsa_example
```

You can also specify a ssh key when using `ssh` directly.

```bash
ssh -i ~/.ssh/id_rsa_example example
```

## More

If you want to learn more about the usage of ssh, then you can check out the [project documentation](https://man.openbsd.org/ssh_config) or run `man ssh`.

## Happy new Year!

Happy new year! 🥳🍾🥂🎉
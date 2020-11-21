---
title: Install nodejs using nvm
description: How to install nodejs using nvm.
permalink: articles/how-to-install-nodejs-using-nvm
date: 2020-11-21
image: /covers/install-nodejs-using-nvm.png
tags:
    - nodejs
---

In this short article we will take a look at nvm (node version manager) and use it to install different node versions.

<!-- more -->

Nvm is available on [github](https://github.com/nvm-sh/nvm) and the installation is very simple. For the sake of this article we are going through it anyways. Please replace the version with the latest release tag from the [release page](https://github.com/nvm-sh/nvm/releases).

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
```

This will download and execute the `install.sh` script. Also it will add the following to your `.bashrc` config file. If you are using `zsh` then you will have to add it to your `~/.zshrc` file.

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Source your configuration file using `source ~/.bashrc` or reopen your terminal to enable `nvm`. You can check if `nvm` is available by running the following.

```bash
nvm --version
# will return 
0.37.0
```

Now that we have verified that `nvm` is available, we can use it to install the latest node version.

```bash
nvm install node
```

The `node` alias referes to the latest version of node, at the time that I am writing this, this is `v15.2.1`.

```bash
node --version
# will return 
v15.2.1
```

Now let's say you need some older `node` version to execute some code in an older project. Then you can just install another node version as shown below.

```bash
nvm install v14
# will install v14.15.1
```

To list all your `node` versions you can run the following.

```bash
nvm ls
# will return
        v14.15.1
->      v15.2.1
default -> node (-> v15.2.1)
node -> stable (-> v15.2.1) (default)
stable -> 15.2 (-> v15.2.1) (default)
...
```

To temporary use a specific node version you can call the following.

```bash
nvm use v14.15.1
```

If you want to permanently want to change the default version to use, you can overwrite the `default` alias.

```bash
nvm alias default v14.15.1
```

And that's basically it 😁


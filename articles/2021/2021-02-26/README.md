---
title: Install Docker and Compose in Ubuntu
description: How to install docker and compose in ubuntu.
date: 2021-02-26
permalink: articles/install-docker-and-compose-in-ubuntu
image: /covers/install-docker-and-compose-in-ubuntu.png
tags: 
    - ubuntu
    - docker
---

In this short post I'm giving you two lines of code so you can easily install [docker](https://docs.docker.com/engine/install/ubuntu/) and [docker-compose](https://docs.docker.com/compose/install/)

<!-- more -->

Let's get to it!

## Install Docker

First we are going to install `docker`.

```bash
sudo apt-get update \
&& sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common \
&& curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - \
&& sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable" \
&& sudo apt-get update \
&& sudo apt-get install docker-ce docker-ce-cli containerd.io
```

Ok ok, this is rather a code block than a one-liner, but still nice. This will make sure you can run composer, setup the ppa repository so you can install and update it, and finally install docker.

If you want to run docker as non root users you will need to run the [linux post install steps](https://docs.docker.com/engine/install/linux-postinstall/). Here is another one-liner to do so - since you are using ubuntu and all 😉

```bash
sudo groupadd docker \
&& sudo usermod -aG docker $USER \
&& newgrp docker # this enables the group without the need of a restart
```

And that's it for `docker`. Let's go to `docker-compose`.

## Install Docker Compose

Here is the _one-liner_ to install docker-compose.

```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose \
&& sudo chmod +x /usr/local/bin/docker-compose
```

And that's it. Now you should have `docker` and `docker-compose` installed 😁
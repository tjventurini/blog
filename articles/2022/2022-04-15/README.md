---
title: Install NordVPN in Ubuntu
description: Install nordvpn in ubuntu.
date: 2022-04-15
permalink: articles/install-nordvpn-in-ubuntu
image: /covers/install-nordvpn-in-ubuntu.png
tags: 
    - ubuntu
    - vpn
---

For a short moment I struggled with installing NordVPN in Ubuntu. Here is how you do it the right way 😉

<!-- more -->

Before you start with this tutorial you will need to have a [NordVPN](https://nordvpn.com) account.

Once you signed up for NordVPN, login and go to [my.nordaccount.com/downloads/nordvpn](https://my.nordaccount.com/downloads/nordvpn/) and download the `.deb` version.

This package will not install NordVPN per se, but rather import the GPG key and APT repository.

Once the file is downloaded, double-click on it or run the following to install it.

```bash
sudo apt install ./nordvpn-release_1.0.0_all.deb
```

> You might need to change the version number here.

Next you can update the APT package list and install NordVPN.

```bash
sudo apt update
sudo apt install nordvpn
```

Before you can use the just installed `nordvpn` utility, you need to add your user to the `nordvpn` user group.

```bash
sudo usermod -aG nordvpn $USER
```

> To apply the new user group you need to logout and login from your desktop session or simply restart your computer.

Now you can login through the `nordvpn` utility.

```bash
nordvpn login
```

Follow the link that `nordvpn` returns. This will sign you in.

And finally, you will be able to connect and disconnect to your vpn via the following commands.

```bash
nordvpn connect # or nordvpn c
nordvpn disconnect # or nordvpn d
```

For further information on available commands you can run the following command or check out the [NordVPN Documentation](https://support.nordvpn.com/Connectivity/Linux/1325531132/Installing-and-using-NordVPN-on-Debian-Ubuntu-Raspberry-Pi-Elementary-OS-and-Linux-Mint.htm).

```bash
nordvpn help
```

And that's it! Have fun with your VPN! 😁
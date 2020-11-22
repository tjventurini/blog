---
title: Create UEFI Bootable USB Stick using dd
description: How to create a UEFI bootable USB stick using dd.
date: 2020-11-27
permalink: articles/create-uefi-bootable-usb-stick-using-dd
image: /covers/create-uefi-bootable-usb-stick-using-dd.png
tags: 
    - ubuntu
---

In this small article we are going to take a look on how you can create a bootable usb stick ready for your UEFI bios.

<!-- more -->

## Introduction

Ok ok, this is an old one but I still find my self googling it, so I will just write it down so I never have to do so again 😉

⚠ If you intend to follow this tutorial, you need a FAT 32 formatted USB stick.

## Get the Device Path

Ok, so we start by finding out the device path to our USB stick. To do so, go ahead and attach it to your computer.

Next we will list all mounted _block devices_ using `lsblk`. The output of this command will look similar to the following.

![List of devices](./device-list.png)

As you can see, the device is mounted as `sda`, so the device path is `/dev/sda`. That's our takeaway of this step.

## The Catch

Now here is the catch: If you want to use your USB stick to create a UEFI bootable system - the one that's booting faster 😉 - then you don't have to use the `/dev/sda1` as you'll see all around the internet but the `/dev/sda` device path. 
I had to learn that the hard way because one of my systems succeeded booting using the old approach but the others didn't and I was really suffering because I could not figure it out 🤯 But now that I know it I can share it with you 😁

## Using dd

Ok, so now that we got that out of the way, we can run `dd`.

```bash
sudo dd if=path/to/your.iso of=/dev/sda status=progress
```

This will take a couple of minutes so feel free to grab a cup of coffee ☕

Once `dd` is done you are ready to go 😁
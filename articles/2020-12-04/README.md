---
title: Create an UEFI Bootable USB Stick using the GUI
description: Create an UEFI Bootable USB Stick using the GUI
date: 2020-12-04
permalink: articles/create-an-uefi-bootable-usb-stick-using-the-gui
image: /covers/create-an-uefi-bootable-usb-stick-using-the-gui.png
tags: 
        - ubuntu
---

Last week we took a look on [how to create a bootable USB stick using the command line tool `dd`](/articles/create-uefi-bootable-usb-stick-using-dd). Today we are going to see how to do the same using the GUI.

<!-- more -->

Ubuntu ships with the _Disks_ program we can use to format the and create a bootable USB stick.

![Disks](./disks.png)

Once we have started the program, we select our USB stick in the left column and open the device menu through the menu icon in the top right corner of the application.

![Disks](./disks2.png)

Here you can select the action you want to perform. What we want to do is to _Restore Disk Image ..._. Optionally you can run _Format Disk..._ first.

In the dialogue that opens you just have to select the ISO file that you want to use and then you can click the _Start Restoring..._ button.

![Disks](./disks3.png)

You will be prompted a warning - one that you should check 😉 - to make sure you have selected the correct target. Once you confirm, the process will start. This will take a couple of minutes so feel free to grab a cup of coffee ☕

Once the process is finished you are done 😁
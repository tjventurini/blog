---
title: Separating Home Directory from Filesystem
description: Separating home directory from filesystem.
date: 2022-07-08
permalink: articles/separating-home-directory-from-filesystem
image: /covers/separating-home-directory-from-filesystem.png
tags: 
    - ubuntu
    - linux
---

Today I reached the limit of the predefined partition size of my work-notebook. In order to fix this I separated the `/home` directory to it's own partition. Here is how I did it 🤓

<!-- more -->

## Creating a New Partition 

Open up the *Disks* app of ubuntu in order to create a new partition.

Make sure you set it to be of type `ext3` or `ext4`.

> Give it enough space so your home directory can grow.

Leave the app open, since we will need the partition UUID later on.

## Setup `/etc/fstab`

First we create a backup of the current `/etc/fstab` file.

```bash
sudo cp /etc/fstab /etc/fstab.$(date +%Y-%m-%d)
```

Now we can securely setup the newly created partition.

```bash
sudo vim /etc/fstab
```

Add the following entry and replace `?????` with the UUID of your newly created partition.

```
# (identifier)  (location, eg sda5)   (format, eg ext3 or ext4)      (some settings) 
UUID=?????   /media/home    ext4          defaults       0       2 
```

As you can see, we have set the mount-directory for the partition to `/media/home`. This is because we first need to copy the files of your `/home` directory to a secure location before we can securely use `/home` as mount-point for our new partition.

To mount the partition under the given mount-point, we need to execute the following.

```bash
sudo mount -a 
```

## Copy `/home` to `/media/home`

As mentioned before, we need to copy all the files to the new partition before we can securely use `/home` as mount-point. In order to do so, we can use the `rsync` command.

```bash
sudo rsync -aXS --progress --exclude='/*/.gvfs' /home/. /media/home/.
```

> You can interrupt the command as often as you need. `rsync` will simply start where it left if executed again 👍

## Switching from `/media/home` to `/home`

Now that we have stored all the files within `/home` to `/media/home`, we can update the `/etc/fstab` to use `/home` as mount-point for the partition.

```
# (identifier)  (location, eg sda5)   (format, eg ext3 or ext4)      (some settings) 
UUID=?????   /home    ext4          defaults       0       2 
```

> Do not restart your system just yet!

Create a backup of your home directory and create a replacement with the following command.

```bash
cd / && sudo mv /home /old_home && sudo mkdir /home
```

Now we are ready to mount the new partition at `/home`. Run the following to do so.

```bash
sudo mount -a
```

Done! You should now have your home directory within your newly crated partition 💪

## Last steps

Once you are sure that the new setup is working and that all your files are available within the new partition, you can remove the `/old_home` directory.

```bash
sudo rm -r /old_home
```

You can also remove the `/media/home` directory with the following.

```bash
sudo rm -r /media/home
```

Now you are really done! 🥳

## Official Documentation

Here is a link to the official ubuntu documentation to learn more about the topic.

* [help.ubuntu.com/community/Partitioning/Home/Moving](https://help.ubuntu.com/community/Partitioning/Home/Moving)
---
title: Fix Missing Audio Input Device in Ubuntu
description: I recently had to 
date: 2020-04-19
permalink: articles/fix-missing-audio-input-device-in-ubuntu
image: /covers/fix-missing-audio-input-device-in-ubuntu.png
tags:
    - ubuntu
---

Yesterday I had to figure out why the f*** the microphone of my headset was not available in the audio settings of my PCs Ubuntu system and how to fix it. 

<!-- more -->

So yesterday, I struggled to find out why my perfectly working headset microphone would not show up in the Ubuntu audio configuration as an input device. And before you go further, I want to say, that there might be many reasons why this is happening to you. So this is just one possible solution to your problem.

After searching the internet for a solution, I discovered, that my sound card was only setup for audio output and not input, so there was no need for the system to list my headset microphone as input device, since it was attached through the standard jack of the sound card.

To fix this, you might need to tell Ubuntu what sound card you are using so it can make use of the correct drivers and stuff (yeah I'm not so deep into the topic 😉) and recognize devices that have both on it, microphone and speakers, like my headset. 

## Find Codec

To do so, you first need to find out what [codec](https://en.wikipedia.org/wiki/Codec) you need to be using for your sound card to work with. Open a terminal and run the following.

```bash
cat /proc/asound/card*/codec* | grep Codec
```

The output might look like this:

```
Codec: Realtek ALC233
Codec: Nvidia GPU 93 HDMI/DP
```

As you can see, there are two codecs listed. The second one is obviously for the graphics card, so we need to look into the first one.

## Find Model

To find the corresponding model of your sound card you can look at the models list of [kernel.org](https://www.kernel.org/doc/html/latest/sound/hd-audio/models.html). In my case I had to look for the string `ALC233` what directed me to the model `alc233-eapd`. 

## Update Alsa Configuration

The last step is to update your `alsa-base.conf` file to tell the system what sound card model you are using. Open a terminal and edit the configuration file.

```bash
vim /etc/modprobe.d/alsa-base.conf
```

Now add this line to the bottom of the file, but replace `alc233-eapd` with the model you found on kernel.org.

```
options snd-hda-intel model=alc233-eapd
```

## Restart

Now can restart your system and the microphone should be listed in the audio configuration as an input device 🎉

## Side Note

I am by no means an expert in audio setup, so be aware of this when following these instructions. Basically I wrote this down for my self so I will always have a possible solution at hand for this in the future. But I hope it could help you to get your microphone working.

## Links

* [superuser.com](https://superuser.com/questions/1312970/headset-microphone-not-detected-by-pulse-und-alsa)
* [wikipedia.org](https://en.wikipedia.org/wiki/Codec)
* [kernel.org](https://www.kernel.org/doc/html/latest/sound/hd-audio/models.html)
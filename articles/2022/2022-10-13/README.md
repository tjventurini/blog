---
title: DNS Lookups with dig
description: Dns lookups with dig.
date: 2022-10-13
permalink: articles/dns-lookups-with-dig
image: /covers/dns-lookups-with-dig.png
tags: 
    - networking
    - terminal
---

Recently I'm doing a lot of networking again. In order to do so I needed to have the right tools available. One that I'm using surprisingly often is `dig`. That's why we are going to take a quick look at it. Let's go! 🤓

<!-- more -->

## What is `dig`?

From the `dig` man-page:

> dig  is  a  flexible  tool for interrogating DNS name servers. It performs DNS lookups and displays the answers that are returned from the name server(s) that were queried. Most DNS administrators  use  dig  to troubleshoot DNS problems because of its flexibility, ease of use, and clarity of output.

Put short: `dig` is a DNS lookup utility 😉

## How to install `dig`?

### Fedora

```bash
sudo dnf install bind-utils
```

### Ubuntu

```bash
sudo apt install dnsutils
```

## How to use the `dig` command line tool?

```bash
dig example.com
```

The result of the dig command is quite long, so I let you take a look at it on your own 😉

## How to only show the answer of the `dig` command line tool?



```bash
dig +noall +answer example.com
```

Ok, so this is way more compact!

```
example.com.		7036	IN	A	93.184.216.34
```

## How to specify the DNS server to use when executing `dig`?

```bash
dig @dns-server example.com
```

Personally I'm using the google DNS server.

```bash
dig @8.8.8.8 example.com
```

## How to specify the type of DNS record to read out using `dig`?

As you probably know, there are different types of DNS records. You can filter by the type of DNS record using the `dig` command line tool.

```bash
dig example.com <type>
# example using MX record type
dig example.com MX
```

## How to specify the default arguments for `dig`?

It is possible to store the default arguments for the `dig` command line tool within a `~/.digrc` file.

```
+noall +answer @8.8.8.8
```

And that's it! Now you know how to use the `dig` command line tool in order to read DNS records from any DNS server 💪 Have fun with it! 😁

![Edward](https://media.tenor.com/FTlUBeNUpwAAAAAC/edward-ed.gif)
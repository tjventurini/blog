---
title: Remove www in URL using Traefik
description: Remove www in url using traefik.
date: 2022-06-24
permalink: articles/remove-www-in-url-using-traefik
image: /covers/remove-www-in-url-using-traefik.png
tags: 
    - traefik
    - docker
---

As you might have noticed, I have been playing around with [Traefik](https://traefik.io/) recently. One of the things I have missed to do so far is to remove the `www.` from URLs of my sites. Today we are going to fix that! 🤓

<!-- more -->

If you are new to Traefik, you might want to check out the [Traefik documentation](https://traefik.io/documentation/traefik/) or one of my other articles on how to use Traefik.

- [Getting started with Traefik](../2022-04-29/)
- [Setup SSL with Traefik and Let's Encrypt](../2022-05-27/)

Ok, so with that out of the way, let's get started! 💪

The first thing we need to know is the difference between *static* and *dynamic* configuration in Traefik.

## Static Configuration

The [static configuration](https://doc.traefik.io/traefik/getting-started/configuration-overview/) refers to the *startup configuration* of Traefik. Elements in the static configuration set up the providers and entrypoints Traefik will listen to.

I usually make use of the [CLI configuration](https://doc.traefik.io/traefik/reference/static-configuration/cli/) to [setup Traefik](https://github.com/tjventurini/traefik-reverse-proxy/blob/main/docker-compose.prod.yml), but you can also use a [file configuration](https://github.com/korridor/reverse-proxy-docker-traefik/blob/main/configs-prod/traefik.yml) instead.

> Check out the provided links, to see examples.

## Dynamic Configuration

In order to setup the dynamic configuration, we need to provide a directory that holds all the different configuration files. The path to the file needs to point to a location inside your docker container.

```yml
services:
  traefik:
    image: traefik:2.6
    restart: ${RESTART}
    command:
      # Setup dynamic configuration
      - "--providers.file.directory=/etc/traefik/traefik.d"
    volumes:
      # Mount the dynamic configuration directory to the container
      - ./traefik.d:/etc/traefik/traefik.d
```

> Here is a [full example](https://github.com/tjventurini/traefik-reverse-proxy/blob/main/docker-compose.prod.yml#L27) from GitHub.

Inside the `traefik.d` directory you can now place all sort of configuration files. See the [documentation](https://doc.traefik.io/traefik) for more information on that.

## Removing the `www.` from URLs

In order to remove the `www.` from URLs, we need to create a middleware that can handle this task. Middlewares are part of the dynamic configuration. That's why we are going to create the file `traefik.d/middlewares.yml` with the following content inside of `traefik.d`.

```yml
http:
  middlewares:
    redirect-to-non-www:
      redirectRegex:
        regex: "^https://www\\.(.*)"
        replacement: "https://${1}"
        permanent: true
```

In this example we are using the [RedirectRegex](https://doc.traefik.io/traefik/middlewares/http/redirectregex/) middleware. This middleware allows us to search for a regular expression and replace it with a different string, that will be used to redirect the user to the URL without the `www.`.

To apply the middleware, we on a docker-compose setup, we can add the following to the labels of the given container.

```yml
    labels:
      # ...
      # middlewares
      - "traefik.http.routers.your-container-name.middlewares=redirect-to-non-www@file"
```

If you are applying middlewares to your container already, you can just add more middlewares, by separating them with a comma.

```yml
      # middlewares
      - "traefik.http.routers.your-container-name.middlewares=one,two,three,redirect-to-non-www@file"
```

And that's basically it! 😁

## Full Example

If you want to see a full example, you can check out my [tjventurini/traefik-reverse-proxy](https://github.com/tjventurini/traefik-reverse-proxy) repository. The repository contains a simple but useful Traefik setup, containing the code from this example.

## Resources and Links

- [Traefik documentation](https://doc.traefik.io/traefik)
- [How to Redirect from Non-WWW to WWW with Traefik](https://medium.com/geekculture/how-to-redirect-from-non-www-to-www-with-traefik-659cb7197449)
- [Traefik Middleware, redirect from www. to the simple URL](https://debest.fr/en/blog/traefik-middleware-redirect-from-www-to-the-simple-url)
- [Regex101](https://regex101.com/)
- [korridor/reverse-proxy-docker-traefik](https://github.com/korridor/reverse-proxy-docker-traefik/blob/main/configs-prod/traefik.yml)
- [tjventurini/traefik-reverse-proxy](https://github.com/tjventurini/traefik-reverse-proxy)
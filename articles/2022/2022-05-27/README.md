---
title: Setup SSL with Traefik and Let's Encrypt
description: Setup ssl with traefik and let's encrypt.
date: 2022-05-27
permalink: articles/setup-ssl-with-traefik-and-lets-encrypt
image: /covers/setup-ssl-with-traefik-and-lets-encrypt.png
tags: 
    - docker
    - traefik
publish: true
---

In the [last article](../2022-04-29/README.md) we have learned how to use [Traefik](https://traefik.io/) to setup a reverse proxy. In this article we will learn how to setup SSL with Traefik and [Let's Encrypt](https://letsencrypt.org/).

<!-- more -->

Having Traefik running on port 80 for local development is nice and all, but once we want to have Traefik running in production we want to have a SSL encrypted connection through port 443. That's why we are going to setup SSL with Traefik and Let's Encrypt - and it's going to be very simple to do, I promise 😉

We start by creating a folder for our Traefik setup and move into it.

```bash
mkdir reverse-proxy
cd reverse-proxy
```

Inside our project folder we need a folder for our SSL certificates. Let's create it.

```bash
mkdir letsencrypt
```

The SSL certificates are going to be stored in a json file inside the `letsencrypt` directory. For Let's Encrypt to work we are going to create the file, fill it with an empty json object and set the needed permissions.

```bash
touch letsencrypt/acme.json # create the file
echo "{}" > letsencrypt/acme.json # fill the file with an empty json object
chmod 600 letsencrypt/acme.json # set the permissions
```

Awesome, now we can create the `docker-compose.yml` file and fill it with the following content.

```yaml
version: '3.8'

# Setup the network for the reverse proxy. 
# All containers will be connected to this network.
networks:
  default:
    internal: false
    name: reverse-proxy

services:
  traefik:
    image: traefik:2.6
    restart: always
    command:
      # We are going to use the docker provider
      - "--providers.docker"
      # Only enabled containers should be exposed
      - "--providers.docker.exposedByDefault=false"
      # We want to use the dashbaord
      - "--api.dashboard=true"
      # The entrypoints we ant to expose
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      # Enable ACME (Let's Encrypt): automatic SSL.
      - "--certificatesresolvers.letsencrypt.acme.email=your.name@example.com"
      - "--certificatesresolvers.letsencrypt.acme.storage=/etc/traefik/acme/acme.json"
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge=true"
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=web"
      # Global redirect to https
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
      - "--entrypoints.web.http.redirections.entryPoint.scheme=https"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      # The acme.json file is required by Let's Encrypt
      - ./letsencrypt/acme.json:/etc/traefik/acme/acme.json
    labels:
      # Since we don't expose containers per default we also need to enable traefik to expose the dashboard.
      - "traefik.enable=true"
      # http
      # Since we are using the http challenge we and use the redirect we need 
      #  to enable the http entrypoint.
      - "traefik.http.routers.dashboard-http.entrypoints=web"
      # The domain we want to listen to
      - "traefik.http.routers.dashboard-http.rule=Host(`example.com`)"
      # We need to attach the api@internal service to the dashboard-http router
      #  in order for the dashboard to be able to access the api (I think 🙈)
      - "traefik.http.routers.dashboard-http.service=api@internal"
      # https
      # Enable the https entrypoint
      - "traefik.http.routers.dashboard.entrypoints=websecure"
      # The domain we want to listen to
      - "traefik.http.routers.dashboard.rule=Host(`example.com`)"
      # We want to obtain a certificate through Let's Encrypt
      - "traefik.http.routers.dashboard.tls=true"
      - "traefik.http.routers.dashboard.tls.certresolver=letsencrypt"
      # We need to attach the api@internal service to the dashboard router
      #  in order for the dashboard to be able to access the api (I think 🙈)
      - "traefik.http.routers.dashboard.service=api@internal"
```

> Remember to replace `example.com` with your domain and `your.name@example.com` with your email address.

You can read through the comments to see what each section does.

Now you can run the following to start the container.

```bash
docker-compose up -d
```

If it is not working, you can check the logs with the following command - press `crtl + c` to stop the logs.

```bash
docker-compose logs -f
```

And that's it! You should be able to access the dashboard through `example.com` now 🐻

In one of the next articles we are going to learn how to add authorization to the dashboard. Make sure to follow me on [Twitter](https://twitter.com/tjventurini) to not miss out on that one 😉


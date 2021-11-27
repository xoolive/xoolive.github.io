---
layout: post
lang: en
tags: til technical
logo: fas fa-network-wired
title: SSH through an http proxy
---

In some network environment where port 22 is blocked by default, it can be convenient to be able to route ssh connections through an http proxy.

In the `.ssh/config` it would look like:

```cfg
ProxyCommand nc -X connect -x proxy:port %h %p
```

There is a different tool called [connect-proxy](https://github.com/larryhou/connect-proxy), also widely known in Windows as `connect.exe`, with a slightly different syntax:

```cfg
ProxyCommand "C:\path\to\connect.exe -H proxy:port %h %p"
```

You can install on Linux as:

```sh
sudo apt install connect-proxy
```

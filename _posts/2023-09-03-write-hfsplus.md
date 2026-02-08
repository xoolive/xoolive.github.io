---
layout: post
lang: en
tags: til technical linux
logo: fab fa-apple
title: Mount a HFS partition as read/write?
---

Install hfsprogs

```sh
sudo apt install hfsprogs
```

If necessary, remount in `rw` mode:

```sh
sudo mount -t hfsplus -o remount,force,rw /media/mountpoint
```

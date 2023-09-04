
---
layout: post
lang: en
tags: til technical
logo: fab fa-apple
title: How to mount a HFS partition in Ubuntu as read/write?
---

Install hfsprogs

```sh
sudo apt install hfsprogs
```

If necessary, remount in `rw` mode:

```sh
sudo mount -t hfsplus -o remount,force,rw /media/mountpoint
```

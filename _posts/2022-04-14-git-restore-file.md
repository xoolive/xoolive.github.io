---
layout: post
lang: en
tags: til technical git
logo: fab fa-git
title: Import/restore files from other branches with git
---

From a branch, pick a file as it is written in another branch:

```bash
git restore -s master -SW -- path/to/file.py
```

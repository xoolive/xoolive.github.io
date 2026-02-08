---
layout: post
lang: en
title: Advanced Git usage patterns
tags: technical git
permalink: /git-patterns
---

This is work in progress

## Undo latest commit

If the idea is to add, remove or edit a file to your latest commit:

```bash
git reset --soft HEAD~
```

If this was just a mistake, you just want to forget about everything:

```bash
git reset --hard HEAD~
```

## Compress your git history

```bash
git gc --aggressive --prune=now
```

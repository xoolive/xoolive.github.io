---
layout: post
lang: en
tags: til technical
logo: fab fa-python
title: How to detect if sys.stdout is attached to a terminal or piped
---

```bash
$ python3 -c "import sys; print(sys.stdout.isatty())"
True
$ python3 -c "import sys; print(sys.stdout.isatty())" | cat
False
```

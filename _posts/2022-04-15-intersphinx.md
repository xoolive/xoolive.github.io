---
layout: post
lang: en
tags: til technical
logo: fab fa-python
title: Grep identifiers for intersphinx documentation
---

```bash
python -m sphinx.ext.intersphinx \
https://pandas.pydata.org/pandas-docs/stable/objects.inv | grep keyword
```

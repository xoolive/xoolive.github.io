---
layout: post
lang: en
tags: til technical python
logo: fab fa-python
title: Monitor slow Python imports
---

It is very easy to get drifted as you write your Python library and let your
library import just everything instead of sticking to a more efficient
import-as-you-need approach.

The following command lines with the `tuna` command.

```bash
python -X importtime -c "from package import module" 2> import.log
tuna import.log
```

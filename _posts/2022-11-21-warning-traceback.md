---
layout: post
lang: en
tags: til technical
logo: fab fa-python
title: How to get a traceback for Python warnings
---

```python
import traceback
import warnings
import sys


def warn_with_traceback(message, category, filename, lineno, file=None, line=None):

    log = file if hasattr(file, "write") else sys.stderr
    traceback.print_stack(file=log)
    log.write(warnings.formatwarning(message, category, filename, lineno, line))


warnings.showwarning = warn_with_traceback
```

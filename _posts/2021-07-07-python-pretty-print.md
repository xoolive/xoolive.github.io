---
layout: post
lang: en
tags: til technical
logo: fab fa-python
title: Pretty-print all your outputs in Python REPL
---

Edit your `$HOME/.pythonstartup` with the following lines:

```python
try:
    from rich import pretty
    pretty.install()
except ImportError:
    pass
```

In my version of this files, I also added:

- an history of commands together with completion:

  ```python
  import readline
  import rlcompleter
  import atexit
  import os
  import sys
  readline.parse_and_bind('tab: complete')
  histfile = os.path.join(
      os.environ['HOME'],
      '.pythonhistory{}'.format(sys.version[0])
  )
  try:
      readline.read_history_file(histfile)
  except IOError:
      pass
  atexit.register(readline.write_history_file, histfile)
  del histfile
  del atexit, readline, rlcompleter
  ```

- a few common imports:

  ```python
  import re
  __autoimported__ = ['sys', 'os', 're']
  try:
      from pathlib import Path
      __autoimported__.append('Path')
      import numpy as np
      __autoimported__.append("numpy as np")
      import pandas as pd
      __autoimported__.append("pandas as pd")
  except ImportError:
      pass
  print('Auto-imported for your convenience:')
  print(', '.join(__autoimported__))
  ```

<img alt="python screenshot" src="/images/python.png" class="screenshot"/>

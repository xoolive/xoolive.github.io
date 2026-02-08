---
layout: post
lang: en
tags: til python
logo: fab fa-python
title: Read a Google Sheets document with pandas
---

The most direct way would be to build the URL:

```python
import pandas as pd

url = (
    "https://docs.google.com/spreadsheets/d/{sheet_id}"
    "/gviz/tq?tqx=out:csv&sheet={sheet_name}"
)

# Take the sheet ID from the URL
df = pd.read_csv(url.format(sheet_id="", sheet_name=""))
```

If you are behind a proxy and things do not work smoothly, you need to go manual:

```python
import requests
from io import StringIO

s = requests.Session()
s.proxies.update({'https': ""})
c = s.get(url)
c.raise_for_status()

txt = StringIO(c.text)
txt.seek(0)

df = pd.read_csv(txt)
```

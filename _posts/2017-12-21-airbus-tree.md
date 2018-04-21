---
layout: post
title: Introduction cartotools with Airbus Christmas tree
lang: en
tags: notebook
---

Before Christmas leave, just a small snippet of code for plotting the trajectory of Airbus flight `AIB232E`. The data has been made available by the [OpenSky Network](https://opensky-network.org). It is plotted using my new [`cartotools`](https://github.com/xoolive/cartotools) library (built on top of Cartopy).

You may download the data [here](https://opensky-network.org/datasets/states/airbus_tree.csv).

```python
%matplotlib inline
import matplotlib.pyplot as plt

import pandas as pd

from cartotools.crs import PlateCarree
from cartotools.img_tiles import BKG_Topoplus

tiles = BKG_Topoplus()

fig = plt.figure(figsize=(15, 10), dpi=150)
ax = fig.add_subplot(111, projection=tiles.crs)

ax.add_image(tiles, 7, alpha=.7)

ax.set_extent((5.5, 15.23, 47.215, 55.03))

tree = pd.read_csv("airbus_tree.csv", index_col=0)
ax.plot(tree.lon, tree.lat, color='#aa3a3a', transform=PlateCarree())
```


![png](/images/airbus_tree.png){:width="80%" style="margin: 0px 4em;"}


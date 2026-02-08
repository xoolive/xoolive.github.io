---
layout: post
lang: en
tags: til technical plot
logo: fab fa-python
title: Color schemes in Vega/Vega-Lite/Altair
---

Some default color palettes are definitely nice looking and it is nice to be able to see the color codes together with a color sample. It is nice to be able to do that in Altair.

I don't know whether it is possible to get the definition of the colors in Altair, but they are coded in the Vega source code [here](https://github.com/vega/vega/blob/master/packages/vega-scale/src/palettes.js)

<div id="basic"></div>
<script type="text/javascript">
  var spec = {
    "config": {
      "view": {"continuousWidth": 400, "continuousHeight": 300, "stroke": null},
      "axis": {
        "labelFont": "Inconsolata",
        "labelFontSize": 16,
        "labelPadding": 10
      },
      "title": {"anchor": "start", "dy": -10, "font": "Fira Sans", "fontSize": 20}
    },
    "data": {"name": "data-c3ad63d27a753714330dae3d009a78ea"},
    "mark": {"type": "bar", "height": 20},
    "encoding": {
      "color": {
        "type": "nominal",
        "field": "color",
        "legend": null,
        "scale": {
          "domain": [
            "#4c78a8",
            "#9ecae9",
            "#f58518",
            "#ffbf79",
            "#54a24b",
            "#88d27a",
            "#b79a20",
            "#f2cf5b",
            "#439894",
            "#83bcb6",
            "#e45756",
            "#ff9d98",
            "#79706e",
            "#bab0ac",
            "#d67195",
            "#fcbfd2",
            "#b279a2",
            "#d6a5c9",
            "#9e765f",
            "#d8b5a5"
          ],
          "scheme": "tableau20"
        }
      },
      "y": {
        "type": "nominal",
        "field": "color",
        "scale": {
          "domain": [
            "#4c78a8",
            "#9ecae9",
            "#f58518",
            "#ffbf79",
            "#54a24b",
            "#88d27a",
            "#b79a20",
            "#f2cf5b",
            "#439894",
            "#83bcb6",
            "#e45756",
            "#ff9d98",
            "#79706e",
            "#bab0ac",
            "#d67195",
            "#fcbfd2",
            "#b279a2",
            "#d6a5c9",
            "#9e765f",
            "#d8b5a5"
          ],
          "scheme": "tableau20"
        },
        "title": null
      }
    },
    "height": 500,
    "title": "tableau20",
    "width": 200,
    "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json",
    "datasets": {
      "data-c3ad63d27a753714330dae3d009a78ea": [
        {"color": "#4c78a8", "x": 1},
        {"color": "#9ecae9", "x": 1},
        {"color": "#f58518", "x": 1},
        {"color": "#ffbf79", "x": 1},
        {"color": "#54a24b", "x": 1},
        {"color": "#88d27a", "x": 1},
        {"color": "#b79a20", "x": 1},
        {"color": "#f2cf5b", "x": 1},
        {"color": "#439894", "x": 1},
        {"color": "#83bcb6", "x": 1},
        {"color": "#e45756", "x": 1},
        {"color": "#ff9d98", "x": 1},
        {"color": "#79706e", "x": 1},
        {"color": "#bab0ac", "x": 1},
        {"color": "#d67195", "x": 1},
        {"color": "#fcbfd2", "x": 1},
        {"color": "#b279a2", "x": 1},
        {"color": "#d6a5c9", "x": 1},
        {"color": "#9e765f", "x": 1},
        {"color": "#d8b5a5", "x": 1}
      ]
    }
  };
  var opt = {"renderer": "canvas", "actions": true};
  vegaEmbed("#basic", spec, opt).then(
      function(result) { }
  ).catch(console.error);
</script>

```python
import altair as alt

tableau20 = (
  "4c78a89ecae9f58518ffbf7954a24b88d27ab79a20f2cf5b43989483bcb6"
  "e45756ff9d9879706ebab0acd67195fcbfd2b279a2d6a5c99e765fd8b5a5"
)

colors = (
    pd.DataFrame(
        list(
            "#" + tableau20[6 * i : 6 * i + 6]
            for i in range(len(tableau20) // 6)
        )
    )
    .rename(columns={0: "color"})
    .assign(x=1)
)
(
    alt.Chart(colors)
    .mark_bar(height=20)
    .encode(
        alt.Y(
            "color",
            scale=alt.Scale(
                domain=colors.color.values,
                scheme="tableau20",
            ),
            title=None,
        ),
        alt.Color(
            "color",
            scale=alt.Scale(
                domain=colors.color.values,
                scheme="tableau20",
            ),
            legend=None,
        ),
    )
    .properties(width=200, height=500, title="tableau20")
    .configure_title(
        font="Fira Sans",
        fontSize=20,
        anchor="start",
        dy=-10,
    )
    .configure_axis(
        labelFont="Inconsolata",
        labelFontSize=16,
        labelPadding=10,
    )
    .configure_view(stroke=None)
)
```

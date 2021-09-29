---
layout: post
lang: en
tags: til technical
logo: fab fa-python
title: Faceted layered charts in Altair
---

Starting from the following example from the documentation ([link](https://altair-viz.github.io/gallery/grouped_bar_chart.html)):

```python
import altair as alt
from vega_datasets import data

source = data.barley()

alt.Chart(source).mark_bar().encode(
    x='year:O',
    y='sum(yield):Q',
    color='year:N',
    column='site:N'
)
```

<div id="basic"></div>
<script type="text/javascript">
  var spec = {
  "config": {"view": {"continuousWidth": 400, "continuousHeight": 200}},
  "data": {
    "url": "https://raw.githubusercontent.com/altair-viz/vega_datasets/master/vega_datasets/_data/barley.json"
  },
  "mark": "bar",
  "encoding": {
    "color": {"type": "nominal", "field": "year"},
    "column": {"type": "nominal", "field": "site"},
    "x": {"type": "ordinal", "field": "year"},
    "y": {"type": "quantitative", "aggregate": "sum", "field": "yield"}
  },
  "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json"
};
  var opt = {"renderer": "canvas", "actions": true};
  vegaEmbed("#basic", spec, opt).then(
      function(result) { }
  ).catch(console.error);
</script>

It is tempting to layer faceted charts. However the following exception is raised:

```python
base = alt.Chart(source).encode(
    x='year:O',
    y='sum(yield):Q',
    color='year:N',
    column='site:N',
    text="sum(yield):Q"
)

alt.layer(base.mark_bar(), base.mark_text())
```

<div style="margin-top: -1em"></div>

```pycon
Traceback (most recent call last):
  ...
ValueError: Faceted charts cannot be layered.
```

The solution is to facet the layered chart rather than layering facetted charts:

```python
base = alt.Chart(barley).encode(
    alt.X("year:O"),
    alt.Y("sum(yield):Q"),
    alt.Color("year:N"),
    alt.Text("sum(yield):Q", format=".0f"),
)

alt.layer(
    base.mark_bar(),
    base.mark_text(dy=-10)
).facet(
    alt.Column("site:N", title=None)
).configure_facet(spacing=0)
```

<div id="facet"></div>
<script type="text/javascript">
  var spec = {
    "config": {
      "view": {"continuousWidth": 400, "continuousHeight": 200},
      "facet": {"spacing": 0}
    },
    "data": {
      "url": "https://raw.githubusercontent.com/altair-viz/vega_datasets/master/vega_datasets/_data/barley.json"
    },
    "facet": {"type": "nominal", "field": "site", "title": null},
    "spec": {
      "layer": [
        {
          "mark": "bar",
          "encoding": {
            "color": {"type": "nominal", "field": "year"},
            "text": {
              "type": "quantitative",
              "aggregate": "sum",
              "field": "yield",
              "format": ".0f"
            },
            "x": {"type": "ordinal", "field": "year"},
            "y": {"type": "quantitative", "aggregate": "sum", "field": "yield"}
          }
        },
        {
          "mark": {"type": "text", "dy": -10},
          "encoding": {
            "color": {"type": "nominal", "field": "year"},
            "text": {
              "type": "quantitative",
              "aggregate": "sum",
              "field": "yield",
              "format": ".0f"
            },
            "x": {"type": "ordinal", "field": "year"},
            "y": {"type": "quantitative", "aggregate": "sum", "field": "yield"}
          }
        }
      ]
    },
    "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json"
  };
  var opt = {"renderer": "canvas", "actions": true};
  vegaEmbed("#facet", spec, opt).then(
      function(result) { }
  ).catch(console.error);
</script>

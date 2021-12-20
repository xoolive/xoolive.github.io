---
layout: post
lang: en
tags: til technical
logo: fas fa-database
title: MongoDB index
---

Some queries you run with Mongo need an index in order to be run efficiently. In some cases, the index chosen by the engine is not the most efficient one.

You may then suggest using an index with the `.hint()` method in Python.

```python
c = (
    client
    .db
    .collection
    .find(filter_dict, projection_dict)
    .hint("indexName")
)
```

For reference, the list of indexes is available as:

```python
client.db.collection.index_information()
```

and information about chosen indexes can be analysed with the `explain()` method:

```python
c = client.db.collection.find(filter_dict, projection_dict).explain()
```

---
layout: default
title: xoolive.org » Xavier Olive
permalink: /digest
---

<div id="home">

  <ul class="posts">
  {% for post in site.posts %}
      {% if post.tags[0] == "digest" %}
      <li><span>{{ post.date | date_to_string }}</span>
        <i class="far fa-comment" style="color: #aabcbc"></i>
      <a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endif %}
  {% endfor %}
  </ul>

</div>


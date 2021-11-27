---
layout: default
title: xoolive.org » Xavier Olive
permalink: /digest/
---

<div id="home">
  <h1>The monthly digest</h1>

  <p>This section gathers short summaries about random content of interest found upon browsing the Internet. Expect fun materials (according to me) but also fallacies, inconsistencies and dead links.</p>

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

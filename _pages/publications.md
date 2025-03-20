---
layout: default
permalink: /publications/
title: Publications
---

<div class="pubicons float-right pt-2">
<span class="mr-3 py-1 px-2 border border-red">
<i class="fas fa-book"></i> Books:
<b class="text-red">{% bibliography_count --query @book %}</b>
</span>
<span class="mr-3 py-1 px-2 border border-red">
<i class="fas fa-book-open"></i> Journal articles:
<b class="text-red">{% bibliography_count --query @article %}</b>
</span>
<span class="mr-3 py-1 px-2 border border-red">
<i class="fas fa-file-alt"></i> Conference papers:
<b class="text-red">{% bibliography_count --query @inproceedings %}</b>
</span>
</div>

<div class="publications" style="clear: both;">

<h2>Books</h2>
{% bibliography --query @book %}

<h2>2025</h2>
{% bibliography --query !@book[year=2025] %}

<h2>2024</h2>
{% bibliography --query !@book[year=2024] %}

<h2>2023</h2>
{% bibliography --query !@book[year=2023] %}

<h2>2022</h2>
{% bibliography --query !@book[year=2022] %}

<h2>2021</h2>
{% bibliography --query !@book[year=2021] %}

<h2>2020</h2>
{% bibliography --query !@book[year=2020] %}

<h2>2019</h2>
{% bibliography --query !@book[year=2019] %}

<h2>2018</h2>
{% bibliography --query !@book[year=2018] %}

<h2>Earlier</h2>
{% bibliography --query !@techreport[year<2018] %}

</div>

<script>
$('.collapser').click(function
() { $(this).closest('.paper').find('.collapse').collapse('toggle'); });
//
$('.bibliography').attr("reversed", "reversed")
</script>

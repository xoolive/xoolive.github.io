---
layout: default
permalink: /publications/
title: Publications
---

<div class="pubicons">
  <button class="pubicon-btn active" data-filter="all">
    <i class="fas fa-book"></i> Books:
    <b>{% bibliography_count --query @book %}</b>
  </button>
  <button class="pubicon-btn" data-filter="article">
    <i class="fas fa-book-open"></i> Journal articles:
    <b>{% bibliography_count --query @article %}</b>
  </button>
  <button class="pubicon-btn" data-filter="inproceedings">
    <i class="fas fa-file-alt"></i> Conference papers:
    <b>{% bibliography_count --query @inproceedings %}</b>
  </button>
</div>

<div class="publications" style="clear: both;">

<div class="books-section">
  <h2 class="book-section">
    <span class="section-text">Books</span>
  </h2>
  <div class="section-content">
    {% bibliography --query @book %}
  </div>
</div>

{% capture years_list %}2026|2025|2024|2023|2022|2021|2020|2019|2018|2016|2014|2011|2010|2009|2006{% endcapture %}
{% assign years_array = years_list | split: "|" %}

{% for year in years_array %}
  {% assign is_expanded = false %}
  {% if forloop.index <= 3 %}
    {% assign is_expanded = true %}
  {% endif %}
  
  <div class="year-section">
    <h2 class="year-header" data-toggle="collapse" data-target="#year-{{ year }}" role="button" {% if is_expanded %}aria-expanded="true"{% else %}aria-expanded="false"{% endif %}>
      <span class="year-text">{{ year }}</span>
      <i class="fas fa-chevron-down chevron-icon{% if is_expanded %} rotated{% endif %}"></i>
    </h2>
    <div id="year-{{ year }}" class="collapse{% if is_expanded %} show{% endif %}" data-year="{{ year }}">
      {% bibliography --query !@book[year={{ year }}] %}
    </div>
  </div>
{% endfor %}

</div>

<script>
$('.collapser').click(function() { 
  $(this).closest('.paper').find('.collapse').collapse('toggle'); 
});

// Handle year section collapse with chevron rotation
$('.year-header').on('click', function() {
  $(this).find('.chevron-icon').toggleClass('rotated');
});

// Initialize chevron state based on collapse state
$('.collapse').on('show.bs.collapse', function() {
  $(this).prev('.year-header').find('.chevron-icon').addClass('rotated');
});

$('.collapse').on('hide.bs.collapse', function() {
  $(this).prev('.year-header').find('.chevron-icon').removeClass('rotated');
});

// Reverse bibliography lists
$('.bibliography').attr("reversed", "reversed");

// Publication type filtering
$('.pubicon-btn').on('click', function() {
  const filterType = $(this).data('filter');
  
  // Update active button
  $('.pubicon-btn').removeClass('active');
  $(this).addClass('active');
  
  // Filter books section
  if (filterType === 'all' || filterType === 'book') {
    $('.books-section').show();
  } else {
    $('.books-section').hide();
  }
  
  // Filter entries in year sections - check all entries regardless of collapse state
  $('[data-entry-type]').each(function() {
    const entryType = $(this).data('entry-type');
    if (filterType === 'all' || entryType === filterType) {
      $(this).closest('li').show();
    } else {
      $(this).closest('li').hide();
    }
  });
  
  // Show/hide year sections based on whether they have matching entries
  // Check the data attribute, not visibility, to work with collapsed sections
  $('.year-section').each(function() {
    const yearSection = $(this);
    const collapseDiv = yearSection.find('.collapse');
    const hasMatchingEntries = collapseDiv.find('[data-entry-type]').toArray().some(function(el) {
      const entryType = $(el).data('entry-type');
      return filterType === 'all' || entryType === filterType;
    });
    
    if (hasMatchingEntries) {
      yearSection.show();
    } else {
      yearSection.hide();
    }
  });
});
</script>

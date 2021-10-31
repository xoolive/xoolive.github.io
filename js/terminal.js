const elements = document.getElementsByClassName("terminal");
for (let i = 0; i < elements.length; i++) {
  const elt = elements[i];
  const code = elt.innerHTML;
  elt.innerHTML = `\
  <div class="Terminal__Toolbar">\
    <div class="Toolbar__buttons">\
      <button class="Toolbar__button Toolbar__button--exit">&#10005;</button>\
      <button class="Toolbar__button">&#9472;</button>\
      <button class="Toolbar__button">&#9723;</button>\
    </div>\
    <p class="Toolbar__user">user@laptop</p>\
  </div>\
  <div class="Terminal__body">\
    <div class="Terminal__Prompt">\
    <span class="Prompt__user">user@laptop:</span><span class="Prompt__location">~</span><span class="Prompt__dollar">$ </span>\
      <div class="Terminal__text">\
        ${code.replace("@", "<span class='Prompt__cursor'>&nbsp;</span>")}\
      </div>\
    </div>\
  </div>`;
}

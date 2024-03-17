"use strict";

const reveals = [...document.getElementsByClassName("reveal")];

window.addEventListener("scroll", () => {
  reveals.forEach(reveal => {
    const { top, bottom } = reveal.getBoundingClientRect();
    // if (top > 0 && bottom < window.innerHeight) { // <- высота с учетом горизонтального скроллбара
    if (top > 0 && bottom < document.documentElement.clientHeight) { // <- элемент появился целиком
    // if (top > 0 && top < document.documentElement.clientHeight) { // <- появился верхний край элемента
      reveal.classList.add("reveal_active");
    }
  });
});

"use strict";

const book = document.getElementById("book");
const fontSizes = [...document.getElementsByClassName("font-size")];
const textColors = [...document.querySelectorAll(".book__control_color .color")];
const bgColors = [...document.querySelectorAll(".book__control_background .color")];

fontSizes.forEach(fontSize => {
  fontSize.addEventListener("click", e => {
    e.preventDefault();
    fontSizes.forEach(item => item.classList.remove("font-size_active"));
    const bookClass = [...book.classList].find(item => item.startsWith("book_fs-"));
    if (bookClass) {
      book.classList.remove(bookClass);
    }
    fontSize.classList.add("font-size_active");
    if (fontSize.dataset.size) {
      book.classList.add(`book_fs-${fontSize.dataset.size}`);
    }
  });
});

textColors.forEach(textColor => {
  textColor.addEventListener("click", e => {
    e.preventDefault();
    textColors.forEach(item => item.classList.remove("color_active"));
    const bookClass = [...book.classList].find(item => item.startsWith("book_color-"));
    if (bookClass) {
      book.classList.remove(bookClass);
    }
    textColor.classList.add("color_active");
    if (textColor.dataset.textColor) {
      book.classList.add(`book_color-${textColor.dataset.textColor}`);
    }
  });
});

bgColors.forEach(bgColor => {
  bgColor.addEventListener("click", e => {
    e.preventDefault();
    bgColors.forEach(item => item.classList.remove("color_active"));
    const bookClass = [...book.classList].find(item => item.startsWith("book_bg-"));
    if (bookClass) {
      book.classList.remove(bookClass);
    }
    bgColor.classList.add("color_active");
    if (bgColor.dataset.bgColor) {
      book.classList.add(`book_bg-${bgColor.dataset.bgColor}`);
    }
  });
});

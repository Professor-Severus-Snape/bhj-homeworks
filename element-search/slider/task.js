"use strict";

const leftArrow = document.querySelector(".slider__arrow_prev"); // стрелка влево
const rightArrow = document.querySelector(".slider__arrow_next"); // стрелка вправо
const sliderItems = [...document.querySelectorAll(".slider__item")]; // все слайды
const sliderDots = [...document.querySelectorAll(".slider__dot")]; // все точки

// активация нужной точки:
function activeDot() {
  sliderItems.forEach((slider, index) => {
    if (slider.classList.contains("slider__item_active")) {
      sliderDots[index].classList.add("slider__dot_active");
    } else {
      sliderDots[index].classList.remove("slider__dot_active");
    }
  });
}

// клик по левой стрелке:
function clickLeftArrow() {
  leftArrow.addEventListener("click", () => {
    for (let i = 0; i < sliderItems.length; i++) {
      if (sliderItems[i].classList.contains("slider__item_active")) {
        sliderItems[i].classList.remove("slider__item_active");
        if (i) {
          sliderItems[i - 1].classList.add("slider__item_active");
        } else {
          sliderItems[sliderItems.length - 1].classList.add("slider__item_active");
        }
        activeDot();
        break;
      }
    }
  });
}

// клик по правой стрелке:
function clickRightArrow() {
  rightArrow.addEventListener("click", () => {
    for (let i = 0; i < sliderItems.length; i++) {
      if (sliderItems[i].classList.contains("slider__item_active")) {
        sliderItems[i].classList.remove("slider__item_active");
        if ((i + 1) < sliderItems.length) {
          sliderItems[i + 1].classList.add("slider__item_active");
        } else {
          sliderItems[0].classList.add("slider__item_active");
        }
        activeDot();
        break;
      }
    }
  });
}

// клик по точке:
function clickDots() {
  for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].addEventListener("click", event => {
      if (event.target === sliderDots[i]) {
        for (let j = 0; j < sliderDots.length; j++) {
          sliderItems[j].classList.remove("slider__item_active");
        }
        sliderItems[i].classList.add("slider__item_active");
        activeDot();
      }
    });
  };
}

function main() {
  clickLeftArrow();
  clickRightArrow();
  clickDots();
}

main();

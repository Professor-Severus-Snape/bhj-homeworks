"use strict";

const leftArrow = document.querySelector(".slider__arrow_prev"); // стрелка влево
const rightArrow = document.querySelector(".slider__arrow_next"); // стрелка вправо
const sliderItems = [...document.querySelectorAll(".slider__item")]; // все слайды
const sliderDots = [...document.querySelectorAll(".slider__dot")]; // все точки

// -------------------- оптимизированный вариант: --------------------
leftArrow.addEventListener("click", () => changeSlide("left")); // передаем колбек, т.к. нужны параметры
rightArrow.addEventListener("click", () => changeSlide("right")); // иначе без коллбэка произойдет вызов функции
sliderDots.forEach((dot, index) => dot.addEventListener("click", () => changeSlide(index)));

/**
 * Осуществляет бесконечную смену слайдов.
 * @param {(string|number)} param  Имя кликнутой стрелки (строка) или индекс кликнутой точки (число)
 */
function changeSlide(param) {
  let index = sliderItems.findIndex(item => item.classList.contains("slider__item_active"));

  sliderItems.forEach(item => item.classList.remove("slider__item_active")); // снятие активности у всех слайдов
  sliderDots.forEach(item => item.classList.remove("slider__dot_active")); // снятие активности у всех точек

  // проверка параметра на тип данных:
  if (isNaN(parseInt(param))) {
    if (param === "left") {
      index = index ? index - 1 : sliderItems.length - 1;
    } else if (param === "right") {
      index = index === sliderItems.length - 1 ? 0 : index + 1;
    }
  } else {
    index = param;
  } 

  sliderItems[index].classList.add("slider__item_active");
  sliderDots[index].classList.add("slider__dot_active");
}

// -------------------- мой первоначальный вариант: --------------------
// // активация нужной точки:
// function activeDot() {
//   sliderItems.forEach((slider, index) => {
//     if (slider.classList.contains("slider__item_active")) {
//       sliderDots[index].classList.add("slider__dot_active");
//     } else {
//       sliderDots[index].classList.remove("slider__dot_active");
//     }
//   });
// }

// // клик по левой стрелке:
// function clickLeftArrow() {
//   leftArrow.addEventListener("click", () => {
//     for (let i = 0; i < sliderItems.length; i++) {
//       if (sliderItems[i].classList.contains("slider__item_active")) {
//         sliderItems[i].classList.remove("slider__item_active");
//         if (i) {
//           sliderItems[i - 1].classList.add("slider__item_active");
//         } else {
//           sliderItems[sliderItems.length - 1].classList.add("slider__item_active");
//         }
//         activeDot();
//         break;
//       }
//     }
//   });
// }

// // клик по правой стрелке:
// function clickRightArrow() {
//   rightArrow.addEventListener("click", () => {
//     for (let i = 0; i < sliderItems.length; i++) {
//       if (sliderItems[i].classList.contains("slider__item_active")) {
//         sliderItems[i].classList.remove("slider__item_active");
//         if ((i + 1) < sliderItems.length) {
//           sliderItems[i + 1].classList.add("slider__item_active");
//         } else {
//           sliderItems[0].classList.add("slider__item_active");
//         }
//         activeDot();
//         break;
//       }
//     }
//   });
// }

// // клик по точке:
// function clickDots() {
//   for (let i = 0; i < sliderDots.length; i++) {
//     sliderDots[i].addEventListener("click", event => {
//       if (event.target === sliderDots[i]) {
//         for (let j = 0; j < sliderDots.length; j++) {
//           sliderItems[j].classList.remove("slider__item_active");
//         }
//         sliderItems[i].classList.add("slider__item_active");
//         activeDot();
//       }
//     });
//   };
// }

// function main() {
//   clickLeftArrow();
//   clickRightArrow();
//   clickDots();
// }

// main();

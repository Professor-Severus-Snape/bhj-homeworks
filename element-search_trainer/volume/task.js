"use strict";

const upBtn = document.querySelector(".volume-up");      // кнопка +
const downBtn = document.querySelector(".volume-down");  // кнопка -
const volumeBar = [...document.querySelectorAll(".volume-rect")];  // шкала громкости (массив)
const indicator = document.querySelector(".indicator");
let indicatorCount = +indicator.textContent;             // индикатор громкости (от 0 до 10)

// отрисовщик шкалы громкости:
function drawVolumeBar() {
  volumeBar.forEach( (bar, index) => {
    bar.className = indicatorCount <= index ? "volume-rect" : "volume-rect volume-rect__active";
  });
}

upBtn.onclick = function() {
  if (indicatorCount < volumeBar.length) {
    indicator.textContent = ++indicatorCount;
    drawVolumeBar();
  }
};

downBtn.onclick = function() {
  if (indicatorCount > 0) {
    indicator.textContent = --indicatorCount;
    drawVolumeBar();
  }
};

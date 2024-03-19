"use strict";

const body = document.body;
const checkbox = document.getElementById("checkbox");

checkbox.onclick = function () {
  body.classList.toggle("light-mode");
};

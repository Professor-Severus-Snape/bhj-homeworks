"use strict";

const mainCheckbox = document.getElementById("main-checkbox");
const subCheckboxes = [...document.querySelectorAll(".sub-checkbox")];

mainCheckbox.addEventListener("change", () => {
  subCheckboxes.forEach(subCheckbox => {
    subCheckbox.checked = mainCheckbox.checked;
  });
});

subCheckboxes.forEach(subCheckbox => {
  subCheckbox.addEventListener("change", () => {
    mainCheckbox.checked = subCheckboxes.every(subCheckbox => subCheckbox.checked);
  })
});

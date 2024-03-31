"use strict";

const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  xhr.upload.addEventListener("progress", event => {
    progress.value = `${(event.loaded / event.total).toFixed(1)}`;
  });

  xhr.upload.addEventListener("load", () => {
    alert("Загрузка успешно завершена!");
    progress.value = "0.0";
    document.querySelector(".input__wrapper-desc").textContent = "Имя файла...";
  });

  xhr.send(formData);
  
  form.reset(); // NOTE: почему форма не очищается???
});

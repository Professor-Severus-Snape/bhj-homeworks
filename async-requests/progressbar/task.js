"use strict";

const progress = document.getElementById("progress");
const form = document.getElementById("form");

function sendFile() {
  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  xhr.upload.addEventListener("progress", event => {
    progress.value = `${(event.loaded / event.total).toFixed(1)}`;
  });

  xhr.upload.addEventListener("load", () => {
    alert("Загрузка успешно завершена!");
    form.reset();
    progress.value = "0.0";
    document.querySelector(".input__wrapper-desc").textContent = "Имя файла...";
  });

  xhr.send(formData);
}

form.addEventListener("submit", event => {
  event.preventDefault();

  // Проверка на наличие файла:
  const file = document.getElementById("file").files[0];
  if (file) {
    sendFile();
  } else {
    alert("Выберите, пожалуйста, файл для загрузки!")
  }
});

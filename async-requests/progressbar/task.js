"use strict";

const progress = document.getElementById("progress");
const form = document.getElementById("form");

function resetForm() {
  form.reset();
  document.querySelector(".input__wrapper-desc").textContent = "Имя файла...";
}

function sendFile() {
  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  xhr.upload.addEventListener("progress", event => {
    progress.value = `${(event.loaded / event.total).toFixed(1)}`;
  });

  xhr.upload.addEventListener("load", () => {
    alert("Загрузка успешно завершена!");
    resetForm();
    progress.value = "0.0";
  });

  xhr.send(formData);
}

form.addEventListener("submit", event => {
  event.preventDefault();

  const file = document.getElementById("file").files[0];
  // Проверка на наличие файла:
  if (file) {
    // Ограничение размера до 20МБ:
    if (file.size > 20 * 1024 * 1024) {
      alert("Превышен допустимый вес. Уменьшите размер файла.");
      resetForm();
    } else {
      sendFile();
    }
  } else {
    alert("Выберите, пожалуйста, файл для загрузки!")
  }
});

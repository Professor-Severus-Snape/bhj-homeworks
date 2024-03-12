"use strict"

const modalMain = document.getElementById("modal_main"); // окно #modal_main
const modalSuccess = document.getElementById("modal_success"); // окно #modal_success
const modalCloseList = document.querySelectorAll(".modal__close"); // все крестики (объект NodeList)
const showSuccessLink = document.querySelector(".show-success"); // ссылка "сделать хорошо"

modalMain.classList.add("modal_active"); // запуск всплывающего окна #modal_main

// закрытие каждого всплывающего окна по клику на его крестик:
modalCloseList.forEach( btn => {
  btn.onclick = () => {
    btn.closest(".modal_active").classList.remove("modal_active");
  };
});

showSuccessLink.onclick = () => {
  modalMain.classList.remove("modal_active"); // закрытие окна #modal_main
  modalSuccess.classList.add("modal_active"); // открытие окна #modal_success
  return false; // запрет перехода по ссылке
};

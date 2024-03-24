"use strict";

const form = document.querySelector("form");
const content = document.querySelector(".content"); // элемент для записи контента

form.addEventListener("submit", event => {
  event.preventDefault(); // чтобы страница не перезагружалась
  
  [...content.children].forEach(child => child.remove()); // очищение старого контента

  const name = form.elements.name.value.trim(); // form.elements <- поиск по id
  const feedback = form.elements.feedback.value.trim(); // form.elements <- поиск по id

  const paragraph_1 = document.createElement("p");
  paragraph_1.textContent = `Имя: ${name}`;
  content.append(paragraph_1);
  
  const paragraph_2 = document.createElement("p");
  paragraph_2.textContent = `Текст: ${feedback}`;
  content.append(paragraph_2);
  
  form.reset(); // очистка полей формы после отправки
});

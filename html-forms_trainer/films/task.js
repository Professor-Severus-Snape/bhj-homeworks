"use strict";

const form = document.querySelector("form");
const input = document.getElementById("name");
const select = document.getElementById("genre");
const content = document.querySelector(".content");

const options = [
  {label: "Драма", value: "drama"},
  {label: "Комедия", value: "comedy"},
  {label: "Фантастика", value: "sci-fi"}
];

options.forEach(item => {
  const option = document.createElement("option");
  option.value = item.value;
  option.text = item.label;
  select.append(option);
});

form.addEventListener("submit", event => {
  event.preventDefault();

  [...content.children].forEach(child => child.remove()); // очищение старого контента

  const film = input.value.trim();
  const genre = select.options[select.selectedIndex].text;

  const paragraph_1 = document.createElement("p");
  paragraph_1.innerText = `Название фильма: ${film}`;
  content.append(paragraph_1);

  const paragraph_2 = document.createElement("p");
  paragraph_2.innerText = `Жанр: ${genre}`;
  content.append(paragraph_2);

  form.reset();
});

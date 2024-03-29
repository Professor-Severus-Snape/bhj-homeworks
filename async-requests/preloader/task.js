"use strict";

const img = document.querySelector(".loader");
const items = document.getElementById("items");

function addItem(obj) {
  const item = document.createElement("div");
  item.className = "item";

  const itemCode = document.createElement("div");
  itemCode.className = "item__code";
  itemCode.textContent = obj.code; // USD

  const itemValue = document.createElement("div");
  itemValue.className = "item__value";
  itemValue.textContent = obj.value; // 92.366

  const itemCurrency = document.createElement("div");
  itemCurrency.className = "item__currency";
  itemCurrency.textContent = "руб."; // руб.

  items.append(item);
  item.append(itemCode);
  item.append(itemValue);
  item.append(itemCurrency);
}

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();

xhr.addEventListener("load", () => {
  img.classList.remove("loader_active"); // убираем анимацию загрузки

  const json = JSON.parse(xhr.response); // преобразование ответа (из строки в JSON-объект)
  const valute = json.response.Valute; // достаём все валюты

  // перебор валют (через Object.values - возвращает массив значений):
  Object.values(valute).forEach(value => {
    const itemObj = {
      code: value.CharCode,
      value: value.Value
    }
    addItem(itemObj);
  });
});

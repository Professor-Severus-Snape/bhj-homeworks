"use strict";

const title = document.querySelector(".poll__title");
const answers = document.querySelector(".poll__answers");

// GET-запрос:
const xhr_get = new XMLHttpRequest();
xhr_get.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr_get.send();

// POST-запрос:
const xhr_post = new XMLHttpRequest();
xhr_post.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
xhr_post.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

// удаление всех вариантов ответа:
function removeAllAnswers() {
  [...answers.children].forEach(answer => answer.remove());
}

// обработчик получения ответа на GET-запрос:
xhr_get.addEventListener("load", () => {
  removeAllAnswers();
  const json = JSON.parse(xhr_get.response); // {id: 1, data: {title: "Ваш любимый герой?", answers: ["Мистер Чеснок", "Принцесса Дыня"]}}
  title.textContent = json.data.title;

  json.data.answers.forEach( (answer, index) => {
    const btn = document.createElement("button");
    btn.classList.add("poll__answer");
    btn.textContent = answer;
    btn.addEventListener("click", () => {
      alert(`Спасибо, ваш голос засчитан!`);
      xhr_post.send(`vote=${json.id}&answer=${index}`);
    });
    answers.append(btn);
  });
});

// обработчик получения ответа на POST-запрос:
xhr_post.addEventListener("load", () => {
  removeAllAnswers();
  const stat = JSON.parse(xhr_post.response).stat; // [{answer: "Мистер Чеснок", votes: 52}, {answer: "Принцесса Дыня", votes: 48}]
  const countOfVotes = stat.reduce((acc, item) => acc + item.votes, 0); // 100 - всего голосов в опросе

  stat.forEach(item => {
    const resultElement = document.createElement("div");
    resultElement.textContent = `${item.answer}: ${(item.votes / countOfVotes * 100).toFixed(2)}%`;
    answers.append(resultElement);
  });
});

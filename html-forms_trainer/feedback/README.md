# Форма обратной связи с двумя полями

Домашнее задание к лекции «Работа с HTML-формами».

## Условие задачи 

Вам необходимо создать функционал по отправке формы обратной связи. Форма имеет два поля ввода «Имя» и «Текст» и кнопку действия. Поля формы содержат атрибут required, поэтому они должны быть заполнены перед отправкой формы. Если оба поля заполнены, то при нажатии на кнопку происходит эмуляция отправки. В разметке существует блок div с классом content, данные должны быть записаны в этот тег. Пример разметки:

```html
1 <div class="content">
2   <p>Имя: Админ</p>
3   <p>Текст: Я не админ</p>
4 </div>
```

## Процесс реализации

1. Найти нужные элементы.
2. Добавить обработчик.
3. Написать логику в обработчике.
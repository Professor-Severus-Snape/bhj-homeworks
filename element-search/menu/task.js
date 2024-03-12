"use strict";

const mainMenus = [...document.querySelectorAll(".menu_main")]; // все .menu_main

// ---------- 1-ый вариант -> по слушателю на каждую ссылку <a> (более точное срабатывание): ----------
mainMenus.forEach(mainMenu => {
  const subMenus = [...mainMenu.querySelectorAll(".menu_sub")]; // все .menu_sub внутри данного .menu_main
  const links = [...mainMenu.querySelectorAll(".menu__link")]; // все .menu__link внутри данного .menu_main

  links.forEach(link => {
    link.addEventListener("click", event => {
      const subMenu = link.nextElementSibling; // кликнутое .menu_sub
      
      if (subMenu) {
        event.preventDefault(); // запрет перехода по ссылкам
        subMenus.forEach(sub => {
          subMenu === sub ? sub.classList.toggle("menu_active") : sub.classList.remove("menu_active");
        });
      }
    });
  });
});

// ---------- 2-ой вариант -> один слушатель сразу на весь список <ul> (возможны ложные срабатывания): ----------
// mainMenus.forEach(mainMenu => {
//   const subMenus = [...mainMenu.querySelectorAll(".menu_sub")];
// 
//   mainMenu.addEventListener("click", event => {
//     const subMenu = event.target.nextElementSibling;
// 
//     if (subMenu) {
//       event.preventDefault();
//       subMenus.forEach(sub => {
//         subMenu === sub ? sub.classList.toggle("menu_active") : sub.classList.remove("menu_active");
//       });
//     }
//   });
// });

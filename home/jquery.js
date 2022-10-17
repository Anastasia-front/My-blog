/* ----------------------------HIDE MENU---------------------------- */

// $(document).on("click", function (e) {
//   if (!$(e.target).closest(".navbar").length) {
//     $(".collapse").toggle();
//   }
//   e.preventDefault();
// });
// $(document).on("click", function (e) {
//   if (!$(e.target).closest(".container").length) {
//     $(".collapse").toggle();
//   }
//   e.stopPropagation();
// });
// $(".navbar-toggler").click(function () {
//   $(".collapse").toggle();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   // Структура страницы загружена и готова к взаимодействию

//   const button = document.querySelector(".navbar-toggler"); // находим кнопку для открытия/закрытия окна навигации
//   const nav = document.querySelector(".navbar"); // находим окно навигации

//   button.addEventListener("click", () => {
//     // при клике на кнопку
//     nav.classList.toggle("nav_active"); // открываем/закрываем окно навигации, добаляя/удаляя активный класс
//   });

//   window.addEventListener("click", (e) => {
//     // при клике в любом месте окна браузера
//     const target = e.target; // находим элемент, на котором был клик
//     if (!target.closest(".navbar") && !target.closest(".navbar-toggler")) {
//       // если этот элемент или его родительские элементы не окно навигации и не кнопка
//       nav.classList.remove("nav_active"); // то закрываем окно навигации, удаляя активный класс
//     }
//   });
// });

/* ----------------------------SPOILERS---------------------------- */

$(document).ready(function () {
  $(".spoiler__title").click(function (e) {
    if ($(".spoiler").hasClass("one")) {
      $(".spoiler__title").not($(this)).removeClass("spoiler-active");
      $(".spoiler__text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("spoiler-active").next().slideToggle(300);
  });
});

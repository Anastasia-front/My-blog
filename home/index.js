// const btnMenu = document.querySelector(".navbar-toggler");
// const menu = document.querySelector(".navbar");
// const collapse = document.querySelector(".collapse");

// document.addEventListener("click", menu);

// function menu(event) {
//   if (event.target.closest(".navbar-toggler")) {
//     menu.classList.toggle("act");
//   }
//   if (!event.target.closest(".navbar")) {
//     menu.classList.remove("act");
//   }
// }

// -----------------------------GO_TO_PROJECTS---------------------
const my_pro = document.querySelector(".my-projects__title");
const recent = document.querySelector(".recent");
recent.addEventListener("click", (e) => {
  my_pro.scrollIntoView(".my-projects__title");
  e.preventDefault();
});
// -----------------------------SPOILERS---------------------
// const sp_title = document.querySelectorAll(".spoiler__title");

// sp_title.forEach(function (elem, i) {
//   elem.addEventListener("click", function (event) {
//     // event.preventDefault();
//     document
//       .querySelectorAll(".spoiler__title")
//       [i].classList.toggle("spoiler-active");
//   });
// });

// -----------------------------POPUP---------------------

// const popups = document.querySelectorAll(".popup1");
// body = document.querySelector("body");
// const lockPad = document.querySelectorAll(".lock-padding");

// let timeOut = 500;
// let unlock = true;

// if (popups.length > 0) {
//   for (let index = 0; index < popups.length; index++) {
//     const popup = popups[index];
//     popup.addEventListener("click", function (e) {
//       const popupName = popup.getAttribute("href").replace("#", "");
//       const curentPop = document.getElementById(popupName);
//       popupOpen(curentPop);
//       e.preventDefault();
//     });
//   }
// }

// const popClose = document.querySelectorAll(".close-popup");
// if (popClose.length > 0) {
//   for (let index = 0; index < popClose.length; index++) {
//     const el = popClose[index];
//     el.addEventListener("click", function (e) {
//       popupClose(el.closest(".popup"));
//       e.preventDefault();
//     });
//   }
// }

// function popupOpen(curentPop) {
//   if (curentPop && unlock) {
//     const popupActive = document.querySelector(".popup1 .open");
//     if (popupActive) {
//       popClose(popupActive, false);
//     } else {
//       bodyLock();
//     }
//     curentPop.classList.add("open");
//     curentPop.addEventListener("click", function (e) {
//       if (!e.target.closest(".popup__content")) {
//         popClose(e.target.closest(".popup"));
//       }
//     });
//   }
// }

// function popClose(popupActive, doUnlock = true) {
//   if (unlock) {
//     popupActive.classList.remove("open");
//     if (doUnlock) {
//       bodyLock();
//     }
//   }
// }

// function bodyLock() {
//   const lockPaddingValue =
//     window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

//   if (lockPadding.length > 0) {
//     for (let index = 0; index < lockPadding.length; index++) {
//       const el = lockPadding[index];
//       el.style.paddingRight = lockPaddingValue;
//     }
//   }

//   body.style.paddingRight = lockPaddingValue;
//   body.classList.add("lock");

//   unlock = false;
//   setTimeout(function () {
//     unlock = true;
//   }, timeOut);
// }

// function bodyUnlock() {
//   setTimeout(function () {
//     if (lockPadding.length > 0) {
//       for (let index = 0; index < lockPadding.length; index++) {
//         const el = lockPadding[index];
//         el.style.paddingRight = "0px";
//       }
//     }

//     body.style.paddingRight = "0px";
//     body.classList.remove("lock");
//   }, timeOut);
//   unlock = false;
//   setTimeout(function () {
//     unlock = true;
//   }, timeOut);
// }

// document.addEventListener("keydown", function (e) {
//   if (e.which === 27) {
//     const popupActive = document.querySelector(".popup.open");
//     popClose(popupActive);
//   }
// });

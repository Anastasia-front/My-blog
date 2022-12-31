// ----------------------LINKS to-------------------------------
const l = document.querySelector(".sidebar__link");
const l1 = document.getElementById("1");
const l2 = document.getElementById("2");
const l3 = document.getElementById("3");
// ----------------------SUBTITLES by-------------------------------
const subT = document.querySelectorAll(".padding");
const c1 = subT[0];
const c2 = subT[1];
const c3 = subT[2];
// console.log(c1, c2, c3);
// ----------------------COORDINATES by-------------------------------
const t1 = c1.getBoundingClientRect().top - 500;
const t2 = c2.getBoundingClientRect().top;
const t3 = c3.getBoundingClientRect().top;
// console.log(t1, t2, t3);
// ----------------------FUNCTIONS-------------------------------

// ----------------------CLASS ACTIVE FOR LINKS-------------------------------

const getId = (link) => link.getAttribute("href").replace("#", "");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".sidebar__link").forEach((link) => {
          link.classList.toggle(
            "photo-active",
            getId(link) === entry.target.id
          );
        });
      }
    });
  },
  {
    threshold: 0.7,
  }
);

document
  .querySelectorAll(".gallery__subtitle")
  .forEach((subtitle) => observer.observe(subtitle));

document.querySelector(".sidebar__link").addEventListener("click", (event) => {
  if (event.target.classList.contains("")) {
    event.preventDefault();
    const id = getId(event.target);

    window.scrollTo({
      top: document.getElementById(id).offsetTop,
      behavior: "smooth",
    });
  }
});
//
// ----------------------NAVIGATION BY LINKS-------------------------------

l1.addEventListener("click", (e) => {
  c1.scrollIntoView(".gallery__subtitle");
  e.preventDefault();
});
l2.addEventListener("click", (e) => {
  c2.scrollIntoView(".gallery__subtitle");
  e.preventDefault();
});
l3.addEventListener("click", (e) => {
  c3.scrollIntoView(".gallery__subtitle");
  e.preventDefault();
});

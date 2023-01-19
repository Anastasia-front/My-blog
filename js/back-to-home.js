const backHomeBtn = document.getElementById("back-home");
const firstSection = document.getElementById("back-to-home-appear");
const firstSectionPosition = firstSection.offsetTop;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > firstSectionPosition) {
    backHomeBtn.classList.remove("btn-hidden");
  } else {
    backHomeBtn.classList.add("btn-hidden");
  }
});

backHomeBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

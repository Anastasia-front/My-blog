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

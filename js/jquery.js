/* ----------------------------GO_TOP---------------------------- */
$(document).ready(function () {
  $("body").append('<a href="#" id="go-top" title="UP">UP</a>');
});

$(function () {
  $.fn.scrollToTop = function () {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "150") $(this).fadeIn("slow");
    var scrollDiv = $(this);
    $(window).scroll(function () {
      if ($(window).scrollTop() <= "150") $(scrollDiv).fadeOut("slow");
      else $(scrollDiv).fadeIn("slow");
    });
    $(this).click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
  };
});

$(function () {
  $("#go-top").scrollToTop();
});

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

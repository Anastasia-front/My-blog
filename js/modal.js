!(function (e) {
  "function" != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    "function" != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener("DOMContentLoaded", function () {
  var modalButtons = document.querySelectorAll(".js-open-modal"),
    overlay = document.querySelector(".js-overlay-modal"),
    closeButtons = document.querySelectorAll(".js-modal-close");
  body = document.querySelector("body");

  modalButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      var modalId = this.getAttribute("data-modal"),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      modalElem.classList.add("active");
      overlay.classList.add("active");
      body.classList.add("no-scroll");
    }); // end click
  }); // end foreach

  closeButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var parentModal = this.closest(".modal");

      parentModal.classList.remove("active");
      overlay.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  }); // end foreach

  document.body.addEventListener(
    "keyup",
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector(".modal.active").classList.remove("active");
        document.querySelector(".overlay").classList.remove("active");
        body.classList.remove("no-scroll");
      }
    },
    false
  );

  overlay.addEventListener("click", function () {
    document.querySelector(".modal.active").classList.remove("active");
    this.classList.remove("active");
    body.classList.remove("no-scroll");
  });
}); // end ready

function submitForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const textareaInput = document.getElementById("textarea");

  // Check if inputs are not empty
  if (
    nameInput.value.trim() === "" ||
    textareaInput.value.trim() === "" ||
    emailInput.value.trim() === ""
  ) {
    alert("Please fill in all the fields.");
  } else {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("result").style.display = "block";

    nameInput.value = "";
    emailInput.value = "";
    textareaInput.value = "";

    setTimeout(function () {
      document.getElementById("myForm").style.display = "block";
      document.getElementById("result").style.display = "none";
    }, 3000);
  }
}

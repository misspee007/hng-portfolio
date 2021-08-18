$(document).ready(function () {
  document
    .getElementById("hamburgerMenu")
    .addEventListener("click", toggleMenu);

  // header scroll behaviour
  $(window).on("scroll load", function () {
    if ($(window).scrollTop() > 25) {
      $(".headerCls").hide();
    } else {
      $(".headerCls").show();
    }

    $(".fa-times").removeClass("fa-times").addClass("fa-bars");
    $(".navbar").removeClass("nav-toggle");
  });
});

// Hamburger menu toggle
function toggleMenu(event) {
  let x = event.target;
  let y = event.target.className;

  console.log(x, y);

  if (y == "fa fa-bars") {
    $(this).removeClass("fa-bars").addClass("fa-times");
    $(".navbar").addClass("nav-toggle");
  } else {
    $(this).removeClass("fa-times").addClass("fa-bars");
    $(".nav-toggle").removeClass("nav-toggle");
  }
}

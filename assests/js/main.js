$(document).ready(function () {
  $(".toggel-bar").click(function () {
    $(".menu").toggleClass("active");
  });
});

// header scroll dow
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 30) {
      $("header").addClass("header-change");
    } else {
      $("header").removeClass("header-change");
    }
  });
});

var header = $("header").innerHeight() + "px";
console.log("Header Height : ", header);

$("body").css("--headerHeight", header);

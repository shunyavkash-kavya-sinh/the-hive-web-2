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

// header scroll dow tow
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 30) {
      $(".res-open-heasder").addClass("res-header-change");
    } else {
      $(".res-open-heasder").removeClass("res-header-change");
    }
  });
});

var header = $("header").innerHeight() + "px";
console.log("Header Height : ", header);

$("body").css("--headerHeight", header);

// slick-slider
$(".slider-mainbox").slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// resources start
$(".resources-slider-box").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// resources end

// circle-data start
$(".circle-autoplay").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 1000,
});
// circle-data end

// filter button app

$(document).ready(function () {
  var $filterButtons = $(".filter-btn li");
  var $resources = $(".filter-resources");
  $filterButtons.click(function () {
    $filterButtons.removeClass("is-active");
    $(this).addClass("is-active");
    var filterClass = $(this).attr("class").split(" ")[0];
    if (filterClass === "all") {
      $resources.fadeIn();
    } else {
      $resources.hide();
      $("." + filterClass + "-box").fadeIn();
    }
  });
});

// filter helping button app

$(document).ready(function () {
  var $filterButtons = $(".filter-btn li");
  var $resources = $(".help-img-box");

  $filterButtons.click(function () {
    $filterButtons.removeClass("is-active");
    $(this).addClass("is-active");
    var filterClass = $(this).attr("class").split(" ")[0];
    if (filterClass === "filter-all") {
      $resources.fadeIn();
    } else {
      $resources.hide();
      $("." + filterClass).fadeIn();
    }
  });
});

// img-slider

$(".fade").slick({
  dots: false,
  infinite: true,
  speed: 400,
  fade: true,
  cssEase: "linear",
  autoplay: true,
});

//modal box

$(".modal-toggle").on("click", function (e) {
  e.preventDefault();
  $(".modal").toggleClass("is-visible");

  if ($(".modal").hasClass("is-visible")) {
    $("body").addClass("noscroll"); // Disable scroll
  } else {
    $("body").removeClass("noscroll"); // Enable scroll
  }
});


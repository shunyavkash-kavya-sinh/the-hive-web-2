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
  arrows:false,
  autoplaySpeed: 1000,
});
// circle-data end

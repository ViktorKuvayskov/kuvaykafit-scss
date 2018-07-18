$(document).ready(function(){
  $('.slider-services').slick({
    dots: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
      }
    },
    ]
  });
});
    

$(document).ready(function(){
  $('.slider-price').slick({
  dots: true,
  slidesToShow: 4,
  arrow: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        arrows: false,
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    },
    ]
  });
});

$(document).ready(function(){
  $('.gallery-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
      }
    },
    ]
  });
});
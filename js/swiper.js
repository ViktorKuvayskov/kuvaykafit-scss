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
  dots: false,
  slidesToShow: 4,
  arrow: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        slidesToShow: 3,
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 520,
      settings: {
        dots: true,
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
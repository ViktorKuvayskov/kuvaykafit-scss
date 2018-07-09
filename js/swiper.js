$(document).ready(function(){
  $('.slider1').slick({
    dots: false,
    arrows: true,
  });
});
    

$(document).ready(function(){
  $('.slider2').slick({
  dots: true,
  slidesToShow: 4,
  arrow: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
      }
    },
    ]
  });
});

$(document).ready(function(){
  $('.slider3').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
//= ../../../../../../node_modules/slick-carousel/slick/slick.js

$(document).ready(function(){
    $('.reviews__slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true
  });

  $slider = $('.features__inner');

enquire.register('screen and (max-width: 767px)', {
  match : function() {
    if ( !$slider.hasClass('slick-initialized') ) {
      $slider.slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true
      });
    }
  }, 
  unmatch : function() {
    if ( $slider.hasClass('slick-initialized') ) {
      $slider.slick('unslick');
    }
  }
});
  });

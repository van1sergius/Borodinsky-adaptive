// const enquire = require("enquire.js");

// const enquire = require("enquire.js");//del

//= ../../../../node_modules/jquery/dist/jquery.js
//= ../../../../node_modules/enquire.js/dist/enquire.js
//= fragments/features/slider.js
//= fragments/header/hamburger.js

$(document).ready(function() {
	var loc = window.location.pathname;
    if (loc !== '/') {
        $('.nav__item').find('a').each(function() {
            $(this).toggleClass('nav__link--active', $(this).attr('href') ==    loc);
         });

    if (loc === '/portfolio.html') {
        $('.header').addClass('header--portfolio');
        $('.footer').addClass('footer--portfolio');
    }
    
    console.log(loc);
}


var popUp = 'zoomIn'; 

$signin = $('.signin');

enquire.register('screen and (max-width: 767px)', {
    match : function() {
        console.log('test');

        $($signin).addClass('mobile');
        if ($signin.hasClass(popUp)) {
            $signin.removeClass(popUp);
        }

    },
    unmatch : function() {
        $($signin).removeClass('mobile');
        if ($signin.hasClass(popUp)) {
            $signin.removeClass(popUp);
        }
    }
 
  });

  enquire.register('screen and (min-width: 768px)', {
    match : function() {
        console.log('test1');
        if ($signin.hasClass(popUp)) {
            $signin.removeClass(popUp);
        }
    }

  });

$('.nav__link--login').on('click', function(event) {
    event.preventDefault();

    if ($signin.hasClass(popUp)) {
        $signin.removeClass(popUp);
    }

    $($signin).toggleClass('signin--visible');


    if (!$signin.hasClass('mobile')) {
            $($signin).addClass(popUp);
    };

    

    $('.nav__link').removeClass('nav__link--visible');
    $('.hamburger').removeClass('is-active');
})

$('.signin__close').on('click', function(event) {
    event.preventDefault();

    $('.signin').removeClass('signin--visible');

})

})




  

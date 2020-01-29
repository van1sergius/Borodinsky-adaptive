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

})



  

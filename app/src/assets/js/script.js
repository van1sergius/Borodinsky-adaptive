//= ../../../../node_modules/jquery/dist/jquery.js
//= ../../../../node_modules/enquire.js/dist/enquire.js
//= fragments/features/slider.js
//= fragments/header/hamburger.js

$(document).ready(function() {
	// get current URL path and assign 'active' class
    // var pathname = window.location.pathname;
    // $('.nav__list > .nav__item > a').removeClass('nav__link--active');
    // $('.nav__list > .nav__item > a[href="'+pathname+'"]').addClass('nav__link--active');
    // console.log(pathname);

})

var loc = window.location.pathname;
if (loc !== '/') {
    $('.nav__item').find('a').each(function() {
        $(this).toggleClass('nav__link--active', $(this).attr('href') == loc);
     });
}

  

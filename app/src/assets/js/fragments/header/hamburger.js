// Dropdown Menu
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.hamburger').classList.toggle('is-active');
    var divs = document.querySelectorAll('.nav__item');
        for (var i = 0; i < divs.length; i++) {
            divs[i].classList.toggle('nav__item--visible');
    }
})

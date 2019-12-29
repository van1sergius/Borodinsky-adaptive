// Dropdown Menu
console.log('test');
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.hamburger').classList.toggle('is-active');
    var divs = document.querySelectorAll('.header__nav-item');
        for (var i = 0; i < divs.length; i++) {
            divs[i].classList.toggle('header__nav-item--visible');
    }
})

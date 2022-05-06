const burgerMenu = document.querySelector('.menu-icon')
const mobileMenu = document.querySelector('.mobile-menu')
const overlayMobile = document.querySelector('.mobile-menu-overlay')
const body = document.querySelector('body')

burgerMenu.addEventListener('click',() => {
    mobileMenu.classList.add('mobile-menu-active')
    overlayMobile.style.display = 'block'
    body.style.overflow = 'hidden'
})

overlayMobile.addEventListener('click', () => {
    if (mobileMenu.classList.contains ('mobile-menu-active')) {
        mobileMenu.classList.remove('mobile-menu-active')
    }
    overlayMobile.style.display = 'none'
    body.style.overflow = 'visible'
})


$(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        Infinity: false,
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
      });
})


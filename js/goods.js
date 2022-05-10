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
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        Infinity: false,
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
      });
})  


$(function () {
    $('.more-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1320,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 901,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
})
const burgerMenu = document.querySelector('.menu-icon')
const mobileMenu = document.querySelector('.mobile-menu')
const overlayMobile = document.querySelector('.mobile-menu-overlay')
const filterButton = document.querySelector('.filter-btn')
const mobileFilters = document.querySelector('.mob-filters')

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [0, 100],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});

burgerMenu.addEventListener('click',() => {
    mobileMenu.classList.add('mobile-menu-active')
    overlayMobile.style.display = 'block'
})

overlayMobile.addEventListener('click', () => {
    if (mobileMenu.classList.contains ('mobile-menu-active')) {
        mobileMenu.classList.remove('mobile-menu-active')
    }
    if (mobileFilters.classList.contains('mob-filters-active')) {
        mobileFilters.classList.remove('mob-filters-active')
    }
    overlayMobile.style.display = 'none'
})

filterButton.addEventListener('click',(event) => {
    event.preventDefault()
    mobileFilters.classList.add('mob-filters-active')
    overlayMobile.style.display = 'block'
})
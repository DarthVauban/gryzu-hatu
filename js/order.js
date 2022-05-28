const burgerMenu = document.querySelector('.menu-icon')
const mobileMenu = document.querySelector('.mobile-menu')
const overlayMobile = document.querySelector('.mobile-menu-overlay')
const body = document.querySelector('body')
const cashButton = document.querySelector ('.cash-pay-btn')
const cartButton = document.querySelector ('.card-pay-btn')

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

cashButton.addEventListener('click',() => {
    cashButton.classList.add('cash-pay-btn_active')
    if (cartButton.classList.contains ('cash-pay-btn_active')) {
        cartButton.classList.remove ('cash-pay-btn_active')
    }
})
cartButton.addEventListener('click', () => {
    cartButton.classList.add('cash-pay-btn_active')
    if (cashButton.classList.contains ('cash-pay-btn_active')) {
        cashButton.classList.remove ('cash-pay-btn_active')
    }
})
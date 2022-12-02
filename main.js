const menuMobile = document.getElementById('menu-mobile')
const headerMobile = document.getElementById('header')

menuMobile.addEventListener('click', () => {
    headerMobile.classList.toggle('vissible')
})


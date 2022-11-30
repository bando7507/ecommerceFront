const navOpen = document.querySelector('.nav__toggle')
const navClose = document.querySelector('.nav__close')
const navMenu = document.querySelector('.nav__menu')

navOpen.addEventListener('click', () =>{
    navMenu.classList.add('show')
})


navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show')
})
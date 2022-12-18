
const navOpen = document.querySelector('.nav__toggle')
const navClose = document.querySelector('.nav__close')
const navMenu = document.querySelector('.nav__menu')
const allLinks = document.querySelectorAll('.nav__item')

const slider = document.querySelector('.slider')
const hero = document.querySelector('.nav__hero')

navOpen.addEventListener('click', () => {
    navMenu.classList.add('show')
})

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show')
})


allLinks.forEach((el) => {
    el.addEventListener('click', () => {
        navMenu.classList.remove('show')
    })
})



const tl = new TimelineMax()

tl.fromTo(slider, 1.2, { 
    x: "-100%"
}, {
    x: "0%", 
    ease: Power2.easeInOut
})

tl.fromTo(hero, .8, {
    width: '100%',
    height: '0'
}, {
    width: '80%',
    height: '100%'
}, '-=1')
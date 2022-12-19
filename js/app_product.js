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

// /////////////////////////////////


const onglet = document.querySelectorAll('.products__item') 
const contenu = document.querySelectorAll('.product') 


let index = 0
onglet.forEach(el =>{
    el.addEventListener('click', () =>{
        index = el.getAttribute('data-amin')
        for(let i = 0 ; contenu.length > i; i++){
            const newIndex = contenu[i].getAttribute('data-amin')
            if(index == newIndex ){
                contenu[i].classList.add('show-product')
            }else{
                contenu[i].classList.remove('show-product')
            }
        }
    })
})


// /////////////////////////////////
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

// /////////////////////////////////

ScrollReveal()
    .reveal('.logo__img', {
        duration: 1000,
        delay: 400,
        distance: "50%",
        origin: "top",
        reset: true
    });

ScrollReveal()
    .reveal('.popular', {
        duration: 1000,
        delay: 400,
        oppaciy: 0,
        reset: true
    });
ScrollReveal()
    .reveal('.popular__img', {
        duration: 1000,
        delay: 400,
        distance: "30%",
        origin: "right",
        reset: true
    });
ScrollReveal()
    .reveal('.presentatin__1', {
        duration: 1000,
        delay: 400,
        distance: "50%",
        origin: "top",
        reset: true
    });
ScrollReveal()
    .reveal('.presentatin__2', {
        duration: 1500,
        delay: 800,
        distance: "30%",
        origin: "left",
        reset: true
    });
ScrollReveal()
    .reveal('.presentatin__3', {
        duration: 1400,
        delay: 700,
        distance: "20%",
        origin: "right",
        reset: true
    });
ScrollReveal()
    .reveal('.presentatin__4', {
        duration: 1200,
        delay: 600,
        distance: "50%",
        origin: "bottom",
        reset: true
    });
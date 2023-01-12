const navOpen = document.querySelector('.nav__toggle')
const navClose = document.querySelector('.nav__close')
const navMenu = document.querySelector('.nav__menu')
const allLinks = document.querySelectorAll('.nav__item')

const slider = document.querySelector('.slider')
const hero = document.querySelector('.nav__hero')
const head = document.querySelector('.header')


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

window.document.addEventListener('scroll', () =>{
    if(window.scrollY > 10){
        head.classList.add('headActive')
    }else{
        head.classList.remove('headActive')
    }
})

// /////////////////////////////////


const onglet = document.querySelectorAll('.products__item') 
const contenu = document.querySelectorAll('.product') 


let index = 0
onglet.forEach(el =>{
    el.addEventListener('click', () =>{
        onglet.forEach(nav => nav.classList.remove('active'))
        el.classList.add('active')

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

const onglet2 = document.querySelectorAll('.casque__item')
const contenu2 = document.querySelectorAll('.box-img')



let id = 0
onglet2.forEach(ele =>{
    ele.addEventListener('click', () =>{
        onglet2.forEach(nav => {
            nav.classList.remove('active')
        })
        ele.classList.add('active')

        id = ele.getAttribute('data-amine')
        for(let i =0; contenu2.length > i; i++){

            newIndex2 = contenu2[i].getAttribute('data-amine')
            if(newIndex2 === id){
                contenu2[i].classList.add('box-img-show')
            }else{
                contenu2[i].classList.remove('box-img-show')
            }
        }
    })
})

    ///////////////////////

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            525: {
                slidesPerView: 2
            },
            950: {
                slidesPerView: 3
            }
        }
      });


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
        origin: "left",
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
        origin: "top",
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

    ///////////////////////

    ScrollReveal()
    .reveal('.box-img-show', {
        duration: 1600,
        delay: 300,
        oppaciy: 0,
        scale: ".3", 
        reset: true
    });

    ///////////////

    ScrollReveal()
    .reveal('.search__content', {
        duration: 1600,
        delay: 300,
        oppaciy: 0,
        distance: "50%",
        origin: "top",
        reset: true
    });

    ScrollReveal()
    .reveal('.search__form', {
        duration: 1300,
        delay: 500,
        oppaciy: 0,
        distance: "50%",
        origin: "bottom",
        reset: true
    });

    ScrollReveal()
    .reveal('.rond1', {
        duration: 1600,
        delay: 300,
        oppaciy: 0,
        scale: "3", 
        reset: true
    });

    ScrollReveal()
    .reveal('.rond3', {
        duration: 1600,
        delay: 500,
        oppaciy: 0,
        scale: ".1", 
        reset: true
    });
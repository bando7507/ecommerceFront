const navOpen = document.querySelector('.nav__toggle')
const navClose = document.querySelector('.nav__close')
const navMenu = document.querySelector('.nav__menu')
const allLinks = document.querySelectorAll('.nav__item')

const onglet = document.querySelectorAll('.feature__item')
const contenu = document.querySelectorAll('.feature__grid')


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

var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 16,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: 'true',
    slidesPerView: 3,
    navigation: 'true',
    pagination: {
        el: ".swiper-pagination",
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

var swiper = new Swiper(".myreviewSwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 3,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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


let index = 0;
onglet.forEach((el) => {
    el.addEventListener('click', () => {
        index = el.getAttribute('data-lo')
        for (let i = 0; contenu.length > i; i++) {
            const ll = contenu[i].getAttribute('data-lo')
            if (ll == index) {
                contenu[i].classList.add('acti')
            } else {
                contenu[i].classList.remove('acti')
            }
        }
    })
})


// const circle = document.querySelector('.circle')
// const homeLeft = document.querySelector('.home__left')
// const homeImg = document.querySelector('.home__img')
// const tl = new TimelineMax()



// tl.fromTo(circle, 1,{
//     height: '0%'   
// },{
//     height: '100%'   
// })

// tl.fromTo(homeImg, 1.2,{
//     scale: '.8',
// },{
//     scale: '1',
//     ease: Power2.easeInOut
// }, '-=.9')

// tl.fromTo(homeLeft, 1,{
//     x: '150px', 
//     scale: '.5',
//     opacity: '0'
// },{
//     x: '0',
//     scale: '1',
//     opacity: '1',
//     // ease: Power2.easeInOut
// }, '-=.9')



ScrollReveal()
    .reveal('.virtual', {
        duration: 1000,
        delay: 400,
        distance: "50%",
        origin: "top",
        reset: true
    });

    ScrollReveal()
    .reveal('.feature__title', {
        duration: 1000,
        delay: 400,
        distance: "10%",
        origin: "top",
        reset: true
    });

ScrollReveal()
    .reveal('.home__left', {
        duration: 1500,
        delay: 500,
        distance: "30%",
        origin: "right",
        reset: true
    });

ScrollReveal()
    .reveal('.circle', {
        duration: 1000,
        delay: 400,
        distance: "30%",
        origin: "right",
        reset: true
    })

ScrollReveal()
    .reveal('.home__img', {
        duration: 1000,
        delay: 400,
        distance: "20%",
        origin: "left",
        reset: true
    })
ScrollReveal()
    .reveal('.rates__center', {
        duration: 1000,
        delay: 400,
        distance: "20%",
        origin: "bottom",
        reset: true
    })
ScrollReveal()
    .reveal('.rates__right', {
        duration: 1000,
        delay: 400,
        distance: "50%",
        origin: "top",
        reset: true
    })
ScrollReveal()
    .reveal('.rates__left', {
        duration: 1000,
        delay: 400,
        distance: "50%",
        origin: "top",
        reset: true
    })

    


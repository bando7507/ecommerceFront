const navOpen = document.querySelector('.nav__toggle')
const navClose = document.querySelector('.nav__close')
const navMenu = document.querySelector('.nav__menu')

navOpen.addEventListener('click', () =>{
    navMenu.classList.add('show')
})


navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show')
})

var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween : 16,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: 'true', 
    slidesPerView: 3,
    navigation: 'true',
    pagination: {
        el: ".swiper-pagination",
      },
});
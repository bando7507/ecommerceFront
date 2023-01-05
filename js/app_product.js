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

const data = [
    {
        id: 1,
        cover: "../../img/1-1-1.jpg",
        title: "Floating 2021 iPhone 12 Mockups (PSD)",
        author: "by Blueskytechco in Mockups",
        price: 30.0,
        category: "mockups",
        qty: 0,
    },
    {
        id: 2,
        cover: "../../img/1-1-1.jpg",
        title: "Floating 2021 iPhone 12 Mockups (PSD)",
        author: "by Blueskytechco in Mockups",
        price: 30.0,
        category: "mockups",
        qty: 0,
    },
    {
        id: 3,
        cover: "../../img/1-1-1.jpg",
        title: "Floating 2021 iPhone 12 Mockups (PSD)",
        author: "by Blueskytechco in Mockups",
        price: 30.0,
        category: "mockups",
        qty: 0,
    },
    {
        id: 4,
        cover: "../../img/1-1-1.jpg",
        title: "Floating 2021 iPhone 12 Mockups (PSD)",
        author: "by Blueskytechco in Mockups",
        price: 30.0,
        category: "mockups",
        qty: 0,
    },
    {
        id: 5,
        cover: "../../img/1-1-1.jpg",
        title: "Floating 2021 iPhone 12 Mockups (PSD)",
        author: "by Blueskytechco in Mockups",
        price: 30.0,
        category: "mockups",
        qty: 0,
    },
    {
        id: 6,
        cover: "../../img/1-1-1.jpg",
        title: "Floating 2021 iPhone 12 Mockups (PSD)",
        author: "by Blueskytechco in Mockups",
        price: 30.0,
        category: "mockups",
        qty: 0,
    },
    {
        id: 7,
        cover: "../../img/1-1-1.jpg",
        title: "Floating 2021 iPhone 12 Mockups (PSD)",
        author: "by Blueskytechco in Mockups",
        price: 30.0,
        category: "mockups",
        qty: 0,
    },
    {
        id: 8,
        cover: "../../img/1-1-1.jpg",
        title: "Floating 2021 iPhone 12 Mockups (PSD)",
        author: "by Blueskytechco in Mockups",
        price: 30.0,
        category: "mockups",
        qty: 0,
    },
]

const product = [...new Set(data.map((item) => {return item}))]
// console.log(product)

let i =0;

document.getElementById('root').innerHTML = product.map((item) => {
    var {cover, title, author, price} = item
    return(
        
        `<div class="product__box">
        <div class="product__img">
            <img src=${cover} alt="" />
            <div class="overlay">
                <button class="product__button">
                    <i class="uil uil-shopping-bag"></i>
                </button>
                <button class="product__button">
                    <i class="uil uil-heart"></i>
                </button>
                <button class="product__button">
                    <i class="uil uil-search"></i>
                </button>
            </div>
        </div>
        <div class="product__details">
            <h3>${title}</h3>
            <p>${author}</p>
            <h4>Price : ${price}</h4>
        </div>
    </div>`
    )
}).join('')
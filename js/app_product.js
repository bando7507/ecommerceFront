const navOpen = document.querySelector('.nav__toggle')
const navClose = document.querySelector('.nav__close')
const navMenu = document.querySelector('.nav__menu')
const allLinks = document.querySelectorAll('.nav__item')

const slider = document.querySelector('.slider')
const hero = document.querySelector('.nav__hero')

const select = document.querySelector('.select')


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


////////////////////



const data = [{
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

const product = [...new Set(data.map((item) => {
    return item
}))]

let i = 0;

document.getElementById('root').innerHTML = product.map((item) => {
    var {
        cover,
        title,
        author,
        price,
        id
    } = item
    return (

        `<div class="product__box">
        <div class="product__img">
            <img src=${cover} alt="" />
            <div class="overlay">
                <button class="product__button">
                    <!--<i class="uil uil-shopping-bag" onClick='addCart(${i++})'></i>-->
                    <i class="uil uil-shopping-bag" id="clickAdd"></i>
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


const cart = []
const add = document.querySelectorAll('#clickAdd')


add.forEach((item, index) => {
    item.addEventListener('click', (i) => {
        // cart.push(data[index])
        cart.push({...data[index]})
        document.getElementById('count').innerHTML = `${cart.length}`
        deploy()
        deleteItem()
        // console.log(cart);
    })
})




if (cart.length === 0) {
    document.getElementById('count').innerHTML = `0`
}

// const addCart = (i) => {
//     cart.push(data[i])
//     // console.log(i);
// }


// ////////////////



document.querySelector('.nav__numbers').addEventListener('click', () => {
    select.classList.add('select_show')
})

document.querySelector('.select__close').addEventListener('click', () => {
    select.classList.remove('select_show')
})

const deploy = () => {
    if (cart.length !== 0) {
        // document.getElementById('root2').innerHTML ="vise"
        document.getElementById('root2').innerHTML = cart.map((item) => {
            var {
                cover,
                title,
                author,
                price,
            } = item

            return (
                `
                   <div class="lobox__con">
                    <img src=${cover} alt="">
                    <div class="lobox__content-name">
                        ${title}
                    </div>
                    <div class="lobox__content-price">
                        ${price}
                        <i class="uil uil-trash-alt" id="trash"></i>
                    </div>
                    </div>
                    `
            )
        }).join('')
    }
}


const deleteItem = () => {
    const del = document.querySelectorAll('#trash')

    del.forEach((el, index) => {
        el.addEventListener('click', () => {
            const newell = cart.filter((el, ind) => ind !== index )
            console.log(newell);
            console.log(cart);
        })
    })
}
const navOpen = document.querySelector('.nav__toggle')
const navClose = document.querySelector('.nav__close')
const navMenu = document.querySelector('.nav__menu')
const allLinks = document.querySelectorAll('.nav__item')

const slider = document.querySelector('.slider')
const hero = document.querySelector('.nav__hero')

const select = document.querySelector('.select')
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

window.document.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        head.classList.add('headActive')
    } else {
        head.classList.remove('headActive')
    }
})




////////////////////



const data = [{
        id: 1,
        cover: "../../img/1-1-1.jpg",
        title: "Floating 2021 iPhone 12 Mockups (PSD)",
        author: "by Blueskytechco in Mockups",
        price: 32.0,
        category: "mockups",
        qty: 0,
    },
    {
        id: 2,
        cover: "../../img/1-1-1.jpg",
        title: "Floating 2021 iPhone 12 Mockups (PSD)",
        author: "by Blueskytechco in Mockups",
        price: 10.0,
        category: "mockups",
        qty: 0,
    },
    {
        id: 3,
        cover: "../../img/1-1-1.jpg",
        title: "Floating 2021 iPhone 12 Mockups (PSD)",
        author: "by Blueskytechco in Mockups",
        price: 10876.0,
        category: "mockups",
        qty: 0,
    },
    {
        id: 4,
        cover: "../../img/1-1-1.jpg",
        title: "Floating 2021 iPhone 12 Mockups (PSD)",
        author: "by Blueskytechco in Mockups",
        price: 40.0,
        category: "mockups",
        qty: 0,
    },
    {
        id: 5,
        cover: "../../img/1-1-1.jpg",
        title: "Floating 2021 iPhone 12 Mockups (PSD)",
        author: "by Blueskytechco in Mockups",
        price: 1230.0,
        category: "mockups",
        qty: 0,
    },
    {
        id: 6,
        cover: "../../img/1-1-1.jpg",
        title: "Floating 2021 iPhone 12 Mockups (PSD)",
        author: "by Blueskytechco in Mockups",
        price: 122.0,
        category: "mockups",
        qty: 0,
    },
    {
        id: 7,
        cover: "../../img/1-1-1.jpg",
        title: "Floating 2021 iPhone 12 Mockups (PSD)",
        author: "by Blueskytechco in Mockups",
        price: 299.0,
        category: "mockups",
        qty: 0,
    },
    {
        id: 8,
        cover: "../../img/1-1-1.jpg",
        title: "Floating 2021 iPhone 12 Mockups (PSD)",
        author: "by Blueskytechco in Mockups",
        price: 320.0,
        category: "mockups",
        qty: 0,
    },
]

//////////////////////////////////////////////////////////////////////////////////////////////////

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
                    <i class="uil uil-shopping-bag" onClick='addCart(${id})'></i>
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

//////////////////////////////////////////////////////////////////////////////////////////////////

var cart = []
// const add = document.querySelectorAll('#clickAdd')


const addCart = (i) => {
    // cart.push(data[i])
    // console.log(i);
    data.filter((el, id) => {
        if (el.id === i) {
            cart.push(product[id])
        }
    })

    if (cart.length > 1) {


        const sas = cart.filter((obj, index, self) => 
        self.findIndex(t => t.id === obj.id) === index
        );

        cart = sas.map((ele) =>{
            return ele
        })

    }


    deploy()

    if (cart.length >= 1) {
        document.getElementById('count').innerHTML = `${cart.length}`
    }
}

if (cart.length === 0) {
    document.getElementById('count').innerHTML = `0`
}



//////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector('.nav__numbers').addEventListener('click', () => {
    select.classList.add('select_show')
})

document.querySelector('.select__close').addEventListener('click', () => {
    select.classList.remove('select_show')
})

//////////////////////////////////////////////////////////////////////////////////////////////////


const card_empty = () => {
    document.getElementById('root2').innerHTML = `
        <div>Card Empty</div>
    `
}

card_empty()

const deploy = () => {
    if (cart.length !== 0) {
        document.getElementById('root2').innerHTML = cart.map((item) => {
            var {
                id,
                cover,
                title,
                price,
                qty
            } = item

            return (
                `
                   <div class="lobox__con">
                    <img src=${cover} alt="">
                    <div class="lobox__content-name">
                    <span>Title:</span> ${title}
                    </div>
                    <div class="lobox__content-price">
                    <span>Price:</span> ${price}
                        <i class="uil uil-trash-alt" id="trash" onClick='removeItem(${id})'></i>
                    </div>
                    </div>
                    ${qty}
                    <hr>
                    `
            )
        }).join('')
    }




}

//////////////////////////////////////////////////////////////////////////////////////////////////
const removeItem = (id) => {
    cart = cart.filter((el) => el.id !== id)
    document.getElementById('count').innerHTML = `${cart.length}`

    document.getElementById('root2').innerHTML = cart.map((item) => {
        var {
            id,
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
                    <i class="uil uil-trash-alt" id="trash" onClick='removeItem(${id})'></i>
                </div>
                </div>
                `
        )
    }).join('')

    // card_empty()
}


//////////////////////////////////////////////////////////////////////////////////////////////////

ScrollReveal()
    .reveal('.hero__container', {
        duration: 1000,
        delay: 400,
        distance: "50%",
        origin: "top",
        reset: true
    });

ScrollReveal()
    .reveal('.card_item', {
        duration: 1400,
        delay: 500,
        oppaciy: 0,
        reset: true
    });


ScrollReveal()
    .reveal('.product', {
        duration: 1400,
        delay: 700,
        oppaciy: 0,
        reset: true
    });
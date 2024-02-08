let products = [
    {
        id: 1,
        name: 'Crazy',
        price: 31000,
        amount: 0,
        img: 'images/products/burger-1.png',
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id: 2,
        name: 'Light',
        price: 26000,
        amount: 0,
        img: 'images/products/burger-2.png',
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id: 3,
        name: 'CheeseBurger',
        price: 29000,
        amount: 0,
        img: 'images/products/burger-3.png',
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id: 4,
        name: 'dBurger',
        price: 24000,
        amount: 0,
        img: 'images/products/burger-4.png',
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id: 5,
        name: 'BestBurger',
        price: 50000,
        amount: 0,
        img: 'images/products/best.jpg',
        get totalSum() {
            return this.price * this.amount
        }
    },
    
]

let wrapperList = document.querySelector('.wrapper__list');

// Функция которая выводит в wrapperList на сайт все данные из массива products

function outBurgers() {
    products.forEach(el => {
        let { name, price, img } = el
        wrapperList.innerHTML += `<div class="wrapper__list-card" >
                    <p class="wrapper__list-count"></p>
                    <img class="wrapper__list-image" src="${img}" alt="">
                    <h3 class="wrapper__list-title">${name}</h3>
                    <div class="wrapper__list-sub">
                        <p class="wrapper__list-text">${price} сум</p>
                        <button class="wrapper__list-btn"><img src="images/sell-icon.svg" alt=""></button>
                    </div>
                </div>`
    })
    
}
outBurgers()


let burgersBtn = document.querySelectorAll('.wrapper__list-btn'),
    btnBasket = document.querySelector('.wrapper__navbar-btn'),
    basket    = document.querySelector('.wrapper__navbar-basket'),
    btnClose  = document.querySelector('.wrapper__navbar-close'),
    basketCount = document.querySelector('.warapper__navbar-count'),
    basketTotalPrice = document.querySelector('.wrapper__navbar-totalprice');
    title = document.querySelector('.title');
let korzina = []
    
btnBasket.addEventListener('click', () => basket.classList.add('active'))
btnClose.addEventListener('click', () => basket.classList.remove('active'))


burgersBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        addAmount(btn)
    })
})

// Функция которая будет прибавлять кол-во нашему бургеру на кнопку которого мы нажимаем

function addAmount(btn) {
    // closest() - метод который подключаеться к указаному родителю
    let burgerName = btn.closest('.wrapper__list-card').querySelector('.wrapper__list-title').innerHTML
    let currentBurger = products.find(item => item.name ==  burgerName)
  
    if(currentBurger.amount < 10) {
        currentBurger.amount++
    }
   
    addToKorzina(currentBurger)
}


function addToKorzina(currentBurger) {
    if(currentBurger.amount > 0) {
        if(!korzina.includes(currentBurger)) {
            korzina.push(currentBurger)
        }
    }
    outAmountAndSum()
    
}


function outAmountAndSum() {
    
    basketTotalPrice.innerHTML = getTotalSum()
    let allAmount = getTotalAmount()
    if(allAmount > 0) {
        basketCount.classList.add('active')
        basketCount.innerHTML = allAmount
    }else {
        basketCount.classList.remove('active')
        basketCount.innerHTML = ''
    }
    
}

function getTotalAmount() {
    let sum = products.reduce((acc, item) => acc + item.amount,0)
    return sum    
}
function getTotalSum() {
    let sum = products.reduce((acc, item) => acc + item.totalSum,0)
    return sum + ' сумм'
}

let currentLevel = 0;

function increaseLevel() {
    currentLevel++;
    if (currentLevel >= 100) {
        title.innerHTML = "100lvl";
        title.style.fontSize = "50px"
    } else {
        title.innerHTML = currentLevel;
        title.style.fontSize = "24px";
    }
}

setInterval(() => {
    increaseLevel();
}, 1000);





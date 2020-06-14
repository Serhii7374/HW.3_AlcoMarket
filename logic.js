let startBalance = 2000; //  баланс коштів
let startBeer = 100;     //  кількість пива
let startVine = 100;     //  кількість вина
let startPepsi = 100;    //  кількість пепсі

const price = [     //  масив обєктів (корзина куди ми складаємо товар перед покупкою)
    {
        name: 'Пиво',
        price: 30,
        count: 0
    },
    {
        name: 'Вино',
        price: 100,
        count: 0
    },
    {
        name: 'Пепсі',
        price: 20,
        count: 0
    }
];

// фукції для перевірки наявності потрібної кількості товару на складі
function selectBeer(count) {    
    if (startBeer < count) {
        return `Sorry we do not have enough Beer`
    } else return +count
}
function selectVine(count) {
    if (startVine < count) {
        return `Sorry we do not have enough Vine`
    } else return +count
}
function selectPepsi(count) {
    if (startPepsi < count) {
        return `Sorry we do not have enough Pepsi`
    } else return +count
}

// функції для покупки товару, які віднімають придбаний товар зі складу і добавляє його в корзину
function sellBeer(count) {
    startBeer -= count;
    price[0].count = count
}
function sellVine(count) {
    startVine -= count;
    price[1].count = count
}
function sellPepsi(count) {
    startPepsi -= count;
    price[2].count = count
}

function totalPrice() { // функція для підрахунку вартості вибраного товару в корзині
    let total = price.reduce((sum, product) => sum + product.price * product.count, 0);
    startBalance += total;
    return total
}

// експортуєм базу данних
export { startBalance, startBeer, startVine, startPepsi, price };

// експортуєм функції
export { selectBeer, selectVine, selectPepsi, sellBeer, sellVine, sellPepsi, totalPrice }
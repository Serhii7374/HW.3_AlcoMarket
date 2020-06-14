import * as shop from './logic.js';
const getS = selector => document.querySelector(selector);
let number = getS('#number');
let beerId = getS('#beer');
let vineId = getS('#vine');
let pepsiId = getS('#pepsi');
let basket = getS('.basket');
let score = getS('.score');

// вивід інформації з бази данних в форму
getS('.balance').value = shop.startBalance + ' грн.';
getS('.startBeer').value = shop.startBeer + ' шт.';
getS('.startVine').value = shop.startVine + ' шт.';
getS('.startPepsi').value = shop.startPepsi + ' шт.';

// кнопка "додати" перевіряє вибраний радіо баттон і генерується відповідна дівка
// з назвою і кількістю товару
getS('#add').onclick = function selectGoods() {
    if (beerId.checked && number.value) {
        if (typeof shop.selectBeer(number.value) === 'string') {
            alert(`${shop.selectBeer(number.value)}`)
        } else {
            let div = `<div class="selectBox">Пиво:<p class="beerValue">${number.value} шт.</p></div>`;
            basket.innerHTML += div;
        }
    };
    if (vineId.checked && number.value) {
        if (typeof shop.selectVine(number.value) === 'string') {
            alert(`${shop.selectVine(number.value)}`)
        } else {
            let div = `<div class="selectBox">Вино:<p class="vineValue">${number.value} шт.</p></div>`;
            basket.innerHTML += div;
        }
    };
    if (pepsiId.checked && number.value) {
        if (typeof shop.selectPepsi(number.value) === 'string') {
            alert(`${shop.selectPepsi(number.value)}`)
        } else {
            let div = `<div class="selectBox">Пепсі:<p class="pepsiValue">${number.value} шт.</p></div>`;
            basket.innerHTML += div;
        }
    };
};

// кнопка "купити" звязує модуль логіки з розміткою

getS('#pay').onclick = function pay() {
    score.innerHTML = ""; //очистка нашої корзини від попередніх покупок

    if (getS('.beerValue')) {
        shop.sellBeer(parseInt(getS('.beerValue').textContent))
        getS('.startBeer').value = shop.startBeer  + ' шт.';
    } else { shop.price[0].count = 0 };

    if (getS('.vineValue')) {
        shop.sellVine(parseInt(getS('.vineValue').textContent))
        getS('.startVine').value = shop.startVine  + ' шт.';
    } else { shop.price[1].count = 0 };

    if (getS('.pepsiValue')) {
        shop.sellPepsi(parseInt(getS('.pepsiValue').textContent))
        getS('.startPepsi').value = shop.startPepsi  + ' шт.';
    } else { shop.price[2].count = 0 };

    score.innerHTML += basket.innerHTML;    
    score.innerHTML += `<div class="selectBox">Всього:<p class="total">${shop.totalPrice()} гривень</p></div>`;
    getS('.balance').value = shop.startBalance  + ' грн.';
        
    basket.innerHTML = ""; //очистка дівки від попередніх вибраних товарів
}
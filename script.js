"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 66;
let serviceAdd1 = prompt("Какой дополнительный тип услуги нужен?");
let serviceAddPrice1 = +prompt("Сколько это будет стоить?");
let serviceAdd2 = prompt("Какой дополнительный тип услуги нужен?");
let serviceAddPrice2 = +prompt("Сколько это будет стоить?");
let fullPrice;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let servicePercentPrice;
let allServicePrices;

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даем скидку в 10%'
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%"
    } else if (price < 15000 && price >= 0) {
        return "Скидка не предусмотрена"
    } else {
        return "Что то пошло не так"
    }

}

const getAllServicePrices = function (serviceAddPrice1, serviceAddPrice2) {
    allServicePrices = serviceAddPrice1 + serviceAddPrice2
}

const getTitle = function (title) {
    title = title[0].trim() + title.slice(1).toLowerCase()
    return title[0].trim().toUpperCase() + title.slice(1).toLowerCase()
}

const getServicePercentPrices = function (fullPrice, rollback) {
    return servicePercentPrice = fullPrice - (fullPrice * (rollback / 100))
}

function getFullPrice(screenPrice, allServicePrices) {
    fullPrice = screenPrice + allServicePrices
}
showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

getAllServicePrices(serviceAddPrice1, serviceAddPrice2)
getFullPrice(screenPrice, allServicePrices)
getTitle(title)
getServicePercentPrices(fullPrice, rollback)

console.log(screens.toLowerCase().split(", "))
console.log(getRollbackMessage(fullPrice))
console.log("Итого: " + Math.ceil(getServicePercentPrices(fullPrice, rollback)) + " рублей");

console.log(getTitle(title));
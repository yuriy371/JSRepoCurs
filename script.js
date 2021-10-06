"use strict";

let title = prompt("Как называется ваш проект?", "калькулятор верстки");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "15000");
// let serviceAdd1 = prompt("Какой дополнительный тип услуги нужен?");
// let serviceAddPrice1 = +prompt("Сколько это будет стоить?");
// let serviceAdd2 = prompt("Какой дополнительный тип услуги нужен?");
// let serviceAddPrice2 = +prompt("Сколько это будет стоить?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let rollback = 66;
let fullPrice;
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

const getAllServicePrices = function () {
    let sum = 0
    for (let i = 0; i < 2; i++) {
        sum += +prompt("Сколько это будет стоить?", "15000")
    }

    return sum
    // allServicePrices = serviceAddPrice1 + serviceAddPrice2
}

const getTitle = function () {
    title = title[0].trim() + title.slice(1).toLowerCase()
    return title[0].trim().toUpperCase() + title.slice(1).toLowerCase()
}

const getServicePercentPrices = function () {
    return servicePercentPrice = fullPrice - (fullPrice * (rollback / 100))
}

function getFullPrice() {
    return fullPrice = screenPrice + allServicePrices
}
showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
title = getTitle()
servicePercentPrice = getServicePercentPrices()

console.log('allServicePrices', allServicePrices);

console.log(screens.toLowerCase().split(", "))
console.log(getRollbackMessage(fullPrice))
console.log("Итого: " + Math.ceil(getServicePercentPrices()) + " рублей");

console.log(getTitle(title));
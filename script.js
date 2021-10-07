"use strict";

let title
let screens
let screenPrice
let adaptive
let rollback = 66;
let serviceAdd1;
let serviceAdd2;
let fullPrice;
let servicePercentPrice;
let allServicePrices;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt("Как называется ваш проект?", "калькулятор верстки")
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")

    do {
        screenPrice = prompt("Сколько будет стоить данная работа?", "  15000")
        screenPrice = (typeof screenPrice === "string") ? +screenPrice : screenPrice
    } while (!isNumber(screenPrice))

    adaptive = confirm("Нужен ли адаптив на сайте?")
}

const showTypeOf = function (val) {
    console.log(val, typeof val);
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
        if (i === 0) {
            serviceAdd1 = prompt("Какой дополнительный тип услуги нужен?", "asd")
        } else if (i === 1) {
            serviceAdd2 = prompt("Какой дополнительный тип услуги нужен?", "asd")
        }

        let sumPrice

        while (!isNumber(sumPrice)) {
            sumPrice = prompt("Сколько это будет стоить?", "15000")
            sumPrice = (typeof sumPrice === "string") ? +sumPrice : sumPrice
        }

        sum += sumPrice
    }

    return sum
}

const getTitle = function () {
    title = title[0].trim() + title.slice(1).toLowerCase()
    return title[0].trim().toUpperCase() + title.slice(1).toLowerCase()
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100))
}

function getFullPrice() {
    return +screenPrice + allServicePrices
}

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
title = getTitle()
servicePercentPrice = getServicePercentPrices()

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log('allServicePrices', allServicePrices);

console.log(screens.toLowerCase().split(", "))
console.log(getRollbackMessage(fullPrice))
console.log("Итого: " + Math.ceil(getServicePercentPrices()) + " рублей");
"use strict";

let appData = {
    title: "",
    screens: "",
    screenPrice: 0,
    adaptive: true,
    rollback: 66,
    serviceAdd1: "",
    serviceAdd2: "",
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    start: function () {
        appData.asking()
        appData.allServicePrices = appData.getAllServicePrices()
        appData.fullPrice = appData.getFullPrice()
        appData.title = appData.getTitle()
        appData.servicePercentPrice = appData.getServicePercentPrices()
        appData.logger()
    },
    logger: function () {
        console.log("Название проекта: " + appData.title);
        console.log("Полная цена: " + appData.fullPrice);
        console.log(appData.getRollbackMessage(appData.fullPrice));
        for (let key in appData) {
            console.log("Свойства и методы объекта: " + key);
        }
    },
    asking: function () {
        appData.title = prompt("Как называется ваш проект?", "калькулятор верстки")
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")

        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?", "15000")
            appData.screenPrice = (typeof appData.screenPrice === "string") ? +appData.screenPrice : appData.screenPrice
        } while (!appData.isNumber(appData.screenPrice))

        appData.adaptive = confirm("Нужен ли адаптив на сайте?")
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    getAllServicePrices: function () {
        let sum = 0

        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.serviceAdd1 = prompt("Какой дополнительный тип услуги нужен?", "asd")
            } else if (i === 1) {
                appData.serviceAdd2 = prompt("Какой дополнительный тип услуги нужен?", "asd")
            }

            let sumPrice

            while (!appData.isNumber(sumPrice)) {
                sumPrice = prompt("Сколько это будет стоить?", "15000")
                sumPrice = (typeof sumPrice === "string") ? +sumPrice : sumPrice
            }

            sum += sumPrice
        }

        return sum
    },
    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return 'Даем скидку в 10%'
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%"
        } else if (price < 15000 && price >= 0) {
            return "Скидка не предусмотрена"
        } else {
            return "Что то пошло не так"
        }
    },
    getTitle: function () {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
    }
}

appData.start()
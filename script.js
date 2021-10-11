"use strict";

let appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 66,
    servicesAdd: {},
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    start: function () {
        appData.asking()
        appData.addPrices()
        appData.getFullPrice()
        appData.getTitle()
        appData.getServicePercentPrices()
        appData.logger()
    },
    logger: function () {
        console.log("Название проекта: " + appData.title);
        console.log("Полная цена: " + appData.fullPrice);
        console.log(appData.getRollbackMessage(appData.fullPrice));
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
        console.log(appData.servicesAdd);
        // for (let key in appData) {
        //     console.log("Свойства и методы объекта: " + key);
        // }
    },
    asking: function () {
        while (appData.isString(appData.title)) {
            appData.title = prompt("Как называется ваш проект?", "калькулятор верстки")
        }

        for (let i = 0; i < 2; i++) {
            let name 
            let price = 0

            do {
                name = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")
            } while (appData.isString(name));

            do {
                price = prompt("Сколько будет стоить данная работа?", "15000")
                price = (typeof price === "string") ? +price : price
            } while (!appData.isNumber(price))

            appData.screens.push({ id: i, name: name, price: price })
        }

        for (let i = 0; i < 2; i++) {
            let name 
            let price = 0
            
            do {
                name = prompt("Какой дополнительный тип услуги нужен?", "asd")
            } while (appData.isString(name));

            do {
                price = prompt("Сколько это будет стоить?", "15000")
                price = (typeof price === "string") ? +price : price
            } while (!appData.isNumber(price))

            appData.servicesAdd[name + i] = +price
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?")
    },
    addPrices: function () {
        appData.screenPrice = appData.screens.reduce(function (sum, cur) {
            return sum.price + cur.price
        })

        for (let key in appData.servicesAdd) {
            appData.allServicePrices += appData.servicesAdd[key]
        }
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    isString: function (str) {
        return !isNaN(str)
    },
    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
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
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
    }
}

appData.start()
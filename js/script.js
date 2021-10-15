"use strict";

let titleSite = document.getElementsByTagName("h1")[0]
let calculate = document.getElementsByClassName("handler_btn")[0]
let reset = document.getElementsByClassName("handler_btn")[1]
let plus = document.querySelector(".screen-btn")
let percent = document.querySelectorAll(".other-items.percent")
let number = document.querySelectorAll(".other-items.number")
let rollbackInput = document.querySelector(".rollback [type='range']")
let rollbackSpan = document.querySelector(".rollback .range-value")

let totalCost = document.getElementsByClassName("total-input")[0]
let totalScreens = document.getElementsByClassName("total-input")[1]
let totalCostServices = document.getElementsByClassName("total-input")[2]
let totalFullCost = document.getElementsByClassName("total-input")[3]
let totalCostRollback = document.getElementsByClassName("total-input")[4]

let screens = document.querySelectorAll(".screen")
let screensAll = document.querySelector("div.main-controls__views")

let appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 66,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicesPercent: {},
    servicesNumber: {},
    totalScreen: 0,
    init: function () {
        appData.addTitle()
        calculate.addEventListener('click', appData.start)
        plus.addEventListener("click", appData.addScerenBlock)
        rollbackInput.addEventListener("click", appData.checkRollback)

        screensAll.addEventListener("change", appData.checkScreens)

        calculate.disabled = "disabled"
    },
    addTitle: function () {
        document.title = titleSite.textContent
    },
    start: function () {
        appData.addScreens()
        appData.addServices()

        appData.addPrices()

        // appData.logger()
        appData.showResult()
    },
    showResult: function () {
        totalCost.value = appData.screenPrice
        totalCostServices.value = appData.servicePricesPercent + appData.servicePricesNumber
        totalFullCost.value = appData.fullPrice
        totalCostRollback.value = appData.servicePercentPrice
        totalScreens.value = appData.totalScreen
    },
    checkRollback: function () {
        rollbackSpan.innerHTML = rollbackInput.value + "%"
        appData.rollback = +rollbackInput.value
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
        totalCostRollback.value = appData.servicePercentPrice
    },
    checkScreens: function () {
        screens = document.querySelectorAll(".screen")
        let arrInp = []
        let arrSel = []

        let inputCheck = document.querySelectorAll("div.main-controls__input > input")
        let selectCheck = document.querySelectorAll("div.main-controls__select > select")

        for (let inp of inputCheck) {
            if (inp.value == "") {
                arrInp.push(inp.value)
            }
        }

        for (let sel of selectCheck) {
            if (sel.value == "") {
                arrSel.push(sel.value)
            }
        }

        if (arrInp.length >= 2 || arrSel.length >= 2) {
            calculate.disabled = "disabled"
        } else {
            calculate.disabled = ""
        }
    },
    
    addScreens: function () {
        screens = document.querySelectorAll(".screen")

        screens.forEach(function (screen, index) {
            let select = screen.querySelector("select")
            let input = screen.querySelector("input")
            let selectName = select.options[select.selectedIndex].textContent

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            })
        })
    },
    addServices: function () {
        percent.forEach(function (item) {
            let check = item.querySelector("input[type=checkbox]")
            let label = item.querySelector("label")
            let input = item.querySelector("input[type=text]")

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }
        })

        number.forEach(function (item) {
            let check = item.querySelector("input[type=checkbox]")
            let label = item.querySelector("label")
            let input = item.querySelector("input[type=text]")

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }
        })
    },
    addScerenBlock: function () {
        screens = document.querySelectorAll(".screen")

        let cloneScreen = screens[0].cloneNode(true)

        screens[screens.length - 1].after(cloneScreen)
    },
    addPrices: function () {
        appData.screenPrice = appData.screens.reduce(function (sum, cur) {
            return sum + cur.price
        }, 0)

        appData.totalScreen = appData.screens.reduce(function (sum, cur) {
            return sum + cur.count
        }, 0)

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += +appData.screenPrice * (appData.servicesPercent[key] / 100)
        }

        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    logger: function () {
        // console.log("Название проекта: " + appData.title);
        // console.log("Полная цена: " + appData.fullPrice);
        // console.log(appData.getRollbackMessage(appData.fullPrice));
        // console.log(appData.servicePercentPrice);
        // console.log(appData);
        console.log(appData.screens);
        // console.log(appData.totalNumberScreen);
        // console.log(appData.screenPrice);
        // for (let key in appData) {
        //     console.log("Свойства и методы объекта: " + key);
        // }
    },
}

appData.init()
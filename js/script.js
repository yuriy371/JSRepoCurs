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
let screenPerNum = [...percent, ...number]

let lockInput = document.querySelectorAll("input[type=text]")
let lockSelect = document.querySelectorAll("select")

let appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicesPercent: {},
    servicesNumber: {},
    totalScreen: 0,
    init: function () {
        this.addTitle()
        calculate.addEventListener('click', appData.start.bind(appData))
        reset.addEventListener("click", appData.reset.bind(appData))
        plus.addEventListener("click", this.addScerenBlock)
        rollbackInput.addEventListener("input", appData.checkRollback.bind(appData))

        screensAll.addEventListener("change", this.checkScreens)

        calculate.disabled = "disabled"

    },
    addTitle: function () {
        document.title = titleSite.textContent
    },
    start: function () {
        this.addScreens()
        this.addServices()

        this.addPrices()
        this.showResult()
        this.lockFields()

        // this.logger()
    },
    reset: function () {
        this.clearTotal()
        this.clearScreen()
        this.clearRollback()
        this.clearVlue()
    },
    clearTotal: function () {
        totalCost.value = 0
        totalScreens.value = 0
        totalCostServices.value = 0
        totalFullCost.value = 0
        totalCostRollback.value = 0
    },
    clearScreen: function () {
        screens.forEach((screen, index) => {
            let select = screen.querySelector("select")
            let input = screen.querySelector("input")
            select.disabled = ""
            input.disabled = ""
            select.value = ""
            input.value = ""

            if (index > 0) {
                screen.remove()
            }
        })

        screenPerNum.forEach((inputBox) => {
            let input = inputBox.querySelector("input")

            input.disabled = ""
            input.checked = false
        })

        calculate.style.display = "flex"
        reset.style.display = "none"
        calculate.disabled = "disabled"
    },
    clearRollback: function () {
        rollbackInput.value = 0
        rollbackSpan.innerHTML = rollbackInput.value + "%"
    },
    clearVlue: function () {
        this.screens = []
        this.screenPrice = 0
        this.adaptive = true
        this.rollback = 0
        this.fullPrice = 0
        this.servicePercentPrice = 0
        this.servicePricesPercent = 0
        this.servicePricesNumber = 0
        this.servicesPercent = {}
        this.servicesNumber = {}
        this.totalScreen = 0
    },
    showResult: function () {
        totalCost.value = this.screenPrice
        totalCostServices.value = this.servicePricesPercent + this.servicePricesNumber
        totalFullCost.value = this.fullPrice
        totalCostRollback.value = this.servicePercentPrice
        totalScreens.value = this.totalScreen
    },
    checkRollback: function () {
        rollbackSpan.innerHTML = rollbackInput.value + "%"
        this.rollback = +rollbackInput.value
        this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100))
        totalCostRollback.value = this.servicePercentPrice
    },
    lockFields: function () {
        screens.forEach((screen) => {
            let select = screen.querySelector("select")
            let input = screen.querySelector("input")

            select.disabled = "disabled"
            input.disabled = "disabled"
        })

        screenPerNum.forEach((inputBox) => {
            let input = inputBox.querySelector("input")

            input.disabled = "disabled"
        })

        calculate.style.display = "none"
        reset.style.display = "flex"
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

        screens.forEach((screen, index) => {
            let select = screen.querySelector("select")
            let input = screen.querySelector("input")
            let selectName = select.options[select.selectedIndex].textContent

            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            })
        })
    },
    addServices: function () {
        percent.forEach((item) => {
            let check = item.querySelector("input[type=checkbox]")
            let label = item.querySelector("label")
            let input = item.querySelector("input[type=text]")

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value
            }
        })

        number.forEach((item) => {
            let check = item.querySelector("input[type=checkbox]")
            let label = item.querySelector("label")
            let input = item.querySelector("input[type=text]")

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value
            }
        })
    },
    addScerenBlock: function () {
        screens = document.querySelectorAll(".screen")

        let cloneScreen = screens[0].cloneNode(true)

        screens[screens.length - 1].after(cloneScreen)
    },
    addPrices: function () {
        this.screenPrice = this.screens.reduce((sum, cur) => {
            return sum + cur.price
        }, 0)

        this.totalScreen = this.screens.reduce((sum, cur) => {
            return sum + cur.count
        }, 0)

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key]
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent += +this.screenPrice * (this.servicesPercent[key] / 100)
        }

        this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent
        this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100))
    },
    logger: function () {
        console.log(this);
    },
}

appData.init()
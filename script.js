"use strict"

let namePers = document.getElementById("name")
let surname = document.getElementById("surname")
let age = document.getElementById("age")
let position = document.getElementById("position")
let organization = document.getElementById("organization")
let category = document.getElementById("discharge")
let presenceChildren = document.getElementById("presence-children")
let dateEmployment = document.getElementById("date-hiring")
let btnSave = document.getElementById("btn-save")
let btnRemove = document.getElementById("btn-del")
let tbody = document.querySelector(".tbody")
let inputInf = document.querySelectorAll(".input-inf")
let selectInf = document.querySelectorAll(".select-inf")
let all = [...inputInf, ...selectInf]
let personData = []
let stringTr

class Worker {
    isError = false
    names = namePers
    constructor(name, surname, age) {
        this.name = name.value
        this.surname = surname.value
        this.age = age.value
    }
    checkInput() {
        all.forEach(input => {
            if (input.value === "") {
                this.isError = true
            }
        })

        if (!this.isError) {
            this.record()
        } else {
            alert("Заполните все поля")
        }
    }
    checkStor() {
        if (!!localStorage.getItem("personData")) {
            personData = JSON.parse(localStorage.getItem("personData"))
            this.render()
        } else {
            this.locStorSet()
        }
    }
    record() {
        let persInfo = {
            name: this.name,
            surname: this.surname,
            age: this.age,
            position: this.position,
            organization: this.organization,
            category: this.category,
            presenceChildren: this.presenceChildren,
            dateEmployment: this.dateEmployment,
        }

        if (!this.isError) {
            namePers.value = ""
            surname.value = ""
            age.value = ""
            position.value = ""
            organization.value = ""
            category.value = ""
            presenceChildren.checked = false
            dateEmployment.value = ""

            personData.push(persInfo)
            this.render()
        }

        this.locStorSet()
    }
    render() {
        tbody.innerHTML = ""

        personData.forEach((item, index) => {
            stringTr = document.createElement("tr")

            stringTr.classList.add("str")
            stringTr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.surname}</td>
            <td>${item.age}</td>
            <td>${item.position}</td>
            <td>${item.organization}</td>
            <td>${item.category}</td>
            <td>${item.presenceChildren}</td>
            <td>${item.dateEmployment}</td>
            <td><button class="btn-del">Удалить</button></td>
            `
            tbody.append(stringTr)
            this.setDel(index)
        })
        this.locStorSet()
    }
    setDel(index) {
        stringTr.querySelector(".btn-del").addEventListener("click", () => {
            personData.splice(index, 1)
            this.render()
        })
    }
    locStorSet() {
        localStorage.setItem("personData", JSON.stringify(personData))
    }
    get() {

    }
    set() {

    }
}

class Locksmith extends Worker {
    constructor(namePers, surname, age, position, organization, category, presenceChildren, dateEmployment) {
        super(namePers, surname, age, position, organization, category, presenceChildren, dateEmployment)
        this.position = position.options[position.selectedIndex].text
        this.organization = organization.value
        this.category = category.value
        this.presenceChildren = presenceChildren.checked ? "есть" : "нет"
        this.dateEmployment = dateEmployment.value
    }
    get() {

    }
    set() {

    }
}
class Driver extends Worker {
    constructor(namePers, surname, age, position, organization, category, presenceChildren, dateEmployment) {
        super(namePers, surname, age, position, organization, category, presenceChildren, dateEmployment)
        this.position = position.options[position.selectedIndex].text
        this.organization = organization.value
        this.category = category.value
        this.presenceChildren = presenceChildren.checked ? "есть" : "нет"
        this.dateEmployment = dateEmployment.value
    }
    get() {

    }
    set() {

    }
}
class Plumber extends Worker {
    constructor(namePers, surname, age, position, organization, category, presenceChildren, dateEmployment) {
        super(namePers, surname, age, position, organization, category, presenceChildren, dateEmployment)
        this.position = position.options[position.selectedIndex].text
        this.organization = organization.value
        this.category = category.value
        this.presenceChildren = presenceChildren.checked ? "есть" : "нет"
        this.dateEmployment = dateEmployment.value
    }
    get() {

    }
    set() {

    }
}
class Electrician extends Worker {
    constructor(namePers, surname, age, position, organization, category, presenceChildren, dateEmployment) {
        super(namePers, surname, age, position, organization, category, presenceChildren, dateEmployment)
        this.position = position.options[position.selectedIndex].text
        this.organization = organization.value
        this.category = category.value
        this.presenceChildren = presenceChildren.checked ? "есть" : "нет"
        this.dateEmployment = dateEmployment.value
    }
    get() {

    }
    set() {

    }
}
class Welder extends Worker {
    constructor(namePers, surname, age, position, organization, category, presenceChildren, dateEmployment) {
        super(namePers, surname, age, position, organization, category, presenceChildren, dateEmployment)
        this.position = position.options[position.selectedIndex].text
        this.organization = organization.value
        this.category = category.value
        this.presenceChildren = presenceChildren.checked ? "есть" : "нет"
        this.dateEmployment = dateEmployment.value
    }
    get() {

    }
    set() {

    }
}

let worker = new Worker(namePers, surname, age, position, organization, category, presenceChildren, dateEmployment)

btnSave.addEventListener("click", (e) => {
    e.preventDefault()

    if (position.value === "Locksmith") {
        let locksmith = new Locksmith(namePers, surname, age, position, organization, category, presenceChildren, dateEmployment)
        locksmith.checkInput()
    } else if (position.value === "Driver") {
        let driver = new Driver(namePers, surname, age, position, organization, category, presenceChildren, dateEmployment)
        driver.checkInput()
    } else if (position.value === "Plumber") {
        let plumber = new Plumber(namePers, surname, age, position, organization, category, presenceChildren, dateEmployment)
        plumber.checkInput()
    } else if (position.value === "Electrician") {
        let electrician = new Electrician(namePers, surname, age, position, organization, category, presenceChildren, dateEmployment)
        electrician.checkInput()
    } else if (position.value === "Welder") {
        let welder = new Welder(namePers, surname, age, position, organization, category, presenceChildren, dateEmployment)
        welder.checkInput()
    } else {
        // let worker = new Worker(namePers, surname, age, position, organization, category, presenceChildren, dateEmployment)
        worker.checkInput()
    }
})
worker.checkStor()

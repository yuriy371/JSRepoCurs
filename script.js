"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 66;
let serviceAdd1 = prompt("Какой дополнительный тип услуги нужен?");
let serviceAddPrice1 = +prompt("Сколько это будет стоить?");
let serviceAdd2 = prompt("Какой дополнительный тип услуги нужен?");
let serviceAddPrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = screenPrice + serviceAddPrice1 + serviceAddPrice2;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let servicePercentPrice = fullPrice - (fullPrice * (rollback/100));

// alert("VS Code");
// console.log('VS Code');

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани");
console.log("Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани");
console.log(screens.toLowerCase().split(", "));
console.log("Процент отката посреднику за работу " + (fullPrice * (rollback/100)));
console.log("Итого: " + Math.ceil(servicePercentPrice) + " рублей");

if (fullPrice >= 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice >= 0) {
    console.log("Скидка не предусмотрена");
} else {
    console.log("Что то пошло не так");
}
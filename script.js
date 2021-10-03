let title = "JS";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 35;
let rollback = 66;
let fullPrice = 500000;
let adaptive = true;

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
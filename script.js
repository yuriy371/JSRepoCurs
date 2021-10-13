"use strict"

let books = document.querySelector(".books")
let book = document.querySelectorAll(".book")
let image = document.querySelector("body")
let heading3 = document.querySelectorAll("[target='_blank']")[4]
let adv = document.querySelector(".adv")
let bookTwo = book[0].querySelector(".book > ul")
let bookTwoLi = bookTwo.querySelectorAll("li")
let bookFive = book[5].querySelector(".book > ul")
let bookFiveLi = bookFive.querySelectorAll("li")
let bookSix = book[2].querySelector(".book > ul")
let bookSixLi = bookSix.querySelectorAll("li")
let liLast = document.createElement('li');
liLast.innerHTML = 'Глава 8: За пределами ES6';

books.prepend(book[1], book[0], book[4], book[3], book[5])
image.style.backgroundImage = "url('image/you-dont-know-js.jpg')"
heading3.innerHTML = "Книга 3. this и Прототипы Объектов"
adv.remove()
bookTwo.prepend(bookTwoLi[0], bookTwoLi[1], bookTwoLi[3], bookTwoLi[6], bookTwoLi[8], bookTwoLi[4], bookTwoLi[5], bookTwoLi[7], bookTwoLi[9])
bookFive.prepend(bookFiveLi[0], bookFiveLi[1], bookFiveLi[9], bookFiveLi[3], bookFiveLi[4], bookFiveLi[2], bookFiveLi[6], bookFiveLi[7])
bookSix.append(liLast, bookSixLi[9])
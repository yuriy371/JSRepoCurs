"use strict";

let randomNum

function hiddenNum() {
    randomNum = Math.ceil(Math.random()*100)
    console.log(randomNum);
}
function  tryToGuess() {
    let question = +prompt("Угадай число от 1 до 100")
    console.log(question);
}

hiddenNum()
tryToGuess()

console.log(randomNum);
// console.log(Math.ceil(Math.random()*100));
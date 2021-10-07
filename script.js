"use strict";

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

function hiddenNum() {
    let randomNum = Math.ceil(Math.random() * 100)

    function tryToGuess() {
        let question = prompt("Угадай число от 1 до 100")

        if (isNumber(question)) {
            question = +question
            if (randomNum < question) {
                alert("Загаданное число меньше");
                tryToGuess()
            } else if (randomNum > question) {
                alert("Загаданное число больше");
                tryToGuess()
            } else if (randomNum == question) {
                alert("Поздравляю, Вы угадали!!!")
            } else {
                alert("Что ты сделал???")
            }
        } else {
            if (question === null) {
                alert("Игра окончена")
            } else {
                alert("Введи число!");
                tryToGuess()
            }

        }
    }
    tryToGuess()
}

hiddenNum()
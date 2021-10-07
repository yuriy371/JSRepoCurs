"use strict";

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

function hiddenNum() {
    let randomNum = Math.ceil(Math.random() * 100)
    let numAttempts = 10

    function tryToGuess() {
        let question = prompt("Угадай число от 1 до 100")
        let replay

        function attempts() {
            return --numAttempts
        }

        if (isNumber(question)) {
            question = +question
            if (numAttempts > 1) {
                if (randomNum < question) {
                    alert("Загаданное число меньше, осталось попыток " + attempts());
                    console.log(randomNum, question);
                    tryToGuess()
                } else if (randomNum > question) {
                    alert("Загаданное число больше, осталось попыток " + attempts());
                    console.log(randomNum, question);
                    tryToGuess()
                } else if (randomNum == question) {
                    replay = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")

                    if (replay === true) {
                        hiddenNum()
                    } else {
                        alert("Спасибо за игру!")
                    }
                } else {
                    alert("Что ты сделал???")
                }
            } else {
                replay = confirm("Попытки закончились, хотите сыграть еще?")

                if (replay === true) {
                    hiddenNum()
                } else {
                    alert("Спасибо за игру!")
                }
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
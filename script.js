"use strict"

let btn = document.getElementById("btn")
let eBtn = document.getElementById("e_btn")
let square = document.getElementById("square")
let inputRange = document.getElementById("range")
let circle = document.getElementById("circle")

let inputText = function () {
    let inputTex = document.getElementById("text").value
    square.style.backgroundColor = inputTex
    document.getElementById("text").value = ""
}

let range = function () {
    circle.style.width = inputRange.value + "%"
    circle.style.height = inputRange.value + "%"
}

eBtn.style.display = "none"

btn.addEventListener("click", inputText)
inputRange.addEventListener("click", range)
"use strict"

let todoControl = document.querySelector(".todo-control")
let headerInput = document.querySelector(".header-input")
let todoList = document.querySelector(".todo-list")
let todoCompleted = document.querySelector(".todo-completed")

let toDoData = []
// let toDoData = (!!localStorage.getItem("ToDoList")) ? localStorage.setItem("ToDoList", JSON.stringify([])) : JSON.parse(localStorage.getItem("ToDoList"))

let render = function () {
    todoList.innerHTML = ""
    todoCompleted.innerHTML = ""

    toDoData.forEach(function (item, index) {
        let newLi = document.createElement("li")

        newLi.classList.add("todo-item")
        newLi.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            ' <div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>'

        if (item.completed) {
            todoCompleted.append(newLi)
        } else {
            todoList.append(newLi)
        }

        newLi.querySelector(".todo-complete").addEventListener('click', function () {
            item.completed = !item.completed
            render()
        })

        newLi.querySelector(".todo-remove").addEventListener('click', function () {
            toDoData.splice(index, 1)
            render()
        })

    })
    locStorSet()
}

let locStorSet = function () {
    return localStorage.setItem("ToDoList", JSON.stringify(toDoData))
}

// let locStorGet = function () {
//     return localStorage.getItem("ToDoList")
// }

todoControl.addEventListener("submit", function (e) {
    e.preventDefault()

    let newToDo = {
        text: headerInput.value,
        completed: false,
    }
    if (newToDo.text === "") {
        alert("Введите задачу")
    } else {
        headerInput.value = ""

        toDoData.push(newToDo)
        render()
    }
    locStorSet()
})

if (!!localStorage.getItem("ToDoList")) {
    toDoData = JSON.parse(localStorage.getItem("ToDoList"))
    render()
} else {
    locStorSet()
}

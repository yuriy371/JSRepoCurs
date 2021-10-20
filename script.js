"use strict"

document.addEventListener("DOMContentLoaded", () => {
    let div
    let topPos = 0
    let leftPos = 0

    document.addEventListener("keydown", keyDown)

    function keyDown(e) {
        if (e.key === "ArrowUp") {
            topPos -= 10;
            div.style.top = `${topPos}px`
        }
        if (e.key === "ArrowDown") {
            topPos += 10;
            div.style.top = `${topPos}px`
        }
        if (e.key === "ArrowLeft") {
            leftPos -= 10;
            div.style.left = `${leftPos}px`
        }
        if (e.key === "ArrowRight") {
            leftPos += 10;
            div.style.left = `${leftPos}px`
        }
    }

    function DomElement(height, width, bg, position) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.position = position;

        this.createElem = function () {
            div = document.createElement('div');
            div.className = 'block';
            div.style.cssText = `
            height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg};
            position: ${this.position};`
            document.body.append(div)
        }
    }

    let creatDom = new DomElement(100, 100, 'green', 'absolute')
    creatDom.createElem()
})
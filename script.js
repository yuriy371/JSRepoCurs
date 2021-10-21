"use strict"

document.addEventListener("DOMContentLoaded", () => {
    let div, p
    let topPos = 0
    let leftPos = 0

    document.addEventListener("keydown", keyDown)

    function keyDown(e) {
        if (e.key === "ArrowUp") {
            topPos -= 10;
            if (div) {
                div.style.top = `${topPos}px`
            } else {
                p.style.top = `${topPos}px`
            }
        }
        if (e.key === "ArrowDown") {
            topPos += 10;
            if (div) {
                div.style.top = `${topPos}px`
            } else {
                p.style.top = `${topPos}px`
            }
        }
        if (e.key === "ArrowLeft") {
            leftPos -= 10;
            if (div) {
                div.style.left = `${leftPos}px`
            } else {
                p.style.left = `${leftPos}px`
            }
        }
        if (e.key === "ArrowRight") {
            leftPos += 10;
            if (div) {
                div.style.left = `${leftPos}px`
            } else {
                p.style.left = `${leftPos}px`
            }
        }
    }

    function DomElement(selector, height, width, bg, position) {
        this.selector = selector
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.position = position;
    }

    DomElement.prototype.createElem = function () {
        if (this.selector.charAt(0) === ".") {
            div = document.createElement('div');
            div.className = this.selector
            div.style.cssText = `
                height: ${this.height}px;
                width: ${this.width}px;
                background: ${this.bg};
                position: ${this.position};`
            document.body.append(div)
        } else if (this.selector.charAt(0) === "#") {
            p = document.createElement('p');
            p.className = this.selector
            p.style.cssText = `
                height: ${this.height}px;
                width: ${this.width}px;
                background: ${this.bg};
                position: ${this.position};`
            document.body.append(p)
        } else {
            console.log("не точка и не хэштег");
        }
    }

    let creatDom = new DomElement("#block", 100, 100, 'green', 'absolute')
    creatDom.createElem()
})
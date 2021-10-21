"use strict"

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize

    this.createElem = function () {
        if (this.selector.charAt(0) === ".") {
            let div = document.createElement('div');
            div.className = this.selector;
            div.innerHTML = "Ленин"
            div.style.cssText = `
            height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg};
            font-size: ${this.fontSize}px;`
            document.body.append(div)
        } else if (this.selector.charAt(0) === "#") {
            let p = document.createElement('p');
            p.id = this.selector;
            p.innerHTML = "Ленин"
            p.style.cssText = `
            height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg};
            font-size: ${this.fontSize}px;`
            document.body.append(p)
            
        } else {
            console.log("не точка и не хэштег");
        }
    }
}

let creatDom = new DomElement('#block', 64, 200, "red", 64)
creatDom.createElem()
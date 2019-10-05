class Menu {
    constructor() {
        this.root = document.getElementById('contents');
    }
    DomReset() {
        root.textContent = null;
    }
    MovePage(targetPage) {
        this.DomReset();
        targetPage.init();
    }
    createElement(el, id, className, inner, parent) {
        const tmp = document.createElement(el);
        if (id) {
            tmp.id = id;
        }
        if (className) {
            tmp.classNam = className;
        }
        if (inner) {
            tmp.innerHTML = inner;
        }
        document.querySelector(parent).appendChild(tmp);
    }
}

export default Menu;

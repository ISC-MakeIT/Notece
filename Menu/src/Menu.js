class Menu {
    constructor() {
        this.root = document.getElementById('content');
    }
    DomReset() {
        root.textContent = null;
    }
    MovePage(targetPage) {
        this.DomReset();
        targetPage.init();
    }
}

export default Menu;

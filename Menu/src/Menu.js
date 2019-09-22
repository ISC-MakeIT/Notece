class Menu {
    constructor() {
        this.root = document.getElementById('root');
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

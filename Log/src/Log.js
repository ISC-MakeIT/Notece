class Memu {
    constructor() {
        const root = document.getElementById('root');
    }
    init() {}

    makeLabel() {
        const label = document.createElement('div');
        label.style.backgroundImage = 'url(../img/postit.png)';
        label.style.backgroundSize = 'cover';
        label.id = 'products-detail';
        this.root.appendChild(label);
    }
    makeProducts(JSON) {
        const product = document.createElement('div');
        product.style.backgroundImage = JSON.img;
        this.root.appendChild(product);
        product.onclick = () => {
            const target = document.getElementById('products-detail');
            const tag = document.createElement('div');
            const title = document.createElement('div');
            tag.innerHTML = JSON.tag;
            title.innerHTML = JSON.title;
            target.appendChild(product);
            target.appendChild(tag);
            target.appendChild(title);
        };
    }
}

class Tool {
    constructor() {
        this.li = document.createElement('li');
        this.menuContainer = document.createElement('div');
        this.menuContents = document.createElement('div');
        this.button = document.createElement('button');
        this.createTag();
    }
    createTag() {
        const wrapper = document.getElementById('tag-wrapper');
        this.li.className = 'tag';
        this.li.onclick = this.activate, this;
        wrapper.appendChild(this.li);
    }
}

export default Tool;

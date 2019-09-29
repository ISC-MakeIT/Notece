class Tool {
    constructor() {
        this.li = document.createElement('li');
    }
    createTag() {
        const wrapper = document.getElementById('tag-wrapper');
        this.li.className = 'tag';
        this.li.onclick = this.action;
        wrapper.appendChild(this.li);
    }
}

export default Tool;

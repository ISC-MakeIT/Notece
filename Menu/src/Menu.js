class Menu {
    constructor() {
        // this.search = new Search();
        // this.profile = new Profile();
        // this.setting = new Setting();
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

class NewNote {
    constructor() {
        this.newPageLabel = ['../img/New.png', 'newPage', '../img/newPage.png'];
        this.fileLogLabel;
        this.root = document.getElementById('root');
    }
    init() {
        this.createLabel(this.newPageLabel);
    }
    createLabel(label, labelId, btnImg) {
        const div = document.createElement('div');
        div.style.backgroundImage = `url(${label})`;
        div.id = labelId;

        const btn = document.createElement('div');
        btn.style.backgroundImage = `url(${btnImg})`;
        btn.onclick = () => {
            if (div.id === 'newNote') {
                // go canvas
            } else {
                // go filelog
            }
        };

        this.root.appendChild(div);
        div.appendChild(btn);
    }
}
// class Search extends Menu {}
// class Profile extends Menu {}
// class Setting extends Menu {}

const newNote = new NewNote();
const hoge = new Menu();
hoge.MovePage(newNote);

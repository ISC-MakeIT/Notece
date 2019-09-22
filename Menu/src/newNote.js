import Menu from './Menu';
class NewNote extends Menu {
    init() {
        this.createLabel(
            'url(../img/newPage.png)',
            'newPage',
            'url(../img/New.png)'
        );
        this.createLabel(
            'url(../img/filelog.png)',
            'newPage',
            'url(../img/ViewLog.png)'
        );
    }
    createLabel(label, labelId, btnImg) {
        const div = document.createElement('div');
        div.style.backgroundImage = label;
        div.id = labelId;

        const btn = document.createElement('div');
        btn.style.backgroundImage = btnImg;
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

export default NewNote;

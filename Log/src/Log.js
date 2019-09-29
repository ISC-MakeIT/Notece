class Log {
    constructor() {
        this.root = document.getElementById('root');
        this.tagContainer = document.getElementById('tag-container');
        this.MenuTags = document.getElementsByClassName('tag');
        this.detail;
        this.noteList;
    }

    init() {
        this.MenuTags.style.display = 'none';
        this.createTab();
        this.resetDom(this.root);
        this.root.textContent = null;

        const detail = document.createElement('div');
        detail.id = 'detail';
        this.detail = detail;

        const noteList = document.createElement('div');
        noteList.id = 'note-list';
        this.noteList = noteList;

        this.createTab('url()', 'myNote');
        this.createTab('url()', 'watchNote');
    }

    createTab(tabImg, tabId) {
        const tab = document.createElement('div');
        tab.style.backgroundImage = tabImg;
        tab.id = tabId;
        tab.class = 'tab';
        this.tagContainer.appendChild(tab);
    }

    // noteDataのところをurlにしてaxiosでjson取り出せるようにする
    displayNoteList(noteData) {
        this.detail.textContent = null;
        this.noteList.textContent = null;
        for (let i = 0; i < noteData.length; i++) {
            const div = document.createElement('div');
            div.style.backgroundImage = noteData[i].image;
            div.className = 'notes';
            this.noteList.appendChild(div);

            div.addEventListener('click', () => {
                const img = document.createElement('div');
                img.style.backgroundImage = noteData[i].image;
                img.id = 'note-thumbnail';
                this.detail.appendChild(img);

                const noteName = document.createElement('p');
                noteName.innerText = noteData[i].name;
                noteName.id = 'note-name';
                this.detail.appendChild(noteName);

                const noteExplanation = document.createElement('p');
                noteExplanation.innerText = noteData[i].explanation;
                noteExplanation.id = 'note-explanation';
                this.detail.appendChild(noteExplanation);
                // tag未実装
            });
        }
    }
}

export default Log;

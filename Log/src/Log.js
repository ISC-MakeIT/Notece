class Log {
    constructor() {
        this.root = document.getElementById('root');
        this.tagContainer = document.getElementById('tag-container');
        this.MenuTags = document.getElementsByClassName('tag');
        this.noteList;
    }

    init() {
        for (let i = 0; i < this.MenuTags.length; i++) {
            this.MenuTags[i].style.display = 'none';
        }
        this.root.textContent = null;

        const detailWrapper = document.createElement('div');
        detailWrapper.id = 'detail-wrapper';
        this.root.appendChild(detailWrapper);
        const detail = document.createElement('div');
        detail.id = 'detail';
        detailWrapper.appendChild(detail);

        const noteList = document.createElement('div');
        noteList.id = 'note-list';
        this.root.appendChild(noteList);
        this.noteList = noteList;

        this.createTab('url()', 'myNote');
        this.createTab('url()', 'watchNote');
    }

    createTab(tabImg, tabId) {
        const tab = document.createElement('li');
        tab.style.backgroundImage = tabImg;
        tab.id = tabId;
        tab.className = 'tab';
        this.tagContainer.appendChild(tab);
    }

    // noteDataのところをurlにしてaxiosでjson取り出せるようにする
    displayNoteList(noteData) {
        document.getElementById('detail').textContent = null;
        this.noteList.textContent = null;
        for (let i = 0; i < noteData.length; i++) {
            const div = document.createElement('div');
            div.style.backgroundImage = noteData[i].image;
            div.className = 'notes';
            this.noteList.appendChild(div);

            div.addEventListener('click', () => {
                document.getElementById('detail').textContent = null;
                const img = document.createElement('div');
                img.style.backgroundImage = noteData[i].image;
                img.id = 'note-thumbnail';
                document.getElementById('detail').appendChild(img);

                const noteName = document.createElement('p');
                noteName.innerText = noteData[i].name;
                noteName.id = 'note-name';
                document.getElementById('detail').appendChild(noteName);

                const noteExplanation = document.createElement('p');
                noteExplanation.innerText = noteData[i].explanation;
                noteExplanation.id = 'note-explanation';
                document.getElementById('detail').appendChild(noteExplanation);
                // tag未実装
            });
        }
    }
}

export default Log;

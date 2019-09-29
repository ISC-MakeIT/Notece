class Search {
    constructor() {
        this.root = document.getElementById('root');
        this.tagContainer = document.getElementById('tag-container');
        this.MenuTags = document.getElementsByClassName('tag');
    }

    init() {
        for (let i = 0; i < this.MenuTags.length; i++) {
            this.MenuTags[i].style.display = 'none';
        }
        this.root.textContent = null;

        this.createElement('div', 'detail-wrapper', 'root');
        this.createElement('div', 'detail', 'detail-wrapper');
        this.createElement('div', 'note-list', 'root');
        this.createElement('div', 'search-area', 'root');

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

    createElement(el, id, parent) {
        const tmp = document.createElement(el);
        tmp.id = id;
        document.getElementById(parent).appendChild(tmp);
    }

    // noteDataのところをurlにしてaxiosでjson取り出せるようにする
    displayNoteList(noteData) {
        document.getElementById('detail').textContent = null;
        document.getElementById('note-list').textContent = null;
        for (let i = 0; i < noteData.length; i++) {
            const div = document.createElement('div');
            div.style.backgroundImage = noteData[i].image;
            div.className = 'notes';
            this.noteList.appendChild(div);

            div.addEventListener('click', () => {
                document.getElementById('detail').textContent = null;
                this.createElement('div', 'note-thumbnail', 'detail');
                document.getElementById(
                    'note-thumbnail'
                ).style.backgroundImage = noteData[i].image;

                this.createElement('div', 'note-name', 'detail');
                document.getElementById('note-name').style.backgroundImage =
                    noteData[i].image;

                this.createElement('div', 'note-explanation', 'detail');
                document.getElementById(
                    'note-explanation'
                ).style.backgroundImage = noteData[i].image;
                // tag未実装
            });
        }
    }
}

export default Search;

class Search {
    constructor() {
        this.root = document.getElementById('root');
        this.tagContainer = document.getElementById('tag-container');
        this.MenuTags = document.getElementsByClassName('tag');
        //仮
        const mychannel = "1T6";
        const firstword = "猫でも";
        //ここまで
        //仮データ
        //仮データここまで
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
        console.log(id);
        switch (id) {
            case 'search-area':
                const getid = document.getElementById('search-area');

                /*
                const word = document.createElement('input');
                word.type = 'text';
                word.id = "word";
                */

                const minus = document.createElement('input');
                minus.type = "text";
                minus.id = "minus";

                const search_button = document.createElement('input');
                search_button.type = "button";
                search_button.value = "検索";
                search_button.id = "search_button";

                const period = document.createElement('select');
                period.innerHTML = '<option id="october" value="201910">2019年10月</option><option id="september" value="201909">2019年9月</option><option id="august" value="201908">2019年8月</option>'
                period.id = "period";

                const group = document.createElement('div');
                group.id = "group";
                group.className = "selected";
                //仮
                group.style.backgroundColor = "#00ff00";
                group.style.width = "100px";
                group.style.height = "100px";
                //ここまで
                group.addEventListener('click', () => {
                    const getgroup1 = document.getElementById('group');
                    const getchannnel1 = document.getElementById('channel');
                    if (getgroup1.className == "unselected") {
                        getgroup1.className = "selected";
                        getchannnel1.className = "unselected";
                    }
                }
                    , false)

                const channel = document.createElement('div');
                channel.id = "channel";
                //仮
                channel.style.backgroundColor = "#ff0000";
                channel.style.width = "100px";
                channel.style.height = "100px";
                //ここまで
                channel.addEventListener('click', () => {
                    const getgroup2 = document.getElementById('group');
                    const getchannnel2 = document.getElementById('channel');
                    if (getgroup2.className == "selected") {
                        getgroup2.className = "unselected";
                        getchannnel2.className = "selected";
                    }
                }
                    , false)


                //getid.appendChild(word);
                getid.appendChild(minus);
                getid.appendChild(search_button);
                getid.appendChild(period);
                getid.appendChild(group);
                getid.appendChild(channel);
                break;
            case 'note-list':
                const data = [
                    {
                        "title": "猫でもわかる",
                        "date": 20191004,
                        "channel": "1T6"
                    },
                    {
                        "title": "猫でも猿でもわかる",
                        "date": 20191004,
                        "channel": "1T6"
                    },
                    {
                        "title": "猫もわかる",
                        "date": 20191003,
                        "channel": "1T5"
                    },
                    {
                        "title": "猫でも犬でもわかる",
                        "date": 20191002,
                        "channel": "1T1"
                    },
                    {
                        "title": "猫でも犬でもわかる",
                        "date": 20190902,
                        "channel": "1T1"
                    },
                    {
                        "title": "猫でもわかる",
                        "date": 20190902,
                        "channel": "1T2"
                    },
                    {
                        "title": "猫でもわかる",
                        "date": 20190802,
                        "channel": "1T2"
                    },
                    {
                        "title": "猫でもわかる",
                        "date": 20190702,
                        "channel": "1T6"
                    },
                    {
                        "title": "猫でもわかる",
                        "date": 20190702,
                        "channel": "1T6"
                    },
                    {
                        "title": "猫がわかる",
                        "date": 20190702,
                        "channel": "1T6"
                    }
                ];
                for (let page = 0; page < data.length; page++) {
                    if (data[page].title.match('猫でも') !== -1) {
                        let title = document.createElement('dt');
                        title.textContent = data[page].title;
                        document.getElementById('note-list').appendChild(title);
                    }
                }
                break;
            default:
                break;

        }

        document.getElementById('root').appendChild(tmp);
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

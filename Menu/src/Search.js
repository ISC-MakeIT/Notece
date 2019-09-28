import Menu from './Menu';
class Search extends Menu {
    init() {
        this.createLabel(
            'url(../img/logo.png)',
            'logo',
        );
        this.createLabel(
            'url(../img/search.png)',
            'search',
        );
    }
    createLabel(label, labelId) {
        const div = document.createElement('div');
        div.style.backgroundImage = label;
        div.id = labelId;

        const searchbox = document.createElement('input');
        searchbox.id = searchbox;
        searchbox.type = "text";

        this.root.appendChild(div);
        this.root.appendChild(searchbox);
    }
}

export default Search;

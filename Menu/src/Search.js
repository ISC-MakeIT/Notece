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

        this.root.appendChild(div);
    }
}

export default Search;

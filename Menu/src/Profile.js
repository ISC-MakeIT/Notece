import Menu from './Menu';
class Profile extends Menu {
    constructor() {
        super();
    }

    display() {
        this.DomReset();

        const name = document.createElement('input');
        name.type = "text";
        name.className = "text";

        const comment = document.createElement('input');
        comment.type = "textbox";
        comment.className = "text";

        document.getElementById('contents').appendChild(name);
        document.getElementById('contents').appendChild(comment);

    }


}
export default Profile;
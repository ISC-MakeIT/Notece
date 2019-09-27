import Menu from './Menu';
class Profile extends Menu {
    init() {
        this.createLabel('url(../img/name.png)', 'user-name');
        this.createLabel('url(../img/gender.png)', 'user-gender');
        this.createLabel('url(../img/birth.png)', 'user-birth');
        this.createLabel('url(../img/message.png)', 'user-message');
    }
    createLabel(label, labelId) {
        const div = document.createElement('div');
        div.style.backgroundImage = label;
        div.id = labelId;

        this.root.appendChild(div);
    }
}

export default Profile;

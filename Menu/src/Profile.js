import Menu from './Menu';
class Profile extends Menu {
    init() {
        this.createLabel(
            'url(../img/name.png)',
            'name'
        );
        this.createLabel(
            'url(../img/gender.png)',
            'gender'
        );
        this.createLabel(
            'url(../img/date of birth.png)',
            'date-of-birth'
        );
        this.createLabel(
            'url(../img/message.png)',
            'message'
        );
    }
    createLabel(label, labelId) {
        const div = document.createElement('div');
        div.style.backgroundImage = label;
        div.id = labelId;

        this.root.appendChild(div);
    }
}

export default Profile;
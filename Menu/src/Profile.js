import Menu from './Menu';
class Profile extends Menu {
    constructor() {
        super();
    }

    display() {
        this.DomReset();

        const name = document.createElement('div');
        name.id = "name";
        name.innerHTML = '<input id="namebox" type="text";>';
        name.addEventListener('keypress', () => {
            if (window.event.keyCode == 13) {
                const get = document.getElementById('name');
                const nameget = document.getElementById('namebox');
                const text = nameget.value;
                get.innerHTML = '<div>' + text + '</div>';
            }
        }, false);


        const comment = document.createElement('div');
        comment.id = "comment";
        comment.innerHTML = '<input id="commentbox" type="text";>'
        name.addEventListener('keypress', () => {
            if (window.event.keyCode == 13) {
                const set = document.getElementById('comment');
                const commentset = document.getElementById('commentbox');
                const textbox = commentset.value;
                set.innerHTML = '<div>' + textbox + '</div>';
            }
        }, false);


        const image = document.createElement('img');
        image.src = "../img/profile.png";

        document.getElementById('contents').appendChild(name);
        document.getElementById('contents').appendChild(comment);
        document.getElementById('contents').appendChild(image);

    }


}
export default Profile;
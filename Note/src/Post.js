class Post {
    constructor(target, dataArray, user) {
        this.target = target;
        this.array = dataArray;
        this.user = user;
    }
    action() {
        this.displayModal();
        document.getElementById('submit').addEventListener('click', () => {
            const date = new Date();
            this.array.unshift({
                userName: this.user,
                title: document.getElementById('title').value,
                explanation: document.getElementById('explanation').value,
                date:
                    date.getMonth() +
                    1 +
                    '/' +
                    date.getDate() +
                    '/' +
                    date.getHours() +
                    ':' +
                    date.getMinutes(),
                data: JSON.stringify(this.target),
                icon: '../img/icon.png'
            });
            window.location.href = '';
        });
    }
    displayModal() {
        const wrapper = document.createElement('div');
        const modal = document.createElement('div');
        const title = document.createElement('input');
        const explanation = document.createElement('textarea');
        const submit = document.createElement('button');
        wrapper.id = 'modal-wrapper';
        modal.id = 'modal';
        title.id = 'title';
        title.placeholder = 'タイトル';
        explanation.id = 'explanation';
        explanation.placeholder = '作品の説明';
        submit.id = 'submit';
        submit.innerHTML = '投稿';
        document.body.appendChild(wrapper);
        wrapper.appendChild(modal);
        modal.appendChild(title);
        modal.appendChild(explanation);
        modal.appendChild(submit);
    }
}

export default Post;

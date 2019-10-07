import Menu from './Menu';
class Comment extends Menu {
    display(logs) {
        logs.forEach(log => {
            this.DomReset();
            const wrapper = document.createElement('div');
            wrapper.className = 'comment-wrapper';
            this.root.appendChild(wrapper);
            const bg = document.createElement('div');
            bg.className = 'comment';
            const commentator = document.createElement('img');
            commentator.className = 'comment-commentator';
            commentator.src = log.commentator;
            wrapper.appendChild(commentator);
            this.createElement(
                'div',
                0,
                'comment-info',
                `<p>comment to </p><span>${log.title}</span>`,
                bg
            );
            this.createElement(
                'div',
                0,
                'comment-container',
                `<p>${log.comment}</p>`,
                bg
            );
            wrapper.appendChild(bg);
        });
    }
}
export default Comment;

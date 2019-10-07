import Menu from './Menu';
class Confirm extends Menu {
    display() {
        this.DomReset();
        this.createElement('div', 'confirm-wrapper', 0, 0, this.root);
        this.createElement(
            'div',
            'confirm',
            0,
            0,
            document.getElementById('confirm-wrapper')
        );
        this.createElement(
            'p',
            'confirm-title',
            0,
            '<p>新しいノートを作成する</p>',
            document.getElementById('confirm')
        );
        this.createElement(
            'div',
            'confirm-return',
            0,
            '戻る',
            document.getElementById('confirm')
        );
        this.createElement(
            'div',
            'confirm-go',
            0,
            '作成する',
            document.getElementById('confirm')
        );
        document.getElementById('confirm-go').addEventListener('click', () => {
            window.location.href = '../../Note/html/index.html';
        });
        document
            .getElementById('confirm-return')
            .addEventListener('click', () => {
                window.location.href = '../html/index.html';
            });
    }
}

export default Confirm;

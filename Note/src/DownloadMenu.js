import Tool from './Tool';
class DownloadMenu extends Tool {
    action() {
        const wrapper = document.getElementById('tag-wrapper');
        const menuContainer = document.createElement('div');
        menuContainer.className = 'js-menuContainer';
        const downloadMenu = document.createElement('div');
        downloadMenu.id = 'js-downloadMenu';
        wrapper.appendChild(menuContainer);
        menuContainer.appendChild('menuContents');
    }
    convertToPNG() {
        const a = document.createElement('a');
        a.href = canvas.board.toDataURL('image/png');
        a.download = 'YourNote.png';
        a.click();
    }
    download() {
        const check = confirm('このノートを保存しますか？');
        if (check) {
            const a = document.createElement('a');
            a.href = canvas.board.toDataURL('image/png', 1);
            a.download = "yourNote.png";
            a.click();
        }
    }
}

export default DownloadMenu;
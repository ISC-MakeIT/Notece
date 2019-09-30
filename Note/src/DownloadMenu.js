import Tool from './Tool';
class DownloadMenu extends Tool {
    activate() {
        this.setAttribute('style', 'height:50vh;width:80vw;z-index:2;');
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

class Canvas {
    constructor() {
        this.canvasSize = document.getElementById('canvas');
        this.canvasSize.height = document.getElementById('canvas-wrapper').clientHeight;
        this.canvasSize.width = document.getElementById('canvas-wrapper').clientWidth;
        this.board = new fabric.Canvas('canvas');
        this.board.isDrawingMode = true;
        this.board.freeDrawingBrush.color = '#2b2b2b';
        this.board.freeDrawingBrush.width = 4;
        this.setTools();
    }
    resize = () => {
        this.board.setWidth(window.innerWidth);
        this.board.setWidth(window.innerHeight);
    }
    setTools = () => {
        const trigger = document.getElementById('tag-wrapper').children;
        const methods = [
            this.openTextBoxMenu,
            this.openColorMenu,
            this.openArtMenu,
            this.openBrushMenu,
            this.hoge,
            this.download
        ]
        for (let i = 0; i < 6; i++) {
            trigger[i].onclick = () => {
                methods[i]();
            }
        }
    }
    openTextBoxMenu = () => {
        console.log('TextBox');
    }
    openColorMenu = () => {
        console.log('color');
    }
    openArtMenu = () => {
        console.log('Art');
    }
    openBrushMenu = () => {
        console.log('BrushSize');
    }
    hoge = () => {
        console.log('hoge');
    }
    download = () => {
        const check = confirm('このノートを保存しますか？');
        if (check) {
            const a = document.createElement('a');
            a.href = canvas.board.toDataURL('image/png', 1);
            a.download = "yourNote.png";
            a.click();
        }
    }
}

const canvas = new Canvas();
window.onresize = async () => {
    const parentSize = document.getElementById('canvas-wrapper');
    canvas.board.setWidth(parentSize.clientWidth);
    canvas.board.setHeight(parentSize.clientHeight);
}

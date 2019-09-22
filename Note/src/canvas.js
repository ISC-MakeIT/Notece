class Canvas {
    constructor() {
        this.parentSize = document.getElementById('canvas-wrapper');
        this.canvasSize = document.getElementById('canvas');
        this.canvasSize.height = this.parentSize.clientHeight;
        this.canvasSize.width = this.parentSize.clientWidth;
        this.board = new fabric.Canvas('canvas');
        this.board.isDrawingMode = true;
        this.board.freeDrawingBrush.color = '#2b2b2b';
        this.board.freeDrawingBrush.width = 4;
    }
    setTools = () => {
        const tmp = document.getElementById('tag-wrapper').children;
        for (let i = 0; i < 6; i++) {
            tmp[i].onclick = () => {
                console.log('hoge');
            }
        }
    }
}

const canvas = new Canvas();
canvas.setTools();

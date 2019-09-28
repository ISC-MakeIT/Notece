class Canvas {
    constructor() {
        this.canvasSize = document.getElementById('canvas');
        this.canvasSize.height = document.getElementById('canvas-wrapper').clientHeight;
        this.canvasSize.width = document.getElementById('canvas-wrapper').clientWidth;
        this.board = new fabric.Canvas('canvas');
        this.board.isDrawingMode = true;
        this.board.freeDrawingBrush.color = '#2b2b2b';
        this.board.freeDrawingBrush.width = 8;
    }
    resize = () => {
        this.board.setWidth(window.innerWidth);
        this.board.setWidth(window.innerHeight);
    }
}

const canvas = new Canvas();
window.onresize = async () => {
    const parentSize = document.getElementById('canvas-wrapper');
    canvas.board.setWidth(parentSize.clientWidth);
    canvas.board.setHeight(parentSize.clientHeight);
}

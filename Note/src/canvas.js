class Canvas {
    constructor() {
        this.canvasSize = document.getElementById('canvas');
        this.canvasSize.height = document.getElementById('canvas-wrapper').clientHeight;
        this.canvasSize.width = document.getElementById('canvas-wrapper').clientWidth;
        this.board = new fabric.Canvas('canvas');
        this.board.isDrawingMode = true;
        this.board.freeDrawingBrush.color = '#2b2b2b';
        this.board.freeDrawingBrush.width = 4;
    }
    resize = () => {
        this.board.setWidth(window.innerWidth);
        this.board.setWidth(window.innerHeight);
    }
    setTools = () => {
        const trigger = document.getElementById('tag-wrapper').children;
        const methods = [
            this.changeBrushSize,
            this.changeColor,
            this.createArt,
            this.createTextBox,
            this.hoge,
            this.huga
        ]
        for (let i = 0; i < 6; i++) {
            trigger[i].onclick = () => {
                methods[i]();
            }
        }
    }
    changeBrushSize = () => {
        console.log('BrushSize');
    }
    changeColor = () => {
        console.log('color');
    }
    createArt = () => {
        console.log('Art');
    }
    createTextBox = () => {
        console.log('TextBox');
    }
    hoge = () => {
        console.log('hoge');
    }
    huga = () => {
        console.log('huga');
    }
}

const canvas = new Canvas();
canvas.setTools();
window.onresize = () => {
    console.log('hi');
    const parentSize = document.getElementById('canvas-wrapper');
    canvas.board.setWidth(parentSize.clientWidth);
    canvas.board.setHeight(parentSize.clientHeight);
    console.log(parentSize.clientHeight);
}
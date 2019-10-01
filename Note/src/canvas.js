class Canvas {
    constructor() {
        this.canvasSize = document.getElementById('canvas');
        this.canvasSize.height = document.getElementById(
            'canvas-wrapper'
        ).clientHeight;
        this.canvasSize.width = document.getElementById(
            'canvas-wrapper'
        ).clientWidth;
        this.board = new fabric.Canvas('canvas');
        this.board.freeDrawingBrush.color = '#2b2b2b';
        this.board.freeDrawingBrush.width = 8;
    }
    resize() {
        this.board.setWidth(window.innerWidth);
        this.board.setWidth(window.innerHeight);
    }
    createTool(toolid) {
        const wrapper = document.getElementById('tag-wrapper');
        const li = document.createElement('li');
        li.className = 'tag';
        li.id = toolid;
        wrapper.appendChild(li);
    }
}

export default Canvas;

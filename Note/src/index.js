import Canvas from './Canvas';
import CreateShape from './CreateShape';
import UnRedo from './UnRedo';
import Drawing from './Drawing';
import Post from './Post';
//canvas
const canvas = new Canvas();
window.onresize = async () => {
    const parentSize = document.getElementById('canvas-wrapper');
    canvas.board.setWidth(parentSize.clientWidth);
    canvas.board.setHeight(parentSize.clientHeight);
};
//tool
const unredo = new UnRedo(canvas.board);
const createShape = new CreateShape(canvas.board, unredo);
const drawing = new Drawing(canvas.board);
const post = new Post(canvas.board, timelineLog, 'damegane');
unredo.action();

window.onkeydown = e => {
    if (e.key === 'y') {
        canvas.board.isDrawingMode = !canvas.board.isDrawingMode;
    } else if (e.key === 'Delete') {
        canvas.board.remove.apply(
            canvas.board,
            canvas.board.getActiveObjects()
        );
    }
};

window.onload = () => {
    const tools = Array(drawing, createShape, post);
    tools.forEach(tool => {
        canvas.createTool(tool.name);
        document.getElementById(tool.name).addEventListener('click', () => {
            tool.action();
        });
    });
};

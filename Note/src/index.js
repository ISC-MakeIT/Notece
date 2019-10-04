import Canvas from './Canvas';
import CreateShape from './CreateShape';
import UnRedo from './UnRedo';
//canvas
const canvas = new Canvas();
window.onresize = async () => {
    const parentSize = document.getElementById('canvas-wrapper');
    canvas.board.setWidth(parentSize.clientWidth);
    canvas.board.setHeight(parentSize.clientHeight);
};
window.onkeydown = e => {
    if (e.key === 'y') {
        canvas.board.isDrawingMode = !canvas.board.isDrawingMode;
    }
};
//tool
const createShape = new CreateShape(canvas.board);
const unredo = new UnRedo(canvas.board);
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
    const tools = Array(
        createShape
        // artMenu,
        // colorMenu,
        // brushMenu,
        // downloadMenu
    );
    tools.forEach(tool => {
        canvas.createTool(tool.name);
        document.getElementById(tool.name).addEventListener('click', () => {
            tool.action();
        });
    });
};

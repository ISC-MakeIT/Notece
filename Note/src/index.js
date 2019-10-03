import Canvas from './Canvas';
import CreateShape from './CreateShape';
import ArtMenu from './ArtMenu';
import ColorMenu from './ColorMenu';
import BrushMenu from './BrushMenu';
import DownloadMenu from './DownloadMenu';
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
// const artMenu = new ArtMenu();
// const colorMenu = new ColorMenu();
// const brushMenu = new BrushMenu();
// const downloadMenu = new DownloadMenu();
// const tool = new Tool(canvas.board);

window.onload = () => {
    const tools = Array(
        createShape
        // artMenu,
        // colorMenu,
        // brushMenu,
        // downloadMenu
    );
    tools.forEach(tool => {
        canvas.createTool(tool);
        document.getElementById(tool).addEventListener('click', () => {
            tool.action();
        });
    });
};

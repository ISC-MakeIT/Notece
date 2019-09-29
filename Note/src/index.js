import Canvas from './Canvas';
import TextBoxMenu from './TextBoxMenu';
import ArtMenu from './ArtMenu';
import ColorMenu from './ColorMenu';
import BrushMenu from './BrushMenu';
import DownloadMenu from './DownloadMenu';

const canvas = new Canvas();
const textBoxMenu = new TextBoxMenu();
const artMenu = new ArtMenu();
const colorMenu = new ColorMenu();
const brushMenu = new BrushMenu();
const downloadMenu = new DownloadMenu();
window.onload = () => {
    const tools = Array(textBoxMenu, artMenu, colorMenu, brushMenu, downloadMenu);
    tools.forEach(tool => {
        tool.createTag();
    })
}
window.onresize = async () => {
    const parentSize = document.getElementById('canvas-wrapper');
    canvas.board.setWidth(parentSize.clientWidth);
    canvas.board.setHeight(parentSize.clientHeight);
}
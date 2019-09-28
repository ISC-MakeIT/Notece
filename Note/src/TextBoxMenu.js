import Canvas from './Canvas';
class TextBoxMenu extends Canvas {
    constructor() {

    }
}
export default TextBoxMenu;
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
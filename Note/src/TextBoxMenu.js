// import Tool from './Tool';
class TextBoxMenu {
    constructor(target) {
        this.target = target;
        this.isHoge = false;
        this.isHuga = true;
    }
    action() {
        if (this.isHuga) {
            console.log('hello');
            this.target.renderAll();
            this.target.forEachObject(function(object) {
                object.selectable = false;
            });
            let startX;
            let startY;
            this.isHuga = false;
            this.target.on('mouse:down', e => {
                startX = e.absolutePointer.x;
                startY = e.absolutePointer.y;
                this.target.renderAll();
                this.target.forEachObject(function(object) {
                    object.selectable = false;
                });
            });
            this.target.on('mouse:up', e => {
                const endX = e.absolutePointer.x;
                const endY = e.absolutePointer.y;
                let rect = new fabric.Rect({
                    left: startX,
                    top: startY,
                    originX: 'left',
                    originY: 'top',
                    fill: 'red',
                    width: startX - endX,
                    height: startY - endY
                });
                this.target.add(rect);
            });
        } else {
            console.log('bey');
            this.isHuga = true;
            this.target.off('mouse:down');
            this.target.off('mouse:up');
            this.target.renderAll();
            this.target.forEachObject(function(object) {
                object.selectable = true;
            });
        }
    }
    init() {}
}
export default TextBoxMenu;

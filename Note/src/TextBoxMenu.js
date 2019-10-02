// import Tool from './Tool';
class TextBoxMenu {
    constructor(target) {
        this.target = target;
        this.isHoge = false;
        this.isHuga = true;
    }
    action() {
        const types = ['Rect', 'Circle', 'Textbox', 'Ellipse'];
        types.forEach(type => {
            const li = document.createElement('li');
            li.id = type;
            li.className = 'tag';
            li.addEventListener('click', () => {
                this.createShape(type);
            });
            document.getElementById('tag-wrapper').appendChild(li);
        });
    }

    createShape(type) {
        this.target.renderAll();
        this.target.forEachObject(function(object) {
            object.selectable = false;
        });
        let startX;
        let startY;
        let shape;
        if (type === 'Textbox') {
            console.log('textbox');
            this.target.on('mouse:down', e => {
                startX = e.absolutePointer.x;
                startY = e.absolutePointer.y;
                shape = new fabric.Textbox('this is sample', {
                    left: startX,
                    top: startY
                });
                this.target.add(shape);
                this.target.renderAll();
                this.target.forEachObject(function(object) {
                    object.selectable = true;
                });
                this.target.off('mouse:down');
            });
        } else {
            this.target.on('mouse:down', e => {
                startX = e.absolutePointer.x;
                startY = e.absolutePointer.y;
            });
            this.target.on('mouse:up', e => {
                const endX = e.absolutePointer.x;
                const endY = e.absolutePointer.y;
                if (type === 'Rect') {
                    console.log('Rect');
                    shape = new fabric.Rect({
                        left: endX,
                        top: endY,
                        width: startX - endX,
                        height: startY - endY
                    });
                } else if (type === 'Circle') {
                    console.log('Circle');
                    if (startX - endX > 0) {
                        shape = new fabric.Circle({
                            left: endX,
                            top: endY,
                            radius: (startX - endX) / 2
                        });
                    } else {
                        shape = new fabric.Circle({
                            left: startX,
                            top: startY,
                            radius: Math.abs((startX - endX) / 2)
                        });
                    }
                } else {
                    // console.log('Ellipse');
                    // shape = new fabric.Ellipse({
                    //     left: endX,
                    //     top: endY,
                    //     rx: startX - endX,
                    //     ry: startY - endY
                    // });
                }
                this.target.add(shape);
                this.target.renderAll();
                this.target.forEachObject(function(object) {
                    object.selectable = true;
                });
                this.target.off('mouse:down');
                this.target.off('mouse:up');
            });
        }
    }
}
export default TextBoxMenu;

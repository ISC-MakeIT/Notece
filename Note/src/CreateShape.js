class CreateShape {
    constructor(target) {
        this.target = target;
        this.isHoge = false;
        this.isHuga = true;
    }
    action() {
        const types = ['Rect', 'Circle', 'Textbox'];
        types.forEach(type => {
            const li = document.createElement('li');
            li.id = type;
            li.className = 'tag';
            li.addEventListener('click', () => {
                this.selectType(type);
            });
            // const div = document.createElement('div');
            // div.id = 'select-type';
            // document.getElementById('tag-wrapper').appendChild(div);
            // div.appendChild(li);
            document.getElementById('tag-wrapper').appendChild(li);
        });
    }

    selectType(type) {
        this.target.renderAll();
        this.target.forEachObject(function(object) {
            object.selectable = false;
        });
        let startX;
        let startY;
        if (type === 'Textbox') {
            console.log('textbox');
            this.target.on('mouse:down', e => {
                startX = e.absolutePointer.x;
                startY = e.absolutePointer.y;
                const shape = new fabric.Textbox('this is sample', {
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
                    this.createRect(endX, endY, startX - endX, startY - endY);
                } else if (type === 'Circle') {
                    if (startX - endX > 0) {
                        this.createCircle(endX, endY, (startX - endX) / 2);
                    } else {
                        this.createCircle(
                            startX,
                            startY,
                            Math.abs((startX - endX) / 2)
                        );
                    }
                }
                this.target.renderAll();
                this.target.forEachObject(function(object) {
                    object.selectable = true;
                });
                this.target.off('mouse:down');
                this.target.off('mouse:up');
            });
        }
    }
    createRect(left, top, width, height) {
        const shape = new fabric.Rect({
            left: left,
            top: top,
            width: width,
            height: height
        });
        this.target.add(shape);
    }
    createCircle(left, top, radius) {
        const shape = new fabric.Circle({
            left: left,
            top: top,
            radius: radius
        });
        this.target.add(shape);
    }
}
export default CreateShape;

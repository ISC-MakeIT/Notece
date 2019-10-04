class CreateShape {
    constructor(target) {
        this.target = target;
        this.name = 'createShape';
    }
    action() {
        const types = ['Rect', 'Circle', 'Textbox'];
        types.forEach(type => {
            const li = document.createElement('li');
            li.id = type;
            li.className = 'tag';
            li.addEventListener('click', () => {
                this.target.isDrawingMode = false;
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
            console.log('hello');
            this.target.on('mouse:down', e => {
                startX = e.absolutePointer.x;
                startY = e.absolutePointer.y;
            });
            this.target.on('mouse:up', e => {
                const endX = e.absolutePointer.x;
                const endY = e.absolutePointer.y;
                this.create(startX, startY, endX, endY, type);
                this.target.off('mouse:down');
                this.target.off('mouse:up');
            });
            this.target.renderAll();
            this.target.forEachObject(function(object) {
                object.selectable = true;
            });
        }
    }

    create(startX, startY, endX, endY, type) {
        let leftValue;
        let topValue;
        // left,topの決定
        if (startX - endX > 0 && startY - endY > 0) {
            leftValue = endX;
            topValue = endY;
        } else if (startX - endX > 0 && startY - endY < 0) {
            leftValue = endX;
            topValue = startY;
        } else if (startX - endX < 0 && startY - endY > 0) {
            leftValue = startX;
            topValue = endY;
        } else {
            leftValue = startX;
            topValue = startY;
        }
        const options = {
            left: leftValue,
            top: topValue,
            fill: '#ccc',
            stroke: '#000'
        };
        // end
        if (type === 'Rect') {
            const rect = new fabric.Rect({
                ...options,
                width: Math.abs(startX - endX),
                height: Math.abs(startY - endY)
            });
            console.log('hi');
            this.target.add(rect);
        } else {
            const circle = new fabric.Circle({
                ...options,
                radius: Math.abs(startX - endX) / 2
            });
            console.log('hi');
            this.target.add(circle);
        }
    }
}
export default CreateShape;

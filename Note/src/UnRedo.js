class UnRedo {
    constructor(target) {
        this.name = 'UnRedo';
        this.target = target;
        this.mods = 0;
        this.state = [];
        this.isUndo = false;
        this.target.on('object:modified', () => {
            this.updateCanvas();
        });
        this.target.on('path:created', () => {
            this.updateCanvas();
        });
        this.target.on('object:removed', () => {
            this.updateCanvas();
        });
    }

    action() {
        window.addEventListener('keydown', e => {
            if (e.key === 'z' && e.ctrlKey) {
                this.undo();
            } else if (e.key === 'y' && e.ctrlKey) {
                this.redo();
            }
        });
    }

    updateCanvas() {
        while (this.isUndo) {
            this.state.pop();
            this.isUndo--;
            this.mods = 0;
        }
        const myjson = JSON.stringify(this.target);
        this.state.push(myjson);
        console.log(this.state);
    }

    undo() {
        if (this.mods < this.state.length) {
            this.target.clear().renderAll();
            this.target.loadFromJSON(
                this.state[this.state.length - this.mods - 2]
            );
            this.isUndo = this.mods + 1;
            this.target.renderAll();
            console.log(this.state.length - 1 - this.mods - 1);
            this.mods += 1;
        }
    }
    redo() {
        if (this.mods > 0) {
            this.target.clear().renderAll();
            this.target.loadFromJSON(this.state[this.state.length - this.mods]);
            this.target.renderAll();
            this.isUndo = this.mods - 1;
            console.log(this.state.length - 1 - this.mods + 1);
            this.mods -= 1;
        }
    }
}

export default UnRedo;

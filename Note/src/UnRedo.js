class UnRedo {
    constructor(target) {
        this.name = 'UnRedo';
        this.target = target;
        this.mods = 0;
        this.state = [];
        this.target.on('object:modified', () => {
            this.updateCanvas(true);
        });
        this.target.on('path:created', () => {
            this.updateCanvas(true);
        });
        this.target.on('object:removed', () => {
            this.updateCanvas(true);
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

    updateCanvas(savehistory) {
        if (savehistory === true) {
            const myjson = JSON.stringify(this.target);
            this.state.push(myjson);
        }
    }

    undo() {
        if (this.mods < this.state.length) {
            this.target.clear().renderAll();
            this.target.loadFromJSON(
                this.state[this.state.length - 1 - this.mods - 1]
            );
            this.target.renderAll();
            this.mods += 1;
        }
    }
    redo() {
        if (this.mods > 0) {
            this.target.clear().renderAll();
            this.target.loadFromJSON(
                this.state[this.state.length - 1 - this.mods + 1]
            );
            this.target.renderAll();
            this.mods -= 1;
        }
    }
}

export default UnRedo;

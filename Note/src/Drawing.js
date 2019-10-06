class Drawing {
    constructor(target) {
        this.target = target;
        this.name = 'drawing';
        window.onkeydown = e => {
            if (e.key === 'y') {
                this.target.isDrawingMode = !this.target.isDrawingMode;
            }
        };
    }
    action() {
        this.target.isDrawingMode = !this.target.isDrawingMode;
    }
}

export default Drawing;

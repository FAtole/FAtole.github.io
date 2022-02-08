class Carre {
    constructor(x, y, canvas) {
        this.canvas = canvas;
        this.canvas2dContext = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
    }

    draw() {
        this.canvas2dContext.fillStyle = "red";
        this.canvas2dContext.fillRect(this.x, this.y, 50, 50);
    }

    clean() {
        this.canvas2dContext.clearRect(this.x, this.y, 50, 50);
    }

    update(x, y) {
        this.x = x; this.y = y;
    }
}


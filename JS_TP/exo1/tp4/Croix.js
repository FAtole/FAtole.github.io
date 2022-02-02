class Croix {
    constructor(x, y, canvas) {
        this.canvas = canvas;
        this.canvas2dContext = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
    }

    draw() {
        this.canvas2dContext.fillStyle = "red";
        this.canvas2dContext.moveTo(x-5, y-5);
        this.canvas2dContext.lineTo(x+5, y+5);
        this.canvas2dContext.moveTo(x-5, y+5);
        this.canvas2dContext.lineTo(x+5, y-5);
    }

}

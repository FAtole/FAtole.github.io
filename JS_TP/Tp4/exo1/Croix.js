class Croix {
    constructor(x, y, canvas,color) {
        this.canvas = canvas;
        this.canvas2dContext = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.color=color;
    }

    draw() {
        this.canvas2dContext.beginPath();

        this.canvas2dContext.strokeStyle  = this.color;
      //  this.canvas2dContext.fillRect(this.x, this.y, 50, 50);
        this.canvas2dContext.moveTo(this.x-5, this.y-5);
        this.canvas2dContext.lineTo(this.x+5, this.y+5);
        this.canvas2dContext.moveTo(this.x-5, this.y+5);
        this.canvas2dContext.lineTo(this.x+5, this.y-5);
        this.canvas2dContext.stroke();
    }

}

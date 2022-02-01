class Carre {
    constructor(x, y, canvas,delay) {
        this.canvas = canvas;
        this.canvas2dContext = this.canvas.getContext("2d");
        this.direction = 'droite';
        this.x = x;
        this.y = y;
        this.delay = delay;
    }

    draw() {
        this.canvas2dContext.fillStyle = "red";
        this.canvas2dContext.fillRect(this.x, this.y, 50, 50);
    }

    clean() {
        this.canvas2dContext.clearRect(this.x, this.y, 50, 50);
    }

    update(time) {
        if (this.delay < time) {
            if (this.direction === 'droite') {
                this.x += 1;
            }
            else {
                this.x -= 1;
            }
            console.log(this.x, this.y);
            if (this.direction === 'droite' && this.x >= 600 - 50) {
                this.direction = 'gauche';
            }
            else if (this.direction === 'gauche' && this.x <= 0) {
                this.direction = 'droite';
            }
        }
    }
}


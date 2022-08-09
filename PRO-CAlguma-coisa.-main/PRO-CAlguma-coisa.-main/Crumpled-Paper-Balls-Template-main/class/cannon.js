class Cannon
{
    constructor(x, y, width, heigth, angle) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = heigth;
        this.angle = angle;
    }

    display() {
        if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) {
            this.angle += 0.02;
        }

        if (keyIsDown(LEFT_ARROW) && this.angle < 1.45) {
            this.angle += -0.02;
        }

        push();
        translate(this.x, this.y);
        rotate(this.angle);
        fill("#676e6a6");
        rect(-20, -20, this.width, this.heigth);
        arc(this.x - 40, this.y + 80, 180, 230, PI, TWO_PI);
        noFill();
        pop();
    }
}
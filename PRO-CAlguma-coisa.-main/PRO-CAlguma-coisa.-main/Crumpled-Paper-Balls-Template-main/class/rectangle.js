class Rectangle
{
    constructor(x, y, w, h) {
        this.w = w;
        this.h = h;

        var options = {
            isStatic: true,
        }

        this.body = Bodies.rectangle(x, y, this.w, this.h, options);
        World.add(world, this.body);
    }

    show() {
        var rectanglePos = this.body.position;

        push();
        translate(rectanglePos.x, rectanglePos.y);
        rectMode(CENTER);
        strokeWeight(2);
        fill(128, 128, 128);
        rect(0, 0, this.w, this.h);
        pop();
    }
}
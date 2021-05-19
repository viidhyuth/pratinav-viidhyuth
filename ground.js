class GROUND {

    constructor(x, y, w, h,) {
        var options = { isStatic: true };
        this.body = Matter.Bodies.rectangle(x, y, w, h, options);
        this.body2 = Matter.Bodies.rectangle(x, y - 10, w, h, options);
        this.width = w;
        this.height = h;
        this.image = loadImage("Ground.png");
        Matter.World.add(world, this.body);

    }

    display() {
         imageMode(CENTER);
         image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
       //fill("brown")

        rectMode(CENTER);
        rect(this.body2.position.x, this.body2.position.y, this.width, this.height);
        // rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}
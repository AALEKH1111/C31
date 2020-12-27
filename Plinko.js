class Plinko{
    constructor(x,y) {
        var options = {
            isStatic:true,
        }
        this.body = Bodies.circle(x,y,10,options);
        x = x;
        y = y;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,10);
        pop();
    }
}
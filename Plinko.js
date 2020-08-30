class Plinko{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.5,
            'isStatic': true
            
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        World.add(world, this.body);
      }
      display(){
       
        push();
        rectMode(CENTER)
        fill("orange")
        translate(this.body.position.x, this.body.position.y);
        ellipse(0,0,this.radius, this.radius);
        pop();
      }
}

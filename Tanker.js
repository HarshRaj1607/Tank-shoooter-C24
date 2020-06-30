class Tanker {
    constructor(x,y,radius) {
        var options = {
            isStatic : true
        }
    
        this.body = Bodies.ellipse(x,y,radius,options);
        this.radius = width;
        World.add(world, this.body);
    }  
    display() {
       var pos = this.body.position;
       ellipseMode(CENTER);
       fill("red");
       strokeWeight(3);
       stroke("white");
       ellipse(pos.x,pos.y,this.radius,options);
    }   
}
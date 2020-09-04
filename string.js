class String{
   constructor(body1,body2) {
        var options = {
            bodyA : body1,
            bodyB : body2,
            stiffness : 0.4,
            length : 10
        }
        this.string = Matter.Constraint.create(options);
        World.add(world,this.string);
   }
   display() {
       var posA = this.string.bodyA.position
       var posB = this.string.bodyB.position
       push();
       strokeWeight(5);
       line(posA.x,posA.y,posB.x,posB.y);
       pop();
   }
}
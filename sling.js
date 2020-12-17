class Sling {
constructor(bodyA,pointB){
var options={
 bodyA:bodyA, 
 pointB:pointB,
 stiffness:1.2,
 length:500,
}
this.pointB = pointB;
this.sling = Constraint.create(options);
World.add(world,this.sling);

}
display(){
    var pointA= this.sling.bodyA.position;
    var pointB= this.pointB;
 push()
 stroke(48,22,8);
 strokeWeight(3);
 line(pointB.x,pointB.y,pointA.x,pointA.y);
 pop();

}




}
class Launcher{
    constructor(a,b){
        var options={
            bodyA:a,
            pointB:b,
            stiffness:0.004,
            length:10

        }
        this.pointB = b;
        this.b1= Constraint.create(options);
        
        World.add(world,this.b1)
    }
    fly(){
        this.b1.bodyA = null;
    }

    display(){
        if(this.b1.bodyA){
        var posA = this.b1.bodyA.position;
        var pB = this.pointB;

        strokeWeight(3);
        line(posA.x,posA.y,pB.x,pB.y);}
    }

}
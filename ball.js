class ball{
    constructor(x,y){
        this.image = loadImage("paper.png")
        var option = {
           isStatic : false,
           restitution : 0.3,
           friction : 0.5,
           density:1.2,
        }
        this.ball=Bodies.circle(x,y,23,option);
        this.r=23
        World.add(world,this.ball)
    }
    display(){
        imageMode(RADIUS)
        var pos= this.ball.position;
       
        image(this.image, pos.x, pos.y, this.r, this.r);
        }
    
    
}
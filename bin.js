class bin{
    constructor(x,y,w,h,angle){
        var option={
            isStatic:true
        }
        this.bin=Bodies.rectangle(x,y,w,h,option)
        this.width=w
        this.height=h
        World.add(world,this.bin)

    }
    display(){
        rectMode(CENTER)
        fill("brown")
        rect(this.bin.position.x,this.bin.position.y,this.width,this.height)
      
}
}
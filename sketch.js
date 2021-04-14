
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	binimage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	Engine.run(engine);

	ground = new Ground(400,350,800,20)
  b1 = new ball(100,50)
  bin1 = new bin(625,340,100,10)
  bin2 = new bin(570,295,10,100,)
  bin3 = new bin(680,295,10,100)
  //l1 = new Launcher(b1.ball,{x:100,y:50})
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  ground.display()
  b1.display()
  bin1.display()
  bin2.display()
  bin3.display()
  //l1.display()
  imageMode(CENTER)
  image(binimage,625,300,175,115)



  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === 32){
   Matter.Body.applyForce(b1.ball,b1.ball.position,{x:80,y:-85})
 }
}

/*function mouseDragged(){
  Body.setPosition(b1.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  l1.fly();
}*/



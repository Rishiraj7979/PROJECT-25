
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3, paperObject,groundObject;
var world;


function preload()
{
	//dustbinImg=loadImage(Dustbin.png);
}

function setup() {
	createCanvas(1200, 650);




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,650,width,20);
	dustbinleft = new Dustbin(1150,590,20,100);
	dustbinright = new Dustbin(950,590,20,100);
	dustbinbottom = new Dustbin(1050,630,200,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  drawSprites();

  paperObject.display();
  groundObject.display();
  dustbinleft.display();
  dustbinright.display();
  dustbinbottom.display();
 
}
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-115});
  }
}




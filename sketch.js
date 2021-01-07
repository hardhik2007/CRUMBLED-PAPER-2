
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var basket1,paper,basket2,basket3
var paper , paperSprite,paperSpriteA;
var ground,groundSprite,groundSpriteA;
function preload()
{
	groundSpriteA = loadImage("dustbingreen.png")
	paperSpriteA = loadImage("paper.png")
}

function setup() {
	createCanvas(1500, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,600,1200,20);
	groundSprite = createSprite(1000,500,200,120)
	groundSprite.addImage(groundSpriteA)
   groundSprite.scale = 0.6
	basket1 = new Basket(1060,500,20,100);
	basket2 = new Basket(940,500,20,100);
	basket3 = new Basket(1000,550, 150,20);
	paper = new Paper(400,300,70);
	paperSprite = createSprite( 400,300,10,10)
    paperSprite.addImage(paperSpriteA)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  basket1.display();
  basket2.display();
  basket3.display();
   paper.display();
   ground.display();
 //  keyPressed();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
		
		 
	}
}

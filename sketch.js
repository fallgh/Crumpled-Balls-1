
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin, paper, ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin()
	paper = new Paper(100,650,20)
	ground = Bodies.rectangle(width/2,690,width,10,
	{
    isStatic:true
	});
	World.add(world,ground)
	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  paper.display();
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW && gameState === "play") {
	  Matter.Body.applyForce(paper.body, paper.body.position, {
	 x:20,
	 y:-20,
	  });
	}
  }




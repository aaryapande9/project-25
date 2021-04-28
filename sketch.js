const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,dbLine,dbLine2,dbLine3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,100,40)

	ground = new Ground(400,685,780,30);
	
	dbLine = new Dustbin(550,620,20,100);
    dbLine2 = new Dustbin(610,660,100,20);
	dbLine3 = new Dustbin(670,620,20,100)
	
	


	Engine.run(engine);
  
}


function draw() {
  background("pink");
  rectMode(CENTER);

  Engine.update(engine);

  paper.display();

  dbLine3.display()

  ground.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.positon,{x:130,y:-145})
	}
}


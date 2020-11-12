var plat1Sprite, plat1Img;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	plat1Img = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plat1Sprite=createSprite(width/2, height-55,200,20);
	plat1Sprite.shapeColor = color("red");
	plat1Sprite.addImage(plat1Img);

	plat2Sprite=createSprite(width/2+100, height-95,20,100);
	plat2Sprite.shapeColor = color("red");

	plat3Sprite=createSprite(width/2-100, height-95,20,100);
	plat3Sprite.shapeColor = color("red");
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




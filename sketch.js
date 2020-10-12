const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var stand1;
var box1, box2, box3, box4, box5, box6, box7;
var box8, box9, box10, box11, box12;
var box13, box14, box15, box16;
var rock1;
var slingshot1;
var score = 0;

function preload(){
  

}



async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  
  var hour = datetime.slice(11,13);
  console.log(hour);
  if(hour>=06 && hour<18){
      background("orange");
  }
  else{
      background("black");
  }
}


function setup() {

  createCanvas(800,700);
  getBackgroundImg();

  engine = Engine.create();
  world = engine.world;
  
  
  // All the Bodies are made here
  ground1 = new Ground(400,650,775,30);
  stand1 = new Ground(595,485,350,20);
  box1 = new Box(665,475,30,40);
  box2 = new Box(635,475,30,40);
  box3 = new Box(605,475,30,40);
  box4 = new Box(575,475,30,40);
  box5 = new Box(545,475,30,40);
  box6 = new Box(515,475,30,40);
  box7 = new Box(485,475,30,40);
  box8 = new Box(635,405,30,40);
  box9 = new Box(605,405,30,40);
  box10 = new Box(575,405,30,40);
  box11 = new Box(545,405,30,40);
  box12 = new Box(515,405,30,40);
  box13 = new Box(605,375,30,40);
  box14 = new Box(575,375,30,40);
  box15 = new Box(545,375,30,40);
  box16 = new Box(575,325,30,40);
  rock1 = new Rock(200,400,60,50);
  slingshot1 = new SlingShot(rock1.body,{x: 200, y: 400});

}


function draw() {
  if(getBackgroundImg())
  ground1.display(); 
  stand1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  rock1.display();
  slingshot1.display();

  
  Engine.update(engine);
  textSize(20);
  text("Press Space Key for another chance",300,200);
  text("SCORE: " + score,100,200);
  
  
  drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(rock1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot1.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot1.attach(rock1.body);
     Matter.Body.setPosition(rock1.body,{x:200,y:400});
    
  }
}

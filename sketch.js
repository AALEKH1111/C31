const Engine = Matter.Engine;
const World= Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 250;

function setup() {
  createCanvas(490,600);
   engine = Engine.create();
   world = engine.world;

  ground = new Ground(width/2,590,width,15,"white");
  leftBorder = new Ground(2.5,height/2,5,height,"brown");
  rightBorder = new Ground(487.5,height/2,5,height,"brown");
  topBorder = new Ground(width/2,5,width,10,"brown");
  bottomBorder = new Ground(width/2,595,width,10,"brown");

  for(var i=5;i<=width;i=i+80){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }
  for(var i=40;i<=width;i=i+51){
    plinkos.push(new Plinko(i,80));
  }
  for(var i=20;i<=width-10;i=i+50){
    plinkos.push(new Plinko(i,140));
  }
  for(var i=40;i<=width;i=i+51){
    plinkos.push(new Plinko(i,200));
  }
  for(var i=20;i<=width-10;i=i+50){
    plinkos.push(new Plinko(i,260));
  }
}

function draw(){
  background(0); 
  Engine.update(engine);

  for(var i=0;i<divisions.length;i++){
    divisions[i].display()
  }
  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display()
  }
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for(var i=0;i<particles.length;i++){
    particles[i].display()
  }

  ground.display();
  topBorder.display();
  bottomBorder.display();
  leftBorder.display();
  rightBorder.display();
  
  drawSprites();
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var polygon;
var ground2;
var block8,block9,block10,block11,block12,block13,block14,block15,block16;
function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);
    block16 = new Box(390,115,30,40);
polygon=Bodies.circle(200,200,10);
World.add(world,polygon);
    slingShot=new Slingshot(polygon,{x:200,y:200})
    ground = new Ground(600,height,1200,20);
    ground2=new Ground(400,300,400,20);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    ground2.display();
    ellipseMode(RADIUS);
    console.log(polygon.position);
    ellipse(polygon.position.x,polygon.position.y,10,10);
    slingShot.display();    
}

function mouseDragged(){
   Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

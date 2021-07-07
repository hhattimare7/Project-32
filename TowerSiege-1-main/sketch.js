const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var stand1, stand2, stone, sling1, stoneImg;

var block1, block2, block3, block4, block5, block6, block7;
var block11, block12, block13, block14, block15;
var block21, block22, block23;
var block31;

var block41, block42, block43, block44, block45;
var block51, block52, block53;
var block61;


function setup(){
createCanvas(1000,500);

engine = Engine.create();
world = engine.world;

stand1 = new Ground(350,350,150,10);
stand2 = new Ground(600,200,150,10);

stone = new Stone(100,250,30,30);
sling = new SlingShot(stone.body,{x:150, y:270});

block1 = new Box(290,340,20,40);
block2 = new Box(310,340,20,40);
block3 = new Box(330,340,20,40);
block4 = new Box(350,340,20,40);
block5 = new Box(370,340,20,40);
block6 = new Box(390,340,20,40);
block7 = new Box(410,340,20,40);

block11 = new Box(310,290,20,40);
block12 = new Box(330,290,20,40);
block13 = new Box(350,290,20,40);
block14 = new Box(370,290,20,40);
block15 = new Box(390,290,20,40);

block21 = new Box(330,240,20,40);
block22 = new Box(350,240,20,40);
block23 = new Box(370,240,20,40);

block31 = new Box(350,190,20,40);

block41 = new Box(560,190,20,40);
block42 = new Box(580,190,20,40);
block43 = new Box(600,190,20,40);
block44 = new Box(620,190,20,40);
block45 = new Box(640,190,20,40);

block51 = new Box(580,140,20,40);
block52 = new Box(600,140,20,40);
block53 = new Box(620,140,20,40);

block61 = new Box(600,90,20,40);

//block = new Box()

}

function draw(){
background(0);
Engine.update(engine);

stand1.display();
stand2.display();

sling.display();
stone.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

block11.display();
block12.display();
block13.display();
block14.display();
block15.display();

block21.display();
block22.display();
block23.display();

block31.display();

block41.display();
block42.display();
block43.display();
block44.display();
block45.display();

block51.display();
block52.display();
block53.display();

block61.display();

}



function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if (keyCode === 32){
        sling.attach(stone.body);
    }
}
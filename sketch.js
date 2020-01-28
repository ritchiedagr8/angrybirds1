const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bird1,ground1,box2,box3;
var box4, box5, log1, pig2;
var pig1, box1, log2;
var log3, log4;

function setup(){
    var canvas = createCanvas(1500,400);
    engine = Engine.create();
    world = engine.world;

    log1 = new Log(900, 370, 270, PI/2);
    log2 = new Log(900, 280, 270, PI/2);
    log3 = new Log(850, 200, 100, PI/5);
    log4 = new Log(950, 200, 125, -PI/5);
    pig2 = new Pig(900, 380);
    box1 = new Box(900, 270);
    bird1 = new Bird(200,300);
    pig1 = new Pig(900, 350);
    box3 = new Box(800, 380);
    box5 = new Box(1000, 380);
    box4 = new Box(1000, 290);
    ground1 = new ground(800,390,2000,20);
    box2 = new Box(800,290);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    bird1.display();
    log1.display();
    box4.display();
    box5.display();
    ground1.display();
    pig1.display();
    box3.display();
    box2.display();
    log2.display();
    box1.display();
    pig2.display();
    log3.display();
    log4.display();
}
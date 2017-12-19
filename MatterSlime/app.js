let Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies,
Body = Matter.Body,
Vertices= Matter.Vertices;

let engine;
let world;
let player
let canvasHeight = 1000;
let canvasWidth = 1000;

let gameBodies = [];
function setup() {

let canvas = createCanvas(canvasHeight, canvasWidth);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
player= new Player(world, Body,Vertices, World);


}


function draw() {
    
    background(51);
    player.show();
    noLoop();
}
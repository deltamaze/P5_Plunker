let Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;
let engine;
let world;
let canvasHeight = 400;
let canvasWidth = 400;

let gameBodies = [];
function setup() {

let canvas = createCanvas(canvasHeight, canvasWidth);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
let player = new Player(engine, Bodies, World);


}


function draw() {
    //player.show();
}
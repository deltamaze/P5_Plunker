let engine;
let world;
let player;
let boundry;
let canvasHeight = 1000;
let canvasWidth = 1000;

let gameBodies = [];
function setup() {

  let canvas = createCanvas(canvasHeight, canvasWidth);
  engine = Matter.Engine.create();
  world = engine.world;
  Matter.Engine.run(engine);
  player = new Player(world);
  boundry = new Boundry(world);

}


function draw() {

  background(51);
  player.show();
  boundry.show();
}
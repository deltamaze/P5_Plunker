let Engine = Matter.Engine,
    World = Matter.World,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Bodies = Matter.Bodies;

let engine;
let world;
let mouse;
let canvasHeight = 400;
let canvasWidth = 400;
let plinkCols = 10;
let plinkRows = 10;

let particles = [];
let boundries = [];
let isMousePressed = false;
let vertSpacing = canvasWidth / plinkCols;
let horSpacing = canvasHeight / plinkRows;

function setup() {
    let canvas = createCanvas(canvasHeight, canvasWidth);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    canvasMouse = Mouse.create(canvas.elt);
    canvasMouse.pixelRatio = pixelDensity();
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: canvasMouse
    });
    World.add(world, mouseConstraint);
    newBoundry();
    newParticle();
    


}
function newParticle() {
    let p = new GameEllipse(250, 20, 8, world, Bodies, World);
    particles.push(p)
}
function newBoundry() {
    let b = new Boundry(200,400,100,400,world, Bodies, World);
    boundries.push(b);
}

function draw() {
    // if (frameCount % 60 === 0) {
    //     newParticle();
    // }
    background(51);
    //Engine.update(engine);
    particles.forEach(function (particle) {
        particle.show();
    });
    boundries.forEach(function (boundry) {
        boundry.show();
    });

}
// function mousePressed() { //player Input
//     isMousePressed = true;
// }
function mouseReleased() { //player Input
    isMousePressed = false;
}
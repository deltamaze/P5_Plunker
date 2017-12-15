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
let plinkos = [];
let player;
let isMousePressed = false;
let vertSpacing = canvasWidth / plinkCols;
let horSpacing = canvasHeight / plinkRows;

function setup() {
    let canvas = createCanvas(canvasHeight, canvasWidth);
    engine = Engine.create();
    world = engine.world;
    canvasMouse = Mouse.create(canvas.elt);
    canvasMouse.pixelRatio = pixelDensity();
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: canvasMouse
    });
    World.add(world, mouseConstraint);
    //create player
    player = new Player(250, 50, 8, world, Bodies, World);

    newParticle();
    for (let y = 0; y < plinkRows; y++) {
        for (let x = 0; x < plinkCols; x++) {
            let yOffset = 80
            let xOffset = 10;
            if (y % 2 === 0) {
                xOffset = 30
            }
            //(x, y, r,engineWorld,matterJsBodies,matterJsWorld) 
            let p = new Plink((x * vertSpacing) + xOffset, (y * horSpacing) + yOffset, 5, world, Bodies, World);
            plinkos.push(p);
        }
    }

}
function newParticle() {
    let p = new Particle(250, 20, 8, world, Bodies, World);
    particles.push(p)
}

function draw() {
    if (frameCount % 60 === 0) {
        newParticle();
    }
    background(51);
    Engine.update(engine);
    particles.forEach(function (particle) {
        particle.show();
    });
    plinkos.forEach(function (plinko) {
        plinko.show();
    });
    if (player) {
        player.show();
    }
    //console.log(isMousePressed);
    if(isMousePressed === true)
    {
        //console.log("test");
        player.body.positionPrev.x = player.body.position.x;
        player.body.position.x = player.body.position.x+10;
        console.log(world);
    }

}
// function mousePressed() { //player Input
//     isMousePressed = true;
// }
function mouseReleased() { //player Input
    isMousePressed = false;
}
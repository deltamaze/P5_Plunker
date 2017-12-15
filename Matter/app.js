let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine;
let world;
let canvasHeight = 400;
let canvasWidth = 400;
let plinkCols = 10;
let plinkRows = 10;

let particles = [];
let plinkos = [];

let vertSpacing = canvasWidth / plinkCols;
let horSpacing = canvasHeight / plinkRows;

function setup() {
    createCanvas(canvasHeight, canvasWidth);
    engine = Engine.create();
    world = engine.world;
    newParticle();
    for(let y = 0; y < plinkRows; y++)
    {
        for (let x = 0;x < plinkCols; x++)
        {
            let yOffset = 80
            let xOffset = 10;
            if (y  % 2 === 0)
            {
                xOffset = 30
            }
            console.log(x,y,xOffset,);
            //(x, y, r,engineWorld,matterJsBodies,matterJsWorld) 
            let p = new Plink((x*vertSpacing)+xOffset,(y*horSpacing)+yOffset,5,world,Bodies,World);
            plinkos.push(p);
        }
    }
    
} 
function newParticle(){
    let p = new Particle(250,50,8,world,Bodies,World);
    particles.push(p)
}

function draw() {
    if(frameCount % 60 ===0)
    {
        newParticle();
    }
    background(51);
    Engine.update(engine);
    particles.forEach(function(particle){
        particle.show();
    });
    plinkos.forEach(function(plinko){
        plinko.show();
    });
    


}
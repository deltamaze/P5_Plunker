var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
let world;
var particles = [];

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    var p = new Particle(300,50,10,world,Bodies,World);
    particles.push(p)
}
function draw() {
    if(frameCount % 10 ===0)
    {
        console.log(particles);
        var p = new Particle(280,50,10,world,Bodies,World);
        particles.push(p);
    }
    background(51);
    Engine.update(engine);
    particles.forEach(function(particle){
        particle.show();
    });
    


}
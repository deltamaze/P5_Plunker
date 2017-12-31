let graphics;
function setup() {
  createCanvas(400,600);
  pixelDensity(1);
  graphics = createGraphics(400,300);
  graphics.background(0);
  image(graphics,0,0);//loading graphics, with x y pos
  //fill(255,0,255);
  //cursor = ellipse(0, 0,20);

}
function draw() {
  background(51);
  if (mouseIsPressed) {
    graphics.fill(255);
    graphics.stroke(255);
    graphics.ellipse(mouseX, mouseY, 64);
  }
  image(graphics,0,0);
  
  fill(255,0,255);
  push();
  translate(mouseX, mouseY)
  ellipse(0, 0,20);
  pop();
  
}

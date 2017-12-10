function setup() {
    createCanvas(600, 400);
    //frameRate(1);
}

function draw() {
    background(255,35,35);

     stroke(255);
     noFill();
     drawCircle(300,200,300,1)
     noLoop();

}
function drawCircle(x,y,d,depth)
{
    if(depth > 7)
    { return;}
    ellipse(x,y,d)
    drawCircle(x + d * .5,y,d*.5,depth+1)
    drawCircle(x - d * .5,y,d*.5,depth+1)
    drawCircle(x,y+d*.5,d*.5,depth + 1);
}
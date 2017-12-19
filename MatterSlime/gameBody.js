class GameBody {

    constructor(engineWorld, matterBody, matterJsWorld) {
        //let ellipseBody = matterJsBodies.circle(x,y,r);
        matterBody.friction = 0;
        matterBody.restitution = .95;
        matterJsWorld.add(engineWorld, matterBody);
        this.body = matterBody;
        //default color is white, used by p5
        this.colorRed = 255;
        this.colorGreen = 255;
        this.colorBlue = 255;
        console.log(this.body);
    }
    //private
    polygon(x, y, radius, npoints) {
        var angle = TWO_PI / npoints;
        beginShape();
        for (var a = 0; a < TWO_PI; a += angle) {
            var sx = x + cos(a) * radius;
            var sy = y + sin(a) * radius;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }
    //public
    show() {
        fill(this.colorRed, this.colorGreen, this.colorBlue);
        stroke(this.colorRed, this.colorGreen, this.colorBlue);
        push();
        translate(width * 0.8, height * 0.5);
        rotate(frameCount / -100.0);
        polygon(0, 0, 70, 7);
        pop();
    }

}
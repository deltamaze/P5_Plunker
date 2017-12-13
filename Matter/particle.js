class Particle {

    constructor(x, y, r,engineWorld,matterJsBodies,matterJsWorld) {
        this.body = matterJsBodies.circle(x, y, r);
        this.r = r;
        World.add(engineWorld, this.body);
    }
    show() {
        fill(255);
        stroke(255);
        push();
        var pos = this.body.position;
        translate(pos.x, pos.y)
        ellipse(0, 0, this.r * 2);
        pop();
    }
}
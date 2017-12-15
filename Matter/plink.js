class Plink {
    
        constructor(x, y, r,engineWorld,matterJsBodies,matterJsWorld) {
            this.body = matterJsBodies.circle(x, y, r);
            this.r = r;
            this.body.isStatic = true;
            World.add(engineWorld, this.body);
        }
        show() {
            fill(0,255,0);
            stroke(0,255,0);
            push();
            var pos = this.body.position;
            translate(pos.x, pos.y)
            ellipse(0, 0, this.r * 2);
            pop();
        }
    }
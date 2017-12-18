class Boundry{
    constructor(x,y,height,width, engineWorld, matterJsBodies, matterJsWorld)
    {
        let boundryBody = matterJsBodies.rectangle(x,y,width,height);
        boundryBody.friction=3;
        boundryBody.restitution=.6;
        boundryBody.isStatic = true;
        matterJsWorld.add(engineWorld, boundryBody);
        this.h = height;
        this.w = width;
        this.body = boundryBody;
        //default color is white
        this.colorRed = 127;
        this.colorGreen = 127;
        this.colorBlue = 127;
    }
    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        fill(this.colorRed,this.colorGreen,this.colorBlue);
        stroke(this.colorRed,this.colorGreen,this.colorBlue);
        rect(0, 0, this.w,this.h);
        pop();
    }
}
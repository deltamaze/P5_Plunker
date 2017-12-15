class GameEllipse {

    constructor(ellipseBody, engineWorld, matterJsBodies, matterJsWorld) {
        matterJsWorld.add(engineWorld, ellipseBody);
        this.body = ellipseBody;
        //default color is white
        this.colorRed = 255;
        this.colorGreen = 255;
        this.colorBlue = 255;
    }
    show() {
        fill(this.colorRed,this.colorGreen,this.colorBlue);
        stroke(this.colorRed,this.colorGreen,this.colorBlue);
        push();
        let pos = this.body.position;
        let radius = this.body.circleRadius;
        translate(pos.x, pos.y)
        ellipse(0, 0, radius * 2);
        pop();
    }
}
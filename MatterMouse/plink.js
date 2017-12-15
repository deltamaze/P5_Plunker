class Plink extends GameEllipse {

    constructor(x, y, r, engineWorld, matterJsBodies, matterJsWorld) {
        let body = matterJsBodies.circle(x, y, r);
        body.isStatic = true;
        body.restitution = 5;
        super(body, engineWorld, matterJsBodies, matterJsWorld);

        //change color to Green
        this.colorRed = 0;
        this.colorGreen = 255;
        this.colorBlue = 0;
    }
    
}
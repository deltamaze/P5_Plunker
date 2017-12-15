class Player extends GameEllipse {
    
        constructor(x, y, r, engineWorld, matterJsBodies, matterJsWorld) {
            let body = matterJsBodies.circle(x, y, r);
            body.isStatic = true;
            body.restitution = 5;
            body.label = "player";
            super(body, engineWorld, matterJsBodies, matterJsWorld);

            this.colorRed = 255;
            this.colorGreen = 0;
            this.colorBlue = 255;
        }
        
    }
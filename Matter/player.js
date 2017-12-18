class Player extends GameEllipse {
    
        constructor(x, y, r, engineWorld, matterJsBodies, matterJsWorld) {
            let options = {gravity : 0}
            let body = matterJsBodies.circle(x, y, r,options);
            //body.isStatic = true;
            body.restitution = 0;
            body.label = "player";
            console.log(body);
            //body.gravity = 0 ;
            super(body, engineWorld, matterJsBodies, matterJsWorld);

            this.colorRed = 255;
            this.colorGreen = 0;
            this.colorBlue = 255;
        }
        
    }
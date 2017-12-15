class Particle extends GameEllipse {

    
    constructor(x, y, r, engineWorld, matterJsBodies, matterJsWorld) {
        let body = matterJsBodies.circle(x, y, r);
        body.restitution = 5;
        super(body, engineWorld, matterJsBodies, matterJsWorld);
    }
}
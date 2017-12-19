class Player  extends GameBody {
    constructor( engineWorld, matterJsBodies, matterJsWorld) {
        // //let ellipseBody = matterJsBodies.circle(x,y,r);
        // matterJsBody.create();
        // matterBody.friction=0;
        // matterBody.restitution=.95;
        // matterJsWorld.add(engineWorld, matterBody);
        // this.body = matterBody;
        // //default color is white, used by p5
        // this.colorRed = 255;
        // this.colorGreen = 255;
        // this.colorBlue = 255;

        let radius = 10;
        let maxSides = 25;
        let x =200
        let y=200;
        var options = {
            label: 'Circle Body',
            circleRadius: radius
        };
        
        // approximate circles with polygons until true circles implemented in SAT
        maxSides = maxSides || 25;
        var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));

        // optimisation: always use even number of sides (half the number of unique axes)
        if (sides % 2 === 1)
            sides += 1;

        super(engineWorld, matterJsBodies.polygon(x, y, sides, radius, options), matterJsWorld);
    }
}
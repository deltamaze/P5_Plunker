class Boundry extends GameBody {
    constructor(engineWorld) {
      let maxSides = 10;
      let x = 500
      let y = 600;
      let height = 200
      let width = 1000;
      var options = {
        label: 'Wall',
        isStatic: true,
        friction: 1,
        restitution: 0
  
      };
      let newBody = Matter.Bodies.rectangle(x,y,width,height,options);
  
      super(engineWorld, newBody);
    }
  }
  
  
  
  
class Player extends GameBody {
  constructor(engineWorld) {
    let radius = 100;
    let maxSides = 100;
    let x = 200
    let y = 200;
    var options = {
      label: 'Circle Body',
      circleRadius: radius,
      isStatic: false,
      friction: 0,
      restitution: .95

    };

    // approximate circles with polygons until true circles implemented in SAT
    maxSides = maxSides || 25;
    var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));

    // optimisation: always use even number of sides (half the number of unique axes)
    if (sides % 2 === 1) {
      sides += 1;
    }

    var theta = 2 * Math.PI / sides,
      path = '',
      offset = theta * 0.5;
    console.log(theta);
    //half cirlce, skip the bottom half of the circle, set i to sides/2
    for (var i = sides/2; i < sides; i += 1) {
      var angle = offset + (i * theta),
        xx = Math.cos(angle) * radius,
        yy = Math.sin(angle) * radius;

      path += 'L ' + xx.toFixed(3) + ' ' + yy.toFixed(3) + ' ';
    }
    options.position = { x: x, y: y };
    options.vertices = Matter.Vertices.fromPath(path)

    if (options.chamfer) {
      var chamfer = options.chamfer;
      polygon.vertices =  Matter.Vertices.chamfer(polygon.vertices, chamfer.radius,
        chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
      delete options.chamfer;
    }

    let newBody = Matter.Body.create(options);


    super(engineWorld, newBody);
    this.colorBlue = 0;
    this.colorRed = 0;
    this.colorGreen = 250;
  }
}




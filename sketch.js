let gantiWarna = false;
function setup() {
  createCanvas(800, 800, WEBGL); 
}

function draw() {
  // R, G & B values.
  background(255, 204, 0);

  describe('A canvas with a yellow background.');


  // Enable orbiting with the mouse.
  orbitControl();

  if (gantiWarna === true) {
    let colors = color("#00FA9A");
    ambientLight(colors);
  }

  // Draw the cone.
  // Set its radius to 30 and height to 50.
  // Set its detailX to 24 and detailY to 2.
  cone(150, 250, 24, 6);
 
}

function doubleClicked() {
  gantiWarna = true;
}
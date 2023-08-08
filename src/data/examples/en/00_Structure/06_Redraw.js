/*
 * @name Redraw
 * @arialabel Horizontal white line across a black background that moves higher on the screen with each mouse click
 * @description The redraw() function makes draw() execute once. In this example,
 * draw() is executed once every time the mouse is clicked.
 */

let y;

function setup() {
  createCanvas(720, 400);
  stroke(255);
    // Make the draw()function only run once.
  noLoop();
  y = height * 0.5;
}

function draw() {
  background(0);
  y = y - 4;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}

function mousePressed() {
  // When the mouse is clicked, run draw() one additional time.
  redraw();
}

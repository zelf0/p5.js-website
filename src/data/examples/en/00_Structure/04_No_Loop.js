/*
 * @name No Loop
 * @arialabel Horizontal white line across the middle of a black background
 * @description The noLoop() function causes draw() to only execute once.
 * Without calling noLoop(), the code inside draw() is run continually.
 */
let y;

function setup() {
  createCanvas(720, 400);
  stroke(255);
  noLoop();

  y = height * 0.5;
}

// The statements in draw() are usually executed until the
// program is stopped, but because noLoop() was called in setup(),
// the draw() function will only run once.
function draw() {
  background(0);
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}

/*
 * @name Loop
 * @arialabel Horizontal white line on a black background that moves from the bottom to the top of the screen parallel to the x-axis
 * @description If noLoop() is run in setup(), the code in draw() 
 * is only run once. The loop() function undoes noLoop() and causes
 * draw() to run continuously again.
 */
let y = 0;

function setup() {
  createCanvas(720, 400); 
  stroke(255); 
  frameRate(30);
  // Make the draw()function only run once.
  noLoop();
}

function draw() {
  background(0);
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}

function mousePressed(){
  // When the mouse is clicked, continue looping the 
  // draw() function as usual when noLoop() isn't in effect.
  loop();
}

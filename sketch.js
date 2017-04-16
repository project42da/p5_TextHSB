var speed = 0.05;
var radius = 10.0;
var angle = 0.0;
var img;

function setup() { 
  createCanvas(400, 600);
  img = loadImage("./text.png");
  colorMode(HSB,100);
  noStroke(); 
  smooth();

}
function draw() {
  angle += speed;
  cosval = cos(angle);
  x = 20 + (cosval * radius);

  sinval = sin(angle);
  y = 20 + (sinval * radius);

  fill(y*2,x*2, 100, 100);
  rect(0, 0, width, height);
  imageMode(CENTER);
  image(img, 200 ,300);
  tint(y*2,x*2, 100, 100);

  fill(y*2,x*2,100);
  ellipse(x,y,5,5);
}
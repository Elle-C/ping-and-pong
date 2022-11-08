var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var score = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Background
  background(0);
  fill(255);
  
  // Score
  textSize(24);
  text("Score: " + score, 10, 25);


  rect(0,windowHeight-15, 90, 15);
  // TO DO 1: Bringe den Balken dazu der Maus auf der x-Achse zu folgen. 

  xBall += xSpeed;
  ellipse(xBall, windowHeight/2, 20, 20);
  // TO DO 2: Schaffst du es, dass sich der Ball frei bewegt?

  if(xBall>windowWidth-10){
    xSpeed *= -1;
  } 
  // TO DO 3: Lass den Ball von den Seitenrändern abprallen (windowWidth/windowHeight)

  // TO DO 4: Lass den Ball vom Balken aprallen, falls sie sich berühren

}

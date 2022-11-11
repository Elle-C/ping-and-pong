// Farbpalette inspiriert von Circles within a Circle
let rot = {rot:242,grun:21,blau:5};
let rose  = {rot:232,grun:155,blau:201}; 
let blau  = {rot:0,grun:55,blau:158}; 
let turkis  = {rot:95,grun:201,blau:193}; 
let lila  = {rot:168,grun:82,blau:158}; 
let orange  = {rot:230,grun:119,blau:64}; 
let gelb  = {rot:245,grun:205,blau:76};
colorPalette = [rot, rose, blau, turkis, lila, orange, gelb];

var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var score = 0
let d = 50;

function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {

  // Background
  background(250,238,232);
  fill(0);

  // Score
  textSize(24);
  text("Score: " + score, 10, 25);
  strokeWeight(5)

   // Kommentar entfernen, um die Farbpalette anzuzeigen
  for (let i=0; i<colorPalette.length; i++){
    push()
    translate(300,300)
    fill(colorPalette[i].rot,colorPalette[i].grun,colorPalette[i].blau,150)
    rect(100*i/2,100*i/2,200,200)
    pop()
  }

  //Paddles
  rect(mouseX,windowHeight-15, 90, 15);
  rect(mouseX,0, 90, 15);

  
  //Ball
  yBall += ySpeed;
  xBall += xSpeed;

  ellipse(xBall, yBall, d);

  // if(xBall>windowWidth-(d/2) || xBall<d/2){
  //   xSpeed *= -1;
  // } 

  // TO DO 2: Schaffst du es, dass sich der Ball frei bewegt?
  if(xBall>windowWidth-10 || xBall < 10){
    xSpeed *= -1;
  } 
  if(yBall>windowHeight-10 || yBall < 10){
    ySpeed *= -1;
  } 

  // TO DO 4: Lass den Ball vom Balken aprallen, falls sie sich berühren
  // TO DO: einen Punktzähler erstellen
  // TO DO: Einen Startbildschirm programmieren
  // TO DO: Programmieren Sie einen Endbildschirm
  // TO DO: Stil das Spiel
  
}

// Farbpalette inspiriert von Circles within a Circle
let rot = {rot:242,grun:21,blau:5};
let rose  = {rot:232,grun:155,blau:201}; 
let blau  = {rot:0,grun:55,blau:158}; 
let turkis  = {rot:95,grun:201,blau:193}; 
let lila  = {rot:168,grun:82,blau:158}; 
let orange  = {rot:230,grun:119,blau:64}; 
let gelb  = {rot:245,grun:205,blau:76};
colorPalette = [rot, rose, blau, turkis, lila, orange, gelb];

let xBall;
let yBall;
let xSpeed = (4,7); 
let ySpeed = (-7,-4); 
let score1 = 0;
let score2 = 0;

//um die Kontrolle über die Elementgrößen zu haben, habe ich sie hier angegeben 
let ball;
let d = 50;
let paddleLength = 190;
let paddleDepth = 15;
let color=0;

function setup() {
createCanvas(windowWidth, windowHeight);
//damit der Ball in der Mitte beginnt, habe ich sie hier mit windowWidth + Height angegeben
xBall = Math.floor(Math.random() * windowWidth/2);
yBall = windowHeight/2;
}

function draw() {
// Background
  background(250,238,232);
  fill(0);
  strokeWeight(5);

// Kommentar entfernen, um die Farbpalette anzuzeigen
  for (let i=0; i<colorPalette.length; i++){
  push();
  translate(300,300);
  fill(colorPalette[i].rot,colorPalette[i].grun,colorPalette[i].blau,150);
  rect(100*i/2,100*i/2,200,200);
  pop();
  }

// Functions
  move();
  bounce();
  paddleHit();
  points();

// Scoreboard
  textSize(24);
  text("Player One: " + score1, 10, windowHeight/4);
  text("Player Two: " + score2, 10, 3*windowHeight/4);

  //Paddles
  paddleOne = new Paddle (windowHeight-paddleDepth, 0);
  paddleOne.show();
  paddleTwo = new Paddle (0,-1);
  paddleTwo.show();

  //Ball
  ball = new Ball()
  ball.show();
}

function move() {
  yBall += ySpeed;
  xBall += xSpeed;
}

function bounce() {
  if(xBall>windowWidth-d/2 || xBall < d/2){
    xSpeed *= -1;
    //Ich habe diese Farbwechselfunktion zum Spass hinzugefügt
    color += 1;
    if(color>colorPalette.length-1){
      color=0;
    }
  } 
  //Ich habe diese Zeile entfernt, damit der Ball über den oberen/unteren 
  //Rand des Fensters hinausgeht, aber ich habe sie hier kommentiert gelassen, 
  //da sie gut für die Fehlersuche ist
  /* if(yBall>windowHeight-d/2 || yBall < d/2){
    ySpeed *= -1;
  } */
}

  //einen Punktzähler erstellen
  function points() {

    if (yBall == windowHeight) {
      score1 ++}
  
    if (yBall == 0){
      score2 ++}
  }

  //Lass den Ball vom Balken aprallen, falls sie sich berühren
function paddleHit() {
  if ((xBall > mouseX-paddleLength/2 && xBall < mouseX+paddleLength/2) && (yBall == windowHeight-paddleDepth-d/2)) {
    ySpeed *= -1;
  }

  if ((xBall > mouseX-paddleLength/2 && xBall < mouseX+paddleLength/2) && (yBall == paddleDepth+d/2)) {
    ySpeed *= -1;
  }
}

class Paddle {
  constructor(yPaddle, ySurface) {
    this.posX = mouseX-paddleLength/2;
    this.posY = yPaddle;
    this.length = paddleLength;
    this.depth= paddleDepth;
    this.playingSurface = line(this.posX, yPaddle+(-this.depth*ySurface),this.posX+this.length, yPaddle+(-this.depth*ySurface));
  }

  show() {
    this.playingSurface;
    //rect(this.posX,this.posY, this.length, this.depth);
  }
}

class Ball {
  constructor() {
  this.xPos = xBall;
  this.yPos = yBall;
  this.d = d;
  this.color=color;
  }

  show() {
    push();
    stroke(255)
    fill(colorPalette[this.color].rot,colorPalette[this.color].grun,colorPalette[this.color].blau,150)
    ellipse(this.xPos, this.yPos, this.d);
    pop();
  }
}
  // TO DO: Den Ball zurücksetzen 
  // TO DO: Einen Startbildschirm programmieren
  // TO DO: Programmieren Sie einen Endbildschirm
  // TO DO: Stil das Spiel
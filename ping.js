// Farbpalette inspiriert von Circles within a Circle
let rot = {rot:242,grun:21,blau:5};
let rose  = {rot:232,grun:155,blau:201}; 
let blau  = {rot:0,grun:55,blau:158}; 
let turkis  = {rot:95,grun:201,blau:193}; 
let lila  = {rot:168,grun:82,blau:158}; 
let orange  = {rot:230,grun:119,blau:64}; 
let gelb  = {rot:245,grun:205,blau:76};
colorPalette = [rot, rose, blau, turkis, lila, orange, gelb];

let circle;
let circles = [];
let circleColor = 0;
let lines = []

let xBall;
let yBall;
let xSpeed = (4,7); 
let ySpeed = (-7,-4); 

let gameState = 0;

let score1 = 0;
let score2 = 0;

let ball;
let d = 50;
let color=0;

let paddleLength = 250;
let paddleDepth = 20;

function setup() {
createCanvas(windowWidth, windowHeight);
xBall = Math.floor(Math.random() * windowWidth/2);
yBall = windowHeight/2;
}

function draw() {
background(250,238,232);
strokeWeight(5);
textSize(24);
textAlign(CENTER);

push();
noStroke();
push();
fill(turkis.rot, turkis.grun, turkis.blau, 100);
beginShape(QUADS);
vertex(windowWidth/6, 0);
vertex(windowWidth/3, 0);
vertex(windowWidth, 7*windowHeight/12);
vertex(windowWidth, 11*windowHeight/12);
endShape();
pop();

console.log(circles)

push();
fill(gelb.rot, gelb.grun, gelb.blau, 100);
beginShape(QUADS);
vertex(windowWidth, 0);
vertex(11*windowWidth/12, 0);
vertex(0, 3*windowHeight/4);
vertex(0, windowHeight);
vertex(windowWidth/12, windowHeight);
endShape();
pop();
pop();

if (gameState == 0) {startGame();
} else if (gameState == 1) {playGame();
} else if (gameState == 2) {finishGame();}

if (score1 + score2 == 5 ){gameState = 2;}

for (let line of lines)
line.show();  
for (let circle of circles)
circle.show(); 
}

function startGame() {
  text ("CLICK TO START", width/2, height/2);
}

function mousePressed() {
  if(gameState == 0) {
    gameState = 1;
  }
}

function playGame() {
  // Background
  fill(0);

  // Functions
  move();
  bounce();
  paddleHit();
  reset();

  // Scoreboard
  //textSize(24);
  //text("Player One: " + score1, 10, windowHeight/4);
  //text("Player Two: " + score2, 10, 3*windowHeight/4);

  //Paddles
  paddleOne = new Paddle (windowHeight-paddleDepth, 0);
  paddleOne.show();
  paddleTwo = new Paddle (0,-1);
  paddleTwo.show();

  //Ball
  ball = new Ball()
  ball.show();
}

function finishGame() {
  text ("GAME OVER", width/2, height/2);
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
 /*  if(yBall>windowHeight-d/2 || yBall < d/2){
    ySpeed *= -1;
  } */
}

  //Lass den Ball vom Balken aprallen, falls sie sich berühren
function paddleHit() {
  if ((xBall > mouseX-paddleLength/2 && xBall < mouseX+paddleLength/2) && (yBall > windowHeight-paddleDepth-d/2)) {
    ySpeed *= -1;
    xSpeed *= -1;
    lines.push(new Line((random(windowWidth/4,3*windowWidth/4)),(random(windowHeight/4,3*windowHeight/4)),(random(windowWidth/4,3*windowWidth/4)),(random(windowHeight/4,3*windowHeight/4)))); }

  if ((xBall > mouseX-paddleLength/2 && xBall < mouseX+paddleLength/2) && (yBall < paddleDepth+d/2)) {
    ySpeed *= -1;
    xSpeed *= -1;
    circles.push(new Circle((random(windowWidth/4,3*windowWidth/4)),(random(windowHeight/4,3*windowHeight/4)),(random(100,400)) ));
    circleColor++}
}

function reset() {
      if (yBall < -d/2) {
      yBall = windowHeight/2;
      score2++
    }
      if (yBall > windowHeight + d/2) {
      yBall = windowHeight/2;
      score1++
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

class Line {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.weight = random(1,10);
    this.rotate = random(-1,1);
  }
  show() {
    push()
    strokeWeight(this.weight);
    rotate(this.rotate)
    line(this.x1, this.y1, this.x2, this.y2)
    pop()
  }
}

class Circle {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.color = circleColor;
  }

  show() {
    push();
    stroke(255)
    fill(colorPalette[this.color].rot,colorPalette[this.color].grun,colorPalette[this.color].blau,150)
    ellipse(this.x, this.y, this.radius);
    pop();
  }
}
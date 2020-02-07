var xPosition=100;  
var yPosition=100; 
var xSpeed=10;

function setup() {
    var myCanvas = createCanvas (600,250);
    frameRate(60);
    noStroke();
    background(random(255), random(255), random(255));
    myCanvas.parent(mySketch);
  }
  
  function draw() { 
    background (0); noStroke(); fill(255);
  if(xPosition<600 )  { 
    ellipse(xPosition, yPosition, 25, 25); 
    xPosition=xPosition+xSpeed;
  }
  if(xPosition>500 ){ 
    yPosition=yPosition+xSpeed; 
    xPosition=500;
  }
  if(yPosition>500){ 
    xSpeed=-xSpeed; 
    xPosition=xPosition+xSpeed; 
    yPosition=500;
  }
  if(xPosition<100 ){ 
    yPosition=yPosition+xSpeed; 
    xPosition=100;
  }
  
  if(yPosition<100) {
    xSpeed=-xSpeed;
    xPosition=xPosition+xSpeed; 
    yPosition=101;
  }}
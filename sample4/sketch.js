let t = 0;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(30);

  
  fill(120, 80, 150);
  let rectX = 60 + sin(frameCount * 0.02) * 10;
  rect(rectX, 80, 420, 240);	


  fill(140, 220, 140);
  let rectY = 220 + cos(frameCount * 0.015) * 15;
  rect(480, rectY, 360, 300);


  let triScale = 1 + sin(frameCount * 0.03) * 0.2;
  push();
  translate(300, 200);
  scale(triScale);
  fill(30, 30, 120);
  triangle(0, -40, 60, 40, -60, 40);
  pop();


  let c = color((frameCount % 360), 80, 90);
  fill(c);

  ellipse(100, 100, 50, 50);
  ellipse(160, 120, 40, 40);
  ellipse(220, 100, 60, 60);
  ellipse(280, 120, 40, 40);


  let pulse = 1 + sin(frameCount * 0.05) * 0.2;
  fill(255, 120, 170);
  ellipse(450, 80, 60 * pulse, 60 * pulse);


  stroke(255, 255, 80, 200 + sin(frameCount * 0.1) * 55);
  line(20, 380, 80, 320);
  line(40, 380, 100, 320);
  line(60, 380, 120, 320);


  push();
  translate(400, 83.33);        
  rotate(frameCount * 0.01);    
  fill(90, 160, 150);
  triangle(
    0, -33.33,   
    50, 16.67,   
    -50, 16.67   
  );
  pop();

  
  fill(90, 160, 150);
  let wobble = sin(frameCount * 0.07) * 5;
  triangle(100 + wobble, 300, 140 + wobble, 340, 60 + wobble, 340);
}


function keyPressed() {

  if (key === 's' || key === 'S') {
	saveGif("mySketch", 10);
    } 
  }



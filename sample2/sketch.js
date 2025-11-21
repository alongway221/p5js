function setup() {
createCanvas(400, 400);
background(255);

fill(255, 224, 189);
noStroke();
ellipse(width/2, height/2, 200, 220);

fill(0);
arc(width/2, height/2 - 20, 210, 220, PI, TWO_PI, CHORD);

fill(0);
beginShape();
vertex(140, 170);
bezierVertex(130, 100, 200, 80, 180, 170);
endShape(CLOSE);

beginShape();
vertex(220, 170);
bezierVertex(240, 90, 270, 120, 260, 170);
endShape(CLOSE);

fill(255);
ellipse(170, 190, 50, 50);
ellipse(230, 190, 50, 50);

fill(0);
ellipse(170, 190, 25, 25);
ellipse(230, 190, 25, 25);

noFill();
stroke(0);
strokeWeight(5);
rect(135, 160, 70, 60, 10);
rect(195, 160, 70, 60, 10);
line(205, 190, 195, 190);

stroke(50);
strokeWeight(2);
line(200, 200, 200, 220);

fill(255,100,100);
stroke(0);
strokeWeight(2);
arc(200, 260, 140, 80, 0, PI, CHORD);

noStroke();
fill(255, 180, 180, 180);
ellipse(150, 220, 30, 20);
ellipse(250, 220, 30, 20);

fill(255, 224, 189);
rect(180, 300, 40, 50);

fill(255, 165, 0);
arc(200, 330, 180, 120, 0, PI, CHORD);

fill(200, 0, 0);

beginShape();
vertex(200, 300);
vertex(190, 320);
vertex(200, 340);
vertex(210, 320);
endShape(CLOSE);

triangle(190, 340, 210, 340, 200, 380);
}
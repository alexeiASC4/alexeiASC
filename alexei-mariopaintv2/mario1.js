function setup(){
    createCanvas(600,600);
    background(230);

fill(100);
ellipse(100,100,100,100);

fill(150);
ellipse(300,100,100,100);

fill(200);
ellipse(500,100,100,100)
}

function mousePressed() {
  if (value == 100) {
    mouseDragged(100);
  } else if (value == 150){
      mouseDragged(150);}
      else if (value ==200) {
          mouseDragged(200);
      }
    value = 0;
}

function mouseDragged(a) {
    fill(a);
  ellipse(mouseX, mouseY, random([5],[35]),random([5],[35]));
 
  return false;
}


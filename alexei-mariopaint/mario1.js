function setup(){
    createCanvas(600,600);
}



function mouseDragged() {
    fill(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255));
  ellipse(mouseX, mouseY, random([5],[35]),random([5],[35]));
 
  return false;
}
function randShape(){
    var randNum = 
}
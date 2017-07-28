var y=0;
var x=0;
var randNum = Math.floor(Math.random()*2);
var color = ['blue','red'];
// var state = [[0,1,0,0,1],
//             [0,1,0,0,1],
//             [0,1,0,0,1],
//             [0,1,0,0,1],
//             [0,1,0,0,1]];

// function setup(){
//     createCanvas(600,600);
//     background('gray');
    
// }
// function draw(){
    
//     rect(x,y,119,119);
//     rect(x,y+120,119,119);
//     rect(x+120,y,119,119);
//     rect(x,y+240,119,119);
//     rect(x+240,y,119,1119);
//     rect(x,y+360,119,119);
//     rect(x+360,y,119,119);
//     rect(x,480,119,119);
//     rect(480,y,119,119);

//     y+=120;
//     x+=120;
    
//     }
    



var distances = [];
var maxDistance;
var spacer;

function setup() {
  createCanvas(600,600);
  maxDistance = dist(width/2, height/2, width, height);
  for (var x = 0; x < width; x++) {
    distances[x] = []; // create nested array
    for (var y = 0; y < height; y++) {
      var distance = dist(width/2, height/2, x, y);
      distances[x][y] = distance/maxDistance * 255;
    }
  }
  spacer = 120;
  noLoop();  // Run once and stop
}

function draw() {
  background(0);
  // This embedded loop skips over values in the arrays based on
  // the spacer variable, so there are more values in the array
  // than are drawn here. Change the value of the spacer variable
  // to change the density of the points
  for (var x = 0; x < width; x += spacer) {
    for (var y = 0; y < height; y += spacer) {
      stroke(distances[x][y]);
      rect(x,y,119,119);
    }
  }
}
function mousePressed(){
    
        
    if (mouseY>i && mouseY<i+120){
        fill(color[randNum]);
        rect(mouseX,mouseY,120,120);
    }
   
 
}


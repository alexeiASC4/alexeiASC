var a ="Please type below";
var x =0;
var word="";
var i=0;
var j=0;
var end = "You need to work on your typing";
var strings = ["What's good bro.", "All Star Code is wavy.","It's warm outside, but it's brick in here."];

function setup(){
    createCanvas(800,800);
    background('grey');
  
    textSize(32);
    text(a, 10, 30);
    
    
    

    text(strings[0] ,200,200);
    
}

function draw(){
    
   text("Score :  ", 10, 60);
   text(x,120,60); 
    
}

function keyTyped(){
   
   word+=key; 
   i++;
   
  text(word,300,300);
  
  if(word!=strings[0].substring(0,i)){
      text(end,200,500);
  }
    else if(i==strings[0].length){
        text("Good job",200,500);
        x+=10;
    }
     


   }



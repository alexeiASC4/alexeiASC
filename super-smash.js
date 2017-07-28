var prompt = require('prompt-sync') ();

var mashArray = ["Congo Jungle","Yoshi's Island","Mushroom Kingdom","Hyrule: Temple"];
var firstQuestion = [1,2,3,4];
var secondQuestion = ["Browser","Mario","Donkey Kong", "Link"];

function randNum(){
    var a = Math.floor(Math.random()*4);
    return a;
}

 function userInput(){
    var strikes = prompt("How many times will you strike?");
    firstQuestion.push(strikes);
    var opponent = prompt("Who will you choose to fight?");
    secondQuestion.push(opponent);
}


/*function outcome(a,b,c){
    console.log("You fought "+ secondQuestion[a]+ " in the " + mashArray[b] + " and hit them "+ firstQuestion[c]+ " times. Too bad. Mewtwo wins!");
}*/

function outcome(a,b,c){
    console.log("You fought "+ secondQuestion[a]+ " in the " + mashArray[b] + " and hit them "+ firstQuestion[c]+ " times. Too bad. "+ secondQuestion[a] + " wins!");
}


var answer = "yes";

var i=0;
while( answer == "yes" && i < 50){
       
    userInput();
    outcome(secondQuestion.length-1, randNum(), firstQuestion.length-1);
    answer= prompt("Do you want to try again?");
    i++;
}

console.log("Can't you even win once? Go train for another 500 years before playing challenging this game again! :-(");

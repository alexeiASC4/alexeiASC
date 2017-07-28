var playerChoice = 'r';

var choices = ['r','p','s'];
var compChoices = choices[Math.floor(Math.random()*3)];

var outcome = "";
if (playerChoice==compChoice){
    outcome= "It's a tie";
}else if (playerChoice=='r'&&compChoice=='p'){
    outcome = "computer wins";
}else if ()

var playerHP=100;
var playerGold=100;
var playerDefeated=0;


function setup(){
$("body").append("<h1>Welcome to Ogre Fighter v.1.0</h1>");
$("body").append("HP:" +playerHP + ",Gold:"+ playerGold+ ",Defeated:" + playerDefeated);
$("body").append("<img src='https://unsplash.it/200/300'>");

}

$(document).ready(setup);
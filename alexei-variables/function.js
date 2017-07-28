function rand(num) {
    // this is a function
    //that returs a random number between 0 and 1
    var randNum=Math.random()*num; 
    var result = Math.floor(randNum);
    return result;
}      
var myDice=['one','two','three','four','five','six'];
console.log("you rolled a " + myDice[rand(6)]);
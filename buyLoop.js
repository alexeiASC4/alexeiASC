var promptSync = require('prompt-sync')();
// get input from the user. 
//var n = prompt('How many many more times');
/*var bank = 1000;
console.log('you have 1,000 dollars');
var inventory = ['high rule sword','potion','shield'];

/*for (var x =0;x< inventory.length;x++){
    var answer = prompt ('Would you like to buy a' + inventory[0]);

    if (answer === 'yes'){
    bank-=100;
    console.log('You have ' + bank + 'left');
    }
}*/
var money = 1000;
var items = [];



while(money>99){
  console.log("You have $"+ money +" left. Sword = $500, Food = $100");
  var answer = promptSync("Which item do you want to buy? ");
  if(answer == "Sword" && money>499){
    money = money - 500;
    items.push("Sword");
    console.log("You bought a Sword!");
  }else if(answer == "Food"){
    money = money - 100;
    items.push("Food");
    console.log("You bought Food!");
  }else{
    console.log("I didn't understand your answer. Try again.");
  }
}


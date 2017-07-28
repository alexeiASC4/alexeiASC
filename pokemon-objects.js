var prompt = require('prompt-sync') ();
var pokeRoster= [];

function Pokemon(name, type, hp, atk, def,legend ){
    this.name=name;
    this.type=type;
    this.hp=hp;
    this.atk=atk;
    this.def=def;
    this.legend=legend;
}
var beedrill= new Pokemon("Beedrill", "Bug and Poison",65,150,40, false);
var sandslash = new Pokemon("Sandslash","Ground", 75, 100, 110, false);
var arcanine=new Pokemon("Arcanine", "Fire", 90, 110, 80, false);
var lugia = new Pokemon ("Lugia", "Psychic and Flying", 106,90,130, true);
var mewtwo = new Pokemon("Mewtwo", "Psychic and Flying",106,190,100,true);
var rayquaza = new Pokemon("Rayquaza","Dragon and Flying", 105, 150,90, true);

pokeRoster.push(beedrill,sandslash,arcanine, lugia, mewtwo, rayquaza);

function printRoster(){
    console.log(pokeRoster);
}

function pokemonAttacked(){
    for(var i=0;i<pokeRoster.length;i++){
        pokeRoster[i].hp -= 10;
    }
     printRoster();
}


function randomAttack(){
    var attk = prompt("How powerful is the attack?") ;
    var randNum= Math.floor (Math.random()*6);
    pokeRoster[randNum].hp -= attk;
}

function enterPokemon(){
    var pokeName = prompt("What is your Pokemon's name?");
    var pokeType = prompt("What is your Pokemon's type?");
    var pokeHP = prompt("What is your Pokemon's HP?");
    var pokeAtk = prompt("What is your Pokemon's attack?");
    var pokeDef = prompt("What is your Pokemon's defense?");
    var legendary = prompt("Is your Pokemon legendary?");

    var newPoke = new Pokemon(pokeName, pokeType,pokeHP,pokeAtk,pokeDef,legendary);

    pokeRoster.push(newPoke);
    
}
function removePokemon(){
    var randNum= Math.floor (Math.random()*6);
    pokeRoster.splice(randNum,1);
    
}

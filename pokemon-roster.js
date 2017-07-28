var PokeRoster= [['Charizard','Fire',200,120,150,false,'no'],['Beedrill','Bug and Poison',65,150,40,'no'],['sandslash','Ground',75,100,110,'no'],['Arcanine','Fire',90,110,80,"no"],['Lugia','Psychic and Flying',106,90,130,"Yes"],['mewtwo','psycic and fighting',106,190,100,"Yes"]];
for(var x=0;x< PokeRoster.length;x++){

console.log( "#"+ (x+1)+PokeRoster[x][0] +">"+"TYPE:" + PokeRoster[x][1]+ ">"+ "HP:"+ PokeRoster[x][2]+ ">"+ "ATK:"+ PokeRoster[x][3] + '>'+  "DEF:" + PokeRoster[x][4]+ '>'+ "Legendary:"+ PokeRoster[x][5]);
}

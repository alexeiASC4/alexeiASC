var letters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 

function randLetter(){
    var randNum=Math.random()*26;
    var result = letters[Math.floor(randNum)];
    return result;
    
}


function randWord(){
    var randNum = Math.floor(Math.random()*26);
    var result="";
    for( var i=0;i<=randNum;i++){
        result+=randLetter();
    }
    return result;
}
console.log(randWord());

function randSentence(l){
    var sentence="";
    numWords= Math.floor(Math.random()*l);

    for (var i=0; i<numWords;i++){
        sentence+=randWord() + " ";
    }
    return sentence;
}
console.log(randSentence(letters.length));
var winNumber=0; lossNumber=0; guessLeft=9;
var guesses="";
var randomText;
var possible = "abcdefghijklmnopqrstuvwxyz";
function onLoad(){
    guessLeft = 9; guesses = "";
    var guessLeftSpan = document.getElementById("guessLeft");
    guessLeftSpan.textContent = guessLeft;

    var guessesSpan = document.getElementById("guesses");
    guessesSpan.textContent = guesses;

    randomText = possible.charAt(Math.floor(Math.random() * possible.length));
}

document.onkeyup = function(event){
    
    var winNumberSpan = document.getElementById("winNumber");
    var lossNumberSpan = document.getElementById("lossNumber");   
    var guessLeftSpan = document.getElementById("guessLeft"); 
    var guessesSpan = document.getElementById("guesses");
    
    var keyPressed = event.key;
    guesses = guesses+keyPressed+",";
    guessesSpan.textContent = guesses;

    
    if(keyPressed == randomText){
        winNumber = winNumber+1;
        winNumberSpan.textContent = winNumber;
        onLoad();
    }
    else{
        guessLeft--;
        guessLeftSpan.textContent = guessLeft;

    }
    if(guessLeft == 0){
        lossNumber++;
        lossNumberSpan.textContent = lossNumber;
        onLoad();
    }
}




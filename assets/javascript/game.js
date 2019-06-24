//make an array containing all 26 letters
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// variables to keep track of the game
var win = 0;
var losses = 0;
var guesses = 10;

//have the computer randomly generate a number then pick a letter from the array
var compGuess = alphabet[Math.floor(Math.random()*alphabet.length)];

console.log(compGuess);

// onkeyup store as playerguess

document.onkeyup = function(event){
    var playerGuess = event.key;
    var winText = document.getElementById("win");
    var lossText = document.getElementById("losses");
    var guessLeft = document.getElementById("guesses");
    var playerGuessText = document.getElementById("playerGuess");
    console.log(playerGuess);

    //if guess is correct increase win counter by 1
    if (playerGuess === compGuess) {
        win++;
        winText.textContent = win;
    } else {
        guesses --; //if guess is wrong decrease counter by 1
        guessLeft.textContent = guesses;
    //add letter to the guess section maybe write as a function?
    } if (guesses == 0) {
        losses ++; //if guesses hit 0 then increase losses counter by 1
        lossText.textContent = losses;
    }
    
    

    

    

    //playerGuessText.insertAdjacentText("beforeend",'playerGuess + ","');


    //reset the game maybe write as a function?
};


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
    console.log(playerGuess);

 
    //give the player 10 guesses


    //if guess is correct increase win counter by 1


    //if guess is wrong decrease counter by 1


    //if guesses hit 0 then increase losses counter by 1


    //add letter to the guess section maybe write as a function?


    //reset the game maybe write as a function?
};


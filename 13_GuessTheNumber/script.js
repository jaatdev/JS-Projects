const form=document.querySelector(".form");
const guessField=document.querySelector(".guessField");
const guessSubmit=document.querySelector(".guessSubmit");
const resultParas=document.querySelector(".resultParas");
const guesses=document.querySelector(".guesses");
const lastResult=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");
const p=document.createElement("p");


let playGame=true;
// This code snippet initializes an empty array called 'allGuesss'.
let allGuesss=[];
let numGuess=1;
let randomNumber = parseInt(Math.random() * 100 + 1);



if(playGame)
{
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const guess=parseInt(guessField.value);
        // console.log(guess);
        validateGuess(guess);
    })
    
}


function validateGuess(guess){
    if(isNaN(guess) || guess<0 ||guess>100)
    {
        alert("Please enter a valid number lying between 0 to 100");
    }
    else{
        allGuesss.push(guess);
        if(numGuess===11)
        {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();

        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function displayGuess(guess){
    guessField.innerText="";
    guesses.innerHTML+=`${guess}, `
    numGuess++;
    lastResult.innerHTML=`${11-numGuess}`
}


function displayMessage(msg){
    lowOrHi.innerHTML=`<h2>${msg}</h2>`;
}

function checkGuess(guess){
    if(guess===randomNumber)
    {
        displayMessage(`You guesses it right, Random Number was ${randomNumber}`);
        endGame();
    }
    else if(guess<randomNumber)
    {
        displayMessage("Number is TOOOO low")
    }
    else if(guess>randomNumber)
    {
        displayMessage("Number is TOOOO high")
    }
}
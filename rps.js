// Initalize results counter
const results = document.querySelector("#round-results");
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

let playerPoints = 0;
let computerPoints = 0;

// Iterate through each button
const optionBtns = document.querySelectorAll('.btn');
optionBtns.forEach((button, index) => {
    let playerSelection = button.textContent; // Pass text content into playRound as parameter
    button.addEventListener("click", () => {
        optionBtns[index].classList.add('pressed');
        playRound(playerSelection, getComputerChoice())
    }); // click to play round
    button.addEventListener("transitionend", () => optionBtns[index].classList.remove('pressed')); // animate press
})

// Randomize computer choice
function getComputerChoice() {
    move = Math.floor(Math.random() * (4 - 1) + 1);
    switch (move) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}

// Click -> Play a round
function playRound(playerSelection = "No input was received.", computerSelection) {
    // Compare player selections to computer selection
    // Increment counter
    if (playerSelection.toLowerCase() == "rock") {
        switch (computerSelection) {
            case "rock": 
                results.textContent = "You tied!"; 
                break;
            case "paper": 
                results.textContent = "You lose. Paper beats Rock."; 
                computerScore.textContent = ++computerPoints;
                break;
            case "scissors": 
                results.textContent = "You win! Rock beats Scissors."; 
                playerScore.textContent = ++playerPoints;
                break;
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        switch (computerSelection) {
            case "rock": 
                results.textContent = "You win! Paper beats Rock.";
                playerScore.textContent = ++playerPoints;
                break;
            case "paper": 
                results.textContent = "You tied!"; 
                break;
            case "scissors": 
                results.textContent = "You lose. Scissors beats Rock."; 
                computerScore.textContent = ++computerPoints;
                break;
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        switch (computerSelection) {
            case "rock": 
                results.textContent = "You lose. Rock beats Scissors.";
                computerScore.textContent = ++computerPoints;
                break;
            case "paper": 
                results.textContent = "You win! Scissors beats Paper."; 
                playerScore.textContent = ++playerPoints;
                break;
            case "scissors": 
                results.textContent = "You tied!"; 
                break;
        }
    }
}

function animateResults(winner) {
    if (winner == "player") {

    }

}
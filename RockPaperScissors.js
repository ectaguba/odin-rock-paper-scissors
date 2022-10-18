/*
1. User input
2. Obtain computer choice
3. Compare parameters playerSelection and computerSelection
4. Return results
5. Repeat in game()
*/

function game() {
    for (let i = 0; i < 5; i++) {
        var playerInput = "rock";
        console.log(playRound(playerInput, getComputerChoice()));
    }
}

function playRound(playerSelection = "No input was received.", computerSelection) {
    if (playerSelection.toLowerCase = "rock") {
        switch (computerSelection) {
            case "rock": return "You tied!";
            case "paper": return "You lose. Paper beats Rock.";
            case "scissors": return "You win! Rock beats Scissors.";
        }
    } else if (playerSelection.toLowerCase = "paper") {
        switch (computerSelection) {
            case "rock": return "You win! Paper beats Rock.";
            case "paper": return "You tied!";
            case "scissors": return "You lose. Scissor beats Paper.";
        }
        
    } else if (playerSelection.toLowerCase = "scissors") {
        switch (computerSelection) {
            case "rock": return "You lose. Rock beats Scissors.)";
            case "paper": return "You win! Scissors beats Paper.";
            case "scissors": return "You tied!";
        }
    }
}

function getComputerChoice() {
    move = Math.floor(Math.random() * (4 - 1) + 1);
    switch (move) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}

console.log(game());
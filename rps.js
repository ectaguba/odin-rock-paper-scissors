function getComputerChoice() {
    move = Math.floor(Math.random() * (4 - 1) + 1);
    switch (move) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}

function playRound(playerSelection = "No input was received.", computerSelection) {
    console.log("onclick is working");
    let results = document.querySelector("#results");

    if (playerSelection = "rock") {
        switch (computerSelection) {
            case "rock": results.textContent = "You tied!"; break;
            case "paper": results.textContent = "You lose. Paper beats Rock."; break;
            case "scissors": results.textContent = "You win! Rock beats Scissors."; break;
        }
    } else if (playerSelection = "paper") {
        switch (computerSelection) {
            case "rock": results.textContent = "You win! Paper beats Rock."; break;
            case "paper": results.textContent = "You tied!"; break;
            case "scissors": results.textContent = "You tied!"; break;
        }

    } else if (playerSelection = "scissors") {
        switch (computerSelection) {
            case "rock": results.textContent = "You lose. Rock beats Scissors."; break;
            case "paper": results.textContent = "You win! Scissors beats Paper."; break;
            case "scissors": results.textContent = "You tied!"; break;
        }
    }
}

const rock = document.querySelector("#rockBtn");
rock.addEventListener("click", playRound("rock", getComputerChoice()));

const paper = document.querySelector("#paperBtn");
paper.addEventListener("click", playRound("paper", getComputerChoice()));

const scissors = document.querySelector("#scissorsBtn")
scissors.addEventListener("click", playRound("scissors", getComputerChoice()));

function getComputerChoice(){
    let number = Math.floor(Math.random() * 3) + 1;
    let choice;
    switch(number){
        case 1: choice = "rock"; break;
        case 2: choice = "paper"; break;
        case 3: choice = "scissors"; break;
    }
    return choice;
}

function playRound(computerSelection, playerSelection){
    if(computerSelection === playerSelection){
        console.log("DRAW!");
    }
    else if((computerSelection == "rock" && playerSelection == "paper") 
    || (computerSelection == "paper" && playerSelection == "scissors")
    || (computerSelection == "scissors" && playerSelection == "rock")
    ){
        playerScore++;
        console.log("YOU WIN!");
    }
    else {
        computerScore++;
        console.log("YOU LOSE!");
    }
    rounds++;
    if(rounds === 5){
        if(playerScore > computerScore){
            winnerDisplay.textContent = "Winner is you!";
        }
        else{
            winnerDisplay.textContent = "Winner is computer!";
        }
    }
    scoreDisplay.textContent = `${playerScore} : ${computerScore}`;
}

function game(){
    computerSelection = getComputerChoice();
    playerSelectionDisplay.textContent = `Player Selection is ${playerSelection}`;
    computerSelectionDisplay.textContent = `Computer Selection is ${computerSelection}`;
    playRound(playerSelection, computerSelection);
}

let playerSelection, playerScore = 0;
let computerSelection, computerScore = 0;
let rounds = 0;
const playerSelectionDisplay = document.querySelectorAll("h2")[0];
const computerSelectionDisplay = document.querySelectorAll("h2")[1];
const scoreDisplay = document.getElementById("score");
const winnerDisplay = document.getElementById("winner");

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", function(e) {
    playerSelection = "rock";
    game();
});

paperButton.addEventListener("click", function(e){
    playerSelection = "paper";
    game();
})

scissorsButton.addEventListener("click", function(e){
    playerSelection = "scissors";
    game();
})
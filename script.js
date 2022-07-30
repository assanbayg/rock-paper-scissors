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
        console.log("YOU WIN!");
    }
    else {
        console.log("YOU LOSE!");
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        console.log(`This is round number ${i+1}!`);
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("What is your choice?").toLowerCase();
        playRound();
    }
    console.log("END OF A GAME");
}
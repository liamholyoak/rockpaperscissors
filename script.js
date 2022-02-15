//Create Function to return Rock Paper or Scissors
function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return(choices[random]);
}
//Play single round of rock paper scissors
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a tie, play again"
    } else if (computerSelection == "rock" && playerSelection == "paper"){
        return "You win, paper beats rock"
    } else if (computerSelection == 'rock' && playerSelection == 'scissors'){
        return 'You lost, rock beats scissors'
    } else if (computerSelection == 'paper' && playerSelection == 'rock'){
        return 'You lost, paper beats rock'
    } else if (computerSelection == 'paper' && playerSelection == 'scissors'){
        return 'You win, scissors beat paper'
    } else if (computerSelection == 'scissors' && playerSelection == 'rock'){
        return 'You win, rocks beats scissors'
    } else if (computerSelection == 'scissors' && playerSelection == 'paper'){
        return 'You lost, scissors beat paper'
    } else {
        return 'Something went wrong'
    }
}

let playerSelection = "";

let computerSelection = computerPlay();

function game(){

    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Choose rock, paper, scissors?");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        }

}

console.log(game());
    
console.log("Hi")

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    } else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
const result = checkWinner(playerSelection, computerSelection);
if(result == "Tie"){
    return "It's a Tie!"
} else if(result == "Player") {
    return `You won! ${playerSelection} beat ${computerSelection} 🇼`
} else {
    return `You lost! ${computerSelection} beat ${playerSelection} 🇱😂🤡🫵`
}

}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("rock paper scissors");
        if(choice == null){
            continue;
        }
        const choiceInLowerCase = choice.toLowerCase();
        if(options.includes(choiceInLowerCase)){
            validatedInput = true;
            return choiceInLowerCase;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice;
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == "Player")  {
            scorePlayer++;
        } else if (checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        }
    }
    console.log("Game Over!")
    if(scorePlayer > scoreComputer){
        console.log("Player was the winner")
    } else if(scorePlayer < scoreComputer){
        console.log("Computer was the winner")
    } else {
        console.log("You have a tie")
    }
}
game()
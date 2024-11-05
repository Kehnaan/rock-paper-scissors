
let humanScore = 0;
let computerScore = 0;

// Get computers choice 
function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors"
    }

}

function getHumanChoice () {
    let userInput = prompt("Enter your choice (rock, paper or scissors): ")

    let userChoice = userInput.toLowerCase();

    //validate user choice
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    } else {
        console.log("Invalid choice! Enter rock, paper, or scissors.");
        return getHumanChoice;
    }
}

// function for playing a round
function playRound (humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    console.log("You chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);

    if (humanChoice ===  computerChoice) {
        console.log("Tie!");
    } else if ( 
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper") 
    ) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("Computer wins!");
        computerScore++;
    }
    console.log("Current Score - You: " + humanScore + ", Computer: " + computerScore);

}  

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
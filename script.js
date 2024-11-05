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
        return getHumanChoice();
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

function playGame () {

    for (let i = 0; i < 5; i++) {

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You have won the game");
    } else if (computerScore > humanScore) {
        console.log("Computer has won the game")
    } else {
        console.log("It is a tie game!")
    }
}

playGame();
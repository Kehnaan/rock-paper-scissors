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


// Test the function
let humanChoice = getHumanChoice();
console.log("You chose: " + humanChoice);
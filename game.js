function getComputerChoice() {
    // Returns "rock", "paper" or "scissors" as the computer's choice.
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    // Checks to see whether player or computer won, returns string depending on outcome
    // Case 1: Draw
    if (playerSelection == computerSelection) {
        return 1;
    }
    // Case 2: Player wins
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        return 2;
    }
    // Case 3: Computer wins
    else {
        return 3;
    }
}

function game() {
    // Runs the game 5 times, keeps track of scoreline 
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        // Prompt user for a choice, if choice is invalid, prompt user for a new input
        let reprompt = true;
        while (reprompt) {
            var playerChoice = prompt("Choose between 'rock', 'paper' and 'scissors': ").toLowerCase();
            if (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors') {
                reprompt = false;
            }
            else {
                console.log("Invalid input, please only type the valid inputs listed.");
            }
        }
        
        // Get computer choice
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);

        // 1 = Draw, 2 = Player Wins, 3 = Player Loses
        if (result == 1) {
            console.log(`Game was a draw! Both picked ${playerChoice}.`);
        }
        else if (result == 2) {
            playerScore++;
            console.log(`You win! You: ${playerChoice} beat Computer:${computerChoice}`);
        }
        else {
            computerScore++;
            console.log(`You lose! Computer: ${computerChoice} beat You: ${playerChoice}`);
        }

        console.log(`Your Score: ${playerScore} | Computer's Score ${computerScore}`);
    }
}
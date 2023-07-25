let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

// For each button, add an event listener
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const result = playRound(button.value, getComputerChoice());
        updateScore(result);
    });
})

function getComputerChoice() {
    // Returns "rock", "paper" or "scissors" as the computer's choice.
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    const container = document.querySelector(".result");
    // Checks to see whether player or computer won, returns string depending on outcome
    // Case 1: Draw
    if (playerSelection == computerSelection) {
        container.style.color = "#F9A603";
        container.textContent = `Round is a draw! Both picked ${playerSelection}`;
        return 1;
    }
    // Case 2: Player wins
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        container.style.color = "green";
        container.textContent = `You won the round! You picked ${playerSelection}, Computer picked ${computerSelection}`;
        return 2;
    }
    // Case 3: Computer wins
    else {
        container.style.color = "red";
        container.textContent = `Computer won the round! You picked ${playerSelection}, Computer picked ${computerSelection}`;
        return 3;
    }
}

function updateScore(result) {
    switch(result) {
        case 2:
            playerScore += 1;
            break;
        case 3:
            computerScore += 1;
            break;
    }
    const container = document.querySelector(".score");
    container.textContent = `You: ${playerScore} | Computer: ${computerScore}`;

    if (playerScore > 4) {
        container.textContent = `You win! You: ${playerScore} | Computer: ${computerScore}`;
        buttons.forEach((button) => {
            button.disabled = true;
        })
    }

    if (computerScore > 4) {
        container.textContent = `Computer wins! You: ${playerScore} | Computer: ${computerScore}`;
        buttons.forEach((button) => {
            button.disabled = true;
        })
    }
}

// function game() {
//     // Runs the game 5 times, keeps track of scoreline 
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {

//         // Prompt user for a choice, if choice is invalid, prompt user for a new input
//         let reprompt = true;
//         while (reprompt) {
//             var playerChoice = prompt("Choose between 'rock', 'paper' and 'scissors': ").toLowerCase();
//             if (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors') {
//                 reprompt = false;
//             }
//             else {
//                 console.log("Invalid input, please only type the valid inputs listed.");
//             }
//         }
        
//         // Get computer choice
//         let computerChoice = getComputerChoice();
//         let result = playRound(playerChoice, computerChoice);

//         // 1 = Draw, 2 = Player Wins, 3 = Player Loses
//         if (result == 1) {
//             console.log(`Game was a draw! Both picked ${playerChoice}.`);
//         }
//         else if (result == 2) {
//             playerScore++;
//             console.log(`You win! You: ${playerChoice} beat Computer:${computerChoice}`);
//         }
//         else {
//             computerScore++;
//             console.log(`You lose! Computer: ${computerChoice} beat You: ${playerChoice}`);
//         }

//         console.log(`Your Score: ${playerScore} | Computer's Score ${computerScore}`);
//     }
// }
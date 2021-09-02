// best of 5
function playGame() {
    let playerNumberOfWins = 0;
    let computerNumberOfWins = 0;

    // loop 5 times
    for (let i = 0; i < 5; i++) {
        let winner = playRound()

        // update who won and add to their score
        if (winner === "player") {
            playerNumberOfWins++;
        } else if (winner === "computer") {
            computerNumberOfWins++;
        }
    }

    console.log(`Player score: ${playerNumberOfWins}`);
    console.log(`Computer score: ${computerNumberOfWins}`);

    if (playerNumberOfWins > computerNumberOfWins) {
        console.log("You won the game!");
    } else if (computerNumberOfWins > playerNumberOfWins) {
        console.log("you lost the game!");
    } else {
        console.log("It's a tie game!");
    }
}

function playRound() {
    let player = playerChoice();
    let computer = computerChoice();
    let winner = compareChoices(player, computer);

    if (winner === "player") {
        console.log(`You win! ${player} beats ${computer}!`);
    } else if (winner === "computer") {
        console.log(`You lose! ${computer} beats ${player}!`);
    } else {
        console.log("It's a tie!");
    }

    return winner;
}

function computerChoice() {
    // get random integer between 0-2
    let ranodomNumber = Math.floor(Math.random() * 3);

    // assign rock, paper or scissor to randomnumber and return string
    switch (ranodomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playerChoice() {
    // prompt player for choice
    let choice = window.prompt("Choose between rock, paper or scissors", "");
    // make it lower case
    choice = choice.toLowerCase();

    // Keep prompting until valid input
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = window.prompt("Unvalid choice! Enter either \"Rock\", \"Paper\" or \"Scissors\"!");
    }

    return choice;
}

// Returns the winner (player, computer or tie)
function compareChoices(player, computer) {
    // Check who wins the round
    if (player === computer) {
        return "tie";
    } else if (player === "rock" && computer === "scissors" ||
        player === "paper" && computer === "rock" ||
        player === "scissors" && computer === "paper") {
        return "player";
    } else {
        return "computer";
    }
}
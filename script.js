let playerNumberOfWins = 0;
let computerNumberOfWins = 0;
let gameOver = false;

// first to 5 point
function playGame(player) {
    let winner = playRound(player)

    // update who won and add to their score
    if (winner === "player") {
        playerNumberOfWins++;
        let playerScore = document.querySelector('#player');
        playerScore.textContent = playerNumberOfWins.toString();
    } else if (winner === "computer") {
        computerNumberOfWins++;
        let computerScore = document.querySelector('#computer');
        computerScore.textContent = computerNumberOfWins.toString();
    }

    let roundResult = document.querySelector('#round-result');

    if (playerNumberOfWins == 5) {
        roundResult.textContent = "You won the match!";
        gameOver = true;
    } else if (computerNumberOfWins == 5) {
        roundResult.textContent = "You lost the match!";
        gameOver = true;
    }
}

function playRound(player) {
    let computer = computerChoice();
    let winner = compareChoices(player, computer);

    let cChoice = document.querySelector('#computer-choice');
    cChoice.textContent = computer;

    let roundWinner = "";

    if (winner === "player") {
        roundWinner = `You win! ${player} beats ${computer}!`;
    } else if (winner === "computer") {
        roundWinner = `You lose! ${computer} beats ${player}!`;
    } else {
        roundWinner = "It's a tie!";
    }

    let roundResult = document.querySelector('#round-result');
    roundResult.textContent = roundWinner;

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

const buttons = document.querySelectorAll('#selection');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playGame(e.target.textContent.toLowerCase());
    });
});
let userScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win";
let lose = "You lose";
let tie = "It is a tie";
let round = 1;

function computerPlay() {
  let random = Math.random();
  if (random <= 0.3333) {
    return "paper";
  } else if (random >= 0.6666) {
    return "rock";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      round++;
      return lose;
    } else if (computerSelection === "rock") {
      round++;
      return tie;
    } else {
      userScore++;
      round++;
      return win;
    }
  }

  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "paper") {
      userScore++;
      round++;
      return win;
    } else if (computerSelection === "rock") {
      computerScore++;
      round++;
      return lose;
    } else {
      return tie;
    }
  }

  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "paper") {
      round++;
      return tie;
    } else if (computerSelection === "rock") {
      userScore++;
      round++;
      return win;
    } else {
      computerScore++;
      round++;
      return lose;
    }
  } else {
    return alert(`Wrong input! Please choose Rock, Paper or Scissors!`);
  }
}

function startGame() {
  while (round < 6) {
    console.log("---------Round : " + round + "---------");
    let playerSelection = prompt("Let's play!");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log("your score = " + userScore);
    console.log("Computer's score = " + computerScore);
  }
}

startGame();

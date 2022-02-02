function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  // choose random number
  let randNumber = Math.floor(Math.random() * choices.length);
  return choices[randNumber];
}

function playRound(playerSelection, computerSelection) {
  let playerSelectionLowerCase = playerSelection.toLowerCase();
  let computerSelectionLowerCase = computerSelection.toLowerCase();

  //win conditions
  if (
    (playerSelectionLowerCase === "rock" &&
      computerSelectionLowerCase === "scissors") ||
    (playerSelectionLowerCase === "scissors" &&
      computerSelectionLowerCase === "paper") ||
    (playerSelectionLowerCase === "paper" &&
      computerSelectionLowerCase === "rock")
  ) {
    result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    return [1, 0];
  }
  // draw conditions
  else if (playerSelectionLowerCase == computerSelectionLowerCase) {
    result.textContent = `Its a Draw!`;
    return [0, 0];
  } else {
    result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    return [0, 1];
  }
}

function game() {
  const MaxRounds = 5;
  let score = [0, 0];
  for (let round = 0; round < MaxRounds; round++) {
    //get player selection and make sure its the right value
    let playerSelection = "";
    do {
      playerSelection = prompt("Rock, Paper or Scissors ?");
      if (
        playerSelection.toLowerCase() !== "rock" &&
        playerSelection.toLowerCase() !== "paper" &&
        playerSelection.toLowerCase() !== "scissors"
      ) {
        console.log("Please choose either Rock , Paper or Scissors");
      }
    } while (
      playerSelection.toLowerCase() !== "rock" &&
      playerSelection.toLowerCase() !== "paper" &&
      playerSelection.toLowerCase() !== "scissors"
    );
    //get computer selection
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    score[0] += result[0];
    score[1] += result[1];
  }
  //display result
  let scoreString = `${score[0]}-${score[1]}`;
  let resultString = "";
  if (score[0] > score[1]) {
    resultString = "You win!";
  } else if (score[0] === score[1]) {
    resultString = "Its a Draw!";
  } else {
    resultString = "You Lose!";
  }
  result.textContent = scoreString + " " + resultString;
}
let score = [0, 0];
const result = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
  let result = playRound("rock", computerPlay());
  score[0] += result[0];
  score[1] += result[1];
  checkWin();
});
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
  let result = playRound("paper", computerPlay());
  score[0] += result[0];
  score[1] += result[1];
  checkWin();
});
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
  let result = playRound("scissors", computerPlay());
  score[0] += result[0];
  score[1] += result[1];
  checkWin();
});
function checkWin() {
  if (score[0] === 5) {
    scoreDiv.textContent = `You :       ${score[0]}-${score[1]}       :AI.
    You defeated the AI`;
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } else if (score[1] === 5) {
    scoreDiv.textContent = `You :       ${score[0]}-${score[1]}       :AI.
    The AI has taken over the world!`;

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

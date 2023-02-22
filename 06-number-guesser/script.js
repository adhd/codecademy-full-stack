let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  randInt = Math.floor(Math.random() * 10);
  return rantInt;
}

function compareGuesses(human, comp, target) {
  const human_diff = Math.abs(target - human);
  const comp_diff = Math.abs(target - comp);

  return (comp_diff >= human_diff);
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}

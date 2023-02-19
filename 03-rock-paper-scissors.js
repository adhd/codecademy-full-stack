/*
Project name: Rock, Paper, Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, 
paper, or scissors. The items are compared, and whichever player chooses the more 
powerful item wins.

The possible outcomes are:
* Rock destroys scissors.
* Scissors cut paper.
* Paper covers rock.
* If there’s a tie, then the game ends in a draw.

Our code will break the game into four parts:

1. Get the user’s choice.
2. Get the computer’s choice.
3. Compare the two choices and determine a winner.
4. Start the program and display the results.

Key notes:
  -> [If/else] conditions must be wrapped in brackets '()'
  -> === is strict equality (triple equals) and == is loose equality (double equals)
  -> == performs a type conversion when comparing two things, while === does not 
     (no special handling for NaN, -0, and +0)
*/

/*
getting user input
*/

const getUserInput = (userInput) => {
  userInput = userInput.toLowerCase();
  
  const validInputs = ['rock', 'paper', 'scissors', 'bomb'];

  if (validInputs.includes(userInput)) {
    return userInput;
  } else {
    console.log("Input not valid");
  }
}

/*
generating a computer input randomly
*/

const getComputerChoice = () => {
  randNo = Math.floor(Math.random() * 3);

  switch (randNo) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'scissors';
      break;
    case 2:
      return 'paper';
      break;
  }
}

/*
determining winner based on user and computer inputs
*/

const determineWinner = (userChoice, computerChoice) => {

  if (userChoice == 'bomb') {
    return 'User wins.'
  }

  if (userChoice == computerChoice) {
    return 'Tied!'
  }

  if (userChoice == 'rock') {
    if (computerChoice == 'paper') {
      return 'Computer wins.'
    } else {
      return 'User wins.'
    }
  }

  if (userChoice == 'paper') {
    if (computerChoice == 'scissors') {
      return 'Computer wins.'
    } else {
      return 'User wins.'
    }
  }

  if (userChoice == 'scissors') {
    if (computerChoice == 'rock') {
      return 'Computer wins.'
    } else {
      return 'User wins.'
    }
  }
}

const playGame = () => {
  const userChoice = getUserInput('bomb');
  const computerChoice = getComputerChoice();
  console.log('User used: ' + userChoice);
  console.log('Computer used: ' + computerChoice)

  console.log(determineWinner(userChoice, computerChoice));
}


// Testing

console.log('Testing user input:');
console.log(getUserInput('Paper')); // should print 'paper'
console.log(getUserInput('fork')); // should print 'Error!' and `undefined`
console.log('* '.repeat(10));

console.log('Testing determineWinner function: ')
console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
console.log('* '.repeat(10));

playGame();

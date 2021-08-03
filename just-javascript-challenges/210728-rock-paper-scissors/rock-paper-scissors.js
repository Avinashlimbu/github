const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {
    return userInput;
  } else {
    console.log('ERROR! Please input rock, paper or scissors');
  }
}
//testing functions
//console.log(getUserChoice('rock'));

const getComputerChoice = () => {
  choice = Math.floor(Math.random() *3);
  if (choice === 0) {
    return 'rock';
  } else if (choice === 1) {
    return 'paper';
  } else if (choice === 2) {
    return 'scissors'
  } else {
    console.log('Error, This is impossible but we will put this here just for learning sake')
  }
};
//testing functions
//console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice) {
  if(userChoice === 'bomb') {
    return 'You Won'
  }
  if (userChoice === computerChoice) {
    return 'the game was a tie';
  } if (userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'You loss';
      } else {
        return 'You Won';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'You loss';
    } else {
      return 'You won';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'You loss';
    } else {
      return 'You won';
    }
  }
};

//testing functions
//console.log(determineWinner('rock', 'scissors'));
//console.log(determineWinner('scissors', 'rock'));
//console.log(determineWinner('rock', 'rock'));

function playGame() {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('Your hand say:' + userChoice);
  console.log('Computer\'s say:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

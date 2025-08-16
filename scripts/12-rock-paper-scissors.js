const score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0
}

document.querySelector('.js-rock-button').addEventListener('click', () => {playGame('rock');});

document.querySelector('.js-paper-button').addEventListener('click', () => {playGame('rock');});

document.querySelector('.js-scissors-button').addEventListener('click', () => {playGame('rock');});

document.querySelector('.js-listen').addEventListener('keyup', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors')
  }
});

// create computer's choice
function createComputerChoice() {
  const randomNum = Math.random(); 
  let computerChoice = '';
  if (randomNum < 1/3) {
    computerChoice = 'rock' 
  } else if (randomNum > 1/3 && randomNum < 2/3) {
    computerChoice = 'paper'
  } else {
    computerChoice ='scissors'
  };
  return computerChoice;
};

// get user's choice and compare 
function playGame(userChoice) {
  // call function to get computer's choice first 
  const computerChoice = createComputerChoice(); 
  let result = '';

  // check if tie
  if (userChoice === computerChoice) {
    result = 'Tie.'
    score.Ties += 1;
  } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
      result = 'You lose.'
      score.Losses += 1; 
      } else if (computerChoice === 'scissors') {
      result = 'You win.'
      score.Wins += 1; 
      };
  } else if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
      result = 'You win.'
      score.Wins += 1; 
      } else if (computerChoice === 'scissors') {
      result = 'You lose.'
      score.Losses += 1; 
      };
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
    result = 'You lose.'
    score.Losses += 1; 
  } else if (computerChoice === 'paper') {
    result = 'You win.'
    score.Wins += 1; 
    };
  };

  // display result 
  document.querySelector('.js-result').innerText = result; 

  // display both player's Choices
  document.querySelector('.js-choices').innerHTML = (`You <img class="move-img edit-img" src="../10/game-images/${userChoice}.png"> <img class="move-img edit-img" src="../10/game-images/${computerChoice}.png"> Computer`)

  // update score 
  document.querySelector('.js-score-paragraph').innerText = `Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`

  // save score if user reloads
  localStorage.setItem('score', JSON.stringify(score));
};

// display score to user on load 
document.querySelector('.js-score-paragraph').innerText = `Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`

// create function to reset score and update page
function resetScore() {
  score.Wins = 0
  score.Losses = 0
  score.Ties = 0

  // remove result 
  document.querySelector('.js-result').innerText = ''; 

  // display both player's Choices
  document.querySelector('.js-choices').innerText = '';

  // display reset score
  document.querySelector('.js-score-paragraph').innerHTML = `Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`

  // save score if user reloads
  localStorage.setItem('score', JSON.stringify(score));
}

let isAutoPlay = false
let intervalId;

function autoPlay() {
  if (!isAutoPlay) {
      intervalId = setInterval(() => {
      const playerMove = createComputerChoice();
      playGame(playerMove);
    }, 1000);
    isAutoPlay = true;
  } else {
    clearInterval(intervalId);
    isAutoPlay = false;
  }
};


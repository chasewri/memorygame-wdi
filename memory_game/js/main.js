//console.log('Up and Running!');
let cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];
let cardsInPlay = [];

// introduce the score variable
let score = 0;

// assign score the previous score before refresh if it is available
let previousScore = localStorage.getItem('score');
previousScore = JSON.parse(previousScore);
if (previousScore != null || previousScore != undefined) {
  score = previousScore;
}
// Display the game score in the h3 element using the score variable
function gameScore() {
  document.getElementById('game-score').innerHTML = `You have found ${score} matches!`;
}
// hiding and unhiding the refresh button at the end of a game
function buttonHidden() {
  document.getElementById('play-again').style.display = 'none';
}
function buttonVisibility() {
  document.getElementById('play-again').style.display = 'inline';
}

// checking to see if the cards are a match
// adding one to the score if it is a match
// buttonVisibility if it is a match or not
function checkForMatch() {
  if (cardsInPlay.length === 1)
    alert('Please pick another card!')
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('You found a match!!! Click the button to play again!');
      score += 1;
      gameScore();
      buttonVisibility();
      return score;
    } else {
      alert('Sorry, try again! Click the button to play again!');
      buttonVisibility();
    }
  }
}

// getting cardId, pushing to cardsInPlay, setting new image attribute
function flipCard() {
  let cardId = this.getAttribute('data-id');
  console.log(cardId)
  console.log(`User flipped ${cards[cardId].rank}, ${cardId}, ${cards[cardId].suit}, ${cards[cardId].cardImage}`);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  checkForMatch();
}


// creating the board, hiding the refresh button
function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
  buttonHidden();
}

// send item to localStorage and refresh
function refreshGame() {
  localStorage.setItem('score', JSON.stringify(score));
  location.reload();
}

createBoard();
gameScore();

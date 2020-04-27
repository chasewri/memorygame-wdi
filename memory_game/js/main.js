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

// chooseCards creates a random array len 4 for createBoard to pull card objects from
function chooseCards() {
  const random = [];
  for (let i = 0; i < 4; i++) {
    random.push(Math.floor(Math.random()*4));
  }
  // console.log(random);
  return random;
}

// introduce the score variable
let score = 0;

// assign score the previous score before the refresh (if it is available)
let previousScore = localStorage.getItem('score');
previousScore = JSON.parse(previousScore);
if (previousScore != null || previousScore != undefined) {
  score = previousScore;
}
// Display the game score in an h3 element using the score variable
function gameScore() {
  document.getElementById('game-score').innerHTML =
  `You have found ${score} matches!`;
}
// hiding and unhiding the refresh button at the end of a game
function buttonHidden() {
  document.getElementById('play-again').style.display = 'none';
}
function buttonVisibility() {
  document.getElementById('play-again').style.display = 'inline';
}
// checking to see if the cards are a match by rank
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
  console.log(`User flipped ${cards[cardId].rank}, ${cardId}, ${cards[cardId].suit},
    ${cards[cardId].cardImage}`);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  checkForMatch();
}


// creating the board, hiding the refresh button
function createBoard() {
  let random = chooseCards();
  for (let i = 0; i < random.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', random[i]);
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
//create 16 randomly selected cards from the 4 that are available in the cards array
createBoard();
createBoard();
createBoard();
createBoard();

gameScore();

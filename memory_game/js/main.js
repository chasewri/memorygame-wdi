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
// console.log(cards)
checkForMatch = () => {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('You found a match!!!');
    } else {
      alert('Sorry, try again.');
    }
  }
}

flipCard = (cardId) => {
  // let cardOne = cards[0];
  // cardsInPlay.push(cardOne);
  // console.log('User flipped a ' + cardsInPlay[0]);
  // let cardTwo = cards[2];
  // cardsInPlay.push(cardTwo);
  // console.log('User flipped a ' + cardsInPlay[1]);
  console.log(`User flipped ${cards[cardId].rank}, ${cardId}, ${cards[cardId].suit}, ${cards[cardId].cardImage}`);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
}
flipCard(2)
flipCard(3)

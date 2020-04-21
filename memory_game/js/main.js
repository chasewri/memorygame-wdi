//console.log('Up and Running!');
let cards = ['queen', 'queen', 'king', 'king'];
let cardsInPlay = [];

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
  console.log(`User flipped ${cards[cardId]}, ${cardId}`);
  cardsInPlay.push(cards[cardId]);
  checkForMatch();
}
flipCard(2)
flipCard(3)

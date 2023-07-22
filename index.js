// Code your solutions in this file

//const cards = ["Guadalupe,", "Ollie,", "Aki,"];

function writeCards(cards) {
  let cardsWrite = [];
  for (let i = 0; i < cards.length; i++) {
    cardsWrite.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    console.log(cardsWrite);
  }

  return cardsWrite;
}
writeCards(["mike", "tom", "bill"]);


function countDown(number){
  while (number > -1) {
  console.log(number --);
}
}
countDown(5)
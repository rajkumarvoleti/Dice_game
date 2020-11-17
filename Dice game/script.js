function randomNumber() {
  // generates a random number
  let randomNum = Math.floor(Math.random() * 6) + 1;
  return randomNum;
}

function randomDice(randomNum) {
  // genarates a random dice
  let randomDice = "images/dice_" + randomNum + ".png";
  return randomDice;
}

function winnerFinder(randomNumber1, randomNumber2) {
  //finds the winner
  let winner, congrats;
  if (randomNumber1 > randomNumber2) {
    congrats = "Hurrah!!!";
    winner = "Player 1";
  } else if (randomNumber1 < randomNumber2) {
    congrats = "Hurrah!!!";
    winner = "Player 2";
  } else {
    congrats = "WOOW";
    winner = "It's a tie";
  }
  let winnerDeclaration = [congrats, winner];
  return winnerDeclaration;
}

function playTheGame(){
  // generates a random number
  let diceNumber1 = randomNumber();
  let diceNumber2 = randomNumber();

  // genarates random dices
  let dice1 = randomDice(diceNumber1);
  let dice2 = randomDice(diceNumber2);
  document.getElementsByClassName("first-dice-image")[0].src = dice1;

  document.getElementsByClassName("second-dice-image")[0].src = dice2;

  // finds the winner
  let winnerDeclaration = winnerFinder(diceNumber1, diceNumber2);
  document.getElementsByClassName("heading")[0].innerHTML =
    winnerDeclaration[0];
  if (diceNumber1 == diceNumber2) {
    document.getElementsByClassName("winner-msg")[0].innerHTML =
      winnerDeclaration[1];
  } else {
    document.getElementsByClassName("winner-msg")[0].innerHTML =
      winnerDeclaration[1] + " is the winner";
  }
  document.getElementsByClassName("and")[0].classList.add("invisible");
};

document.getElementById("button").addEventListener("click",playTheGame);
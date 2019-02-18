

function randomImage() {
  let diceImages;
  diceImages = [
    "dice-black.jpg", "dice-blue.jpg", "dice-colors.jpg", "dice-green.jpg",
    "dice-red.jpg", "dice-red-group.jpg", "dice-white.jpg"
  ];

  dicePic = Math.floor(Math.random() * diceImages.length) + 1;
}


function rollDie() {
  // let dice = prompt("How many dice to you want to roll?");
  let dice1;
  dice1 = Math.floor(Math.random() * 12) + 1;
  document.getElementById("randomNumber").innerHTML = "You rolled a " + dice1;
    // alert("You rolled a " + dieRoll);
    // document.write("You rolled a " + dice1);
}


function rollDie() {
  let dice = prompt("How many dice to you want to roll?");
  let dice1 = Math.floor(Math.random() * 12) + 1;
  document.getElementById("randomNumber").innerHTML = "You rolled a " + dice1;
    // alert("You rolled a " + dieRoll);
    // document.write("You rolled a " + dice1);
}

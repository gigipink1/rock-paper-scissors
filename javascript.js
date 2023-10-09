function getComputerChoice() {
    const rpsChoices = ["rock", "paper", "scissors"];
    return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    }
    
function getUserChoice(){
    const userChoice = prompt("Rock, Paper or Scissors?" ).toLowerCase();
    return userChoice;
}


function playRound(comChoice , useChoice){
if ((comChoice === "rock" && useChoice === "paper")
   || (comChoice === "paper" && useChoice === "scissors")
   || (comChoice === "scissors" && useChoice === "rock")) {
  return "You Win!";
} else if (comChoice === useChoice) {
  return "It's a tie!";
} else {
   return "You Lose!";
}
}


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


function playGame() {
  let compWins = 0;
  let userWins = 0; 
  let ties = 0;
  for (let i = 1; i < 6; i++) {
    let result = playRound(getComputerChoice(), getUserChoice())
        if (result === "You Win!") {
            userWins++;
        } else if (result === "You Lose!") {
            compWins++;
        } else { 
           ties++;
        };
    }

    if (compWins > userWins) {
      return "Computer Wins!\n" + `You won ${userWins} times\n
              Computer won ${compWins} times\n
              It was a tie ${ties} times` ;
        } else if (compWins < userWins) {
            return "You Win!\n" + `You won ${userWins} times\n
            Computer won ${compWins} times\n
            It was a tie ${ties} times`;
        } else {
            return "It's a tie!\n" + `You won ${userWins} times\n
            Computer won ${compWins} times\n
            It was a tie ${ties} times`;
        }
        
    

}

alert(playGame());
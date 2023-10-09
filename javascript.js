function getComputerChoice() {
    const rpsChoices = ["rock", "paper", "scissors"];
    return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    }
    
function getUserChoice(button){
    console.log(button.id)
    return button.id;
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

const buttons = document.querySelectorAll('button'); 

buttons.forEach((button) => {
    button.addEventListener('click', function () {getUserChoice(button);} );


});

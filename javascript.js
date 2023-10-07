function getComputerChoice() {
    const rpsChoices = ["rock", "paper", "scissors"];
    return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    }
    
function getUserChoice(){
    return prompt("Rock, Paper or Scissors?" ).toLowerCase();
    
}


const computerSelection = getComputerChoice();
const userSelection = getUserChoice()


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


function game() {
    let compWins = 0;
    let userWins = 0;
    for (let i = 1; i < 5; i++) {
       let result = playRound(getComputerChoice, getUserChoice())
        if (result === "You Win!") {
            userWins++ 
        } else if (result === "It's a tie!") {
            compWins++
        } else { 

        };
    }

}

console.log(game())
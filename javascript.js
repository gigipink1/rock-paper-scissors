const buttons = document.querySelectorAll('button'); 

buttons.forEach((button) => {
    button.addEventListener('click', function () {PlayRound(button);} );


});

let playerCounter = 0;
let comCounter = 0;

function getComputerChoice() {
    const rpsChoices = ["rock", "paper", "scissors"];
    return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    }
    
function getUserChoice(button){
    console.log(button.id)
    return button.id;
}


function PlayRound (button) {
    const playerChoice = button.id;
    const comChoice = getComputerChoice();
    const comStats = document.querySelector('.comStats');
    const userStats = document.querySelector('.userStats');
    const userPick = document.querySelector('.userPicked');
    const comPick = document.querySelector('.comPicked')


    if ((comChoice === "rock" && playerChoice === "paper")
    || (comChoice === "paper" && playerChoice === "scissors")
    || (comChoice === "scissors" && playerChoice === "rock")) {
        userPick.textContent = `Your Choice was: ${playerChoice}`;
        comPick.textContent =  `Computer Choice was:  ${comChoice}`;
        userStats.textContent =  `Your Wins: ${++playerCounter}`;
    } else if (comChoice === playerChoice) {
        userPick.textContent = `Your Choice was: ${playerChoice}`; 
        comPick.textContent =  `Computer Choice was:  ${comChoice}`;
    } else {
        userPick.textContent = `Your Choice was: ${playerChoice}`;
        comPick.textContent =  `Computer Choice was:  ${comChoice}`;
        comStats.textContent = `Computer Wins: ${++comCounter}`;
    }




}
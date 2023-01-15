
const playerSelections = document.querySelectorAll("#option");
let computerWin=0;
let playerWin=0;
const para = document.querySelector("p");
const recordPlayer = document.getElementById("player");
const recordComputer = document.getElementById("computer");
const choices = ["rock","paper","scissors"];


function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
}

function gameEnd(){
    if(computerWin === 5 || playerWin === 5){
        if(computerWin === 5) {
            para.textContent = "LOSER";
        }
        else {
            para.textContent = "WINNER"
        };
        playerSelections.forEach((playerSelection)=> {
            playerSelection.disabled = true
        });
    }
}

function playRound(e){
    const playerChoice = e.target.value.toLowerCase();
    const computerChoice = getComputerChoice();

    if(playerChoice !== choices[0] && playerChoice !== choices[1] && playerChoice !== choices[2]) return;
    if(computerChoice === playerChoice){
        para.textContent = "Its a Draw";
    }
    else if ((computerChoice === "rock" && playerChoice === "scissors") 
    || (computerChoice === "paper" && playerChoice === "rock") 
    || (computerChoice === "scissors" && playerChoice === "paper")){
        para.textContent = "Its a Loss";
        computerWin+=1;
        recordComputer.value = `Computer: ${computerWin}`
    }
    else{
        para.textContent = "Its a Win";
        playerWin+=1;
        recordPlayer.value = `You: ${playerWin}`
    }
    gameEnd();
}

playerSelections.forEach((playerSelection)=>{
    playerSelection.addEventListener("click", playRound);
})

const playerSelections = document.querySelectorAll("#option");
let computerWin=0;
let playerWin=0;
const para = document.querySelector("p");
const recordPlayer = document.getElementById("player");
const recordComputer = document.getElementById("computer");
const choices = ["rock","paper","scissors"];
const header = document.querySelector("header");
const score = document.querySelector(".score");
const game = document.querySelector(".game");


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
            playerSelection.classList.add("hide");
        });
        header.classList.add("header")
        score.classList.add("game-end")
        game.style.gridTemplateRows = "0.1fr 0.1fr 1fr" 
    }
}

function playRound(e){
    const playerChoice = e.target.alt.toLowerCase();
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
        recordComputer.textContent = `Computer: ${computerWin}`
    }
    else{
        para.textContent = "Its a Win";
        playerWin+=1;
        recordPlayer.textContent = `You: ${playerWin}`
    }
    gameEnd();
}

playerSelections.forEach((playerSelection)=>{
    playerSelection.addEventListener("click", playRound);
})
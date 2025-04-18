console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const computerChoices = ["rock", "paper", "scissors"];
    let totalChoices = computerChoices.length;
    let index = Math.floor(Math.random() * totalChoices);
    const choice = computerChoices[index];
    console.log("computer choice is ", choice);
    return choice;
}

//let computerChoice = getComputerChoice();


function getHumanChoice() {
  let humanChoices = prompt("enter your choice; rock, paper or scissors?");
  console.log("human choice is", humanChoices);
  return humanChoices;
}
/*
let humanSelection = getHumanChoice();
let humanChoice = humanSelection.toLowerCase();
console.log(humanChoice);
*/

function playRound(computerChoice, humanChoice) {
  if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("computer won, paper beats rock");
    computerScore += 1;
  }else if (computerChoice === "rock" && humanChoice === "paper"){
    console.log("you won this round, paper beats rock");
    humanScore += 1;
  }else if (computerChoice === "scissors" && humanChoice === "paper"){
    console.log("computer won this round, scissors beats paper");
    computerScore += 1;
  }else if (computerChoice === "paper"  && humanChoice === "scissors"){
    console.log("you won this round, scissors beats paper");
    humanScore += 1;
  }else if ( computerChoice === "rock" && humanChoice === "scissors"){
    console.log("computer won, rock beats scissors")
  }else if (computerChoice === "scissors" && humanChoice === "rock"){
    console.log("you won this round, rock beats scissors")
  }else{
    console.log("It's a tie, play another round")
  }
  

}

let computerSelection = getComputerChoice();

let humanSelectionLower = getHumanChoice();
let humanSelection = humanSelectionLower.toLowerCase();
//console.log(humanSelection);

playRound(computerSelection, humanSelection);
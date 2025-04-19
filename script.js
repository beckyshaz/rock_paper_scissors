console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

//randomly getting computer's choice among rock,paper or scissors
function getComputerChoice () {
    const computerChoices = ["rock", "paper", "scissors"];
    let totalChoices = computerChoices.length;
    let index = Math.floor(Math.random() * totalChoices);
    const choice = computerChoices[index];
    console.log("computer choice is ", choice);
    return choice;
}

//let computerChoice = getComputerChoice();

//prompting users to enter their choice
function getHumanChoice() {
  let humanChoices = prompt("enter your choice; rock, paper or scissors?");
  console.log("human choice is", humanChoices);
  return humanChoices;
}

//function to play round five times and logs winner
function  playGame() { 

  //function to play one time
  function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice){
      console.log("it's a tie");
    }else if (computerChoice === "paper" && humanChoice === "rock") {
      console.log("computer won this round!, paper beats rock");
      computerScore += 1;
    }else if (computerChoice === "rock" && humanChoice === "paper"){
      console.log("you won this round!, paper beats rock");
      humanScore += 1;
    }else if (computerChoice === "scissors" && humanChoice === "paper"){
      console.log("computer won this round!, scissors beats paper");
      computerScore += 1;
    }else if (computerChoice === "paper"  && humanChoice === "scissors"){
      console.log("you won this round!, scissors beats paper");
      humanScore += 1;
    }else if ( computerChoice === "rock" && humanChoice === "scissors"){
      console.log("computer won this round!, rock beats scissors");
      computerScore += 1
    }else if (computerChoice === "scissors" && humanChoice === "rock"){
      console.log("you won this round!, rock beats scissors");
      humanScore += 1;
    }else{
      console.log("wrong input, enter \"rock, paper or scissors\"")
    }
    
  }
  for (let i = 0; i < 5; i++){
    
    let humanSelectionLower = getHumanChoice();

    let humanSelection = humanSelectionLower.toLowerCase();

    let computerSelection = getComputerChoice();

   
    //console.log(humanSelection);

    playRound(computerSelection, humanSelection);
  }

  if (humanScore > computerScore){
    console.log("You have won and your score is", humanScore);
  }else if(humanScore === computerScore){
    console.log(`you have tied, your score is {humanScore} and computer's score is {computerScore}`)
  }else{
    console.log("computer won and its score is", computerScore);
  }
}


playGame();
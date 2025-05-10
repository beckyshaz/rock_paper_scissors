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
/*function getHumanChoice() {
  let humanChoices = prompt("enter your choice; rock, paper or scissors?");
  console.log("human choice is", humanChoices);
  return humanChoices;
}*/

const divElement = document.querySelector(".start");
//divElement.style.backgroundColor = "yellow";



const humanScores = document.querySelector(".human-score");

const computerScores = document.querySelector(".computer-score");

const humanSpan = document.createElement("span");

humanScores.appendChild(humanSpan);



const compSpan = document.createElement("span");
computerScores.appendChild(compSpan);

function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice){
    divElement.textContent = "It's a tie";

  }else if (computerChoice === "paper" && humanChoice === "rock") {
    divElement.textContent = "computer won this round!, paper beats rock";
    
    compSpan.textContent = ` ${computerScore += 1}`;
  

  }else if (computerChoice === "rock" && humanChoice === "paper"){
    divElement.textContent = "You won this round!, paper beats rock";
    humanSpan.textContent = ` ${humanScore += 1}`;
    

  }else if (computerChoice === "scissors" && humanChoice === "paper"){
    divElement.textContent = "Computer won this round!, scissors beats paper";
    compSpan.textContent = ` ${computerScore += 1}`;

  }else if (computerChoice === "paper"  && humanChoice === "scissors"){
    divElement.textContent = "You won this round!, scissors beats paper";
    humanSpan.textContent = ` ${humanScore += 1}`;
    

  }else if ( computerChoice === "rock" && humanChoice === "scissors"){
    divElement.textContent = "Computer won this round!, rock beats scissors";
    compSpan.textContent = ` ${computerScore += 1}`;

  }else if (computerChoice === "scissors" && humanChoice === "rock"){
    divElement.textContent = "You won this round!, rock beats scissors";
    humanSpan.textContent = ` ${humanScore += 1}`;


  }else{
    divElement.textContent = "Wrong input, enter \"rock, paper or scissors\""
  }

  
  
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let playerSelection = event.target.value;

    let computerSelection = getComputerChoice();

    let humanSelection = playerSelection;

    playRound(computerSelection, humanSelection);
    
    
    if (computerScore === 5) {
      
      divElement.textContent = "Computer Won";
      
      
      humanScore = 0;
      computerScore = 0;

      compSpan.textContent = ` ${computerScore}`; 
      humanSpan.textContent = ` ${humanScore}`;

      

      button.removeEventListener("click");
      
    
    }else if (humanScore === 5) {
      divElement.textContent = "You Won";
      
      
      humanScore = 0;
      computerScore = 0;
      
      humanSpan.textContent = ` ${humanScore}`;
      compSpan.textContent = ` ${computerScore}`; 
    
      button.removeEventListener("click");
      
    }
    
  });
})

/*if (computerScore === 5) {
  divElement.textContent = "computer Won";

}else if (humanScore === 5) {
  divElement.textContent = "You won";
}
*/



//let humanSelectionLower = getHumanChoice();

//let humanSelection = humanSelectionLower.toLowerCase();

//let computerSelection = getComputerChoice();
//let humanSelection = playerSelection;
   
    //console.log(humanSelection);

//playRound(computerSelection, humanSelection);


//function to play round five times and logs winner
/*function  playGame() { 

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
    console.log("You have won! and your score is", humanScore);
  }else if(humanScore === computerScore){
    console.log(`you have tied, your score is ${humanScore} and computer's score is ${computerScore}`)
  }else{
    console.log("computer won! and its score is", computerScore);
  }
}


playGame();

*/
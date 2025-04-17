console.log("Hello World");

function getComputerChoice () {
    const computerChoices = ["rock", "paper", "scissors"];
    let totalChoices = computerChoices.length;
    let index = Math.floor(Math.random() * totalChoices);
    const choice = computerChoices[index];
    console.log(choice);
    return choice;
}

getComputerChoice();

getComputerChoice();

getComputerChoice();
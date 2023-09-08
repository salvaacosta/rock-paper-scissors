let userChoice = prompt("Choose Rock, Paper or Scissors");
userChoice = userChoice.toLowerCase();


function getComputerChoice(){
    let options = ["paper","rock","scissors"];
    let i = Math.floor(Math.random() * 3);
    let choose = options[i];
    return choose;
}

let computerChoice = getComputerChoice();

function gamePlay() {
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors"){
        console.log("Wrong option");
    }

    else if ((userChoice == "rock") && (computerChoice == "scissors")) {
        console.log(`Computer choice: ${computerChoice}. You WON!!`)
    }

    else if ((userChoice == "paper") && (computerChoice == "rock")) {
        console.log(`Computer choice: ${computerChoice}. You WON!!`)
    }

    else if ((userChoice == "scissors") && (computerChoice == "paper")) {
        console.log(`Computer choice: ${computerChoice}. You WON!!`)
    }

    else if (userChoice == computerChoice){
        console.log(`Computer choice: ${computerChoice}. TIE`)
    }
    
    else {
        console.log(`Computer choice: ${computerChoice}. You are a LOOSER!!`)
    }
}

gamePlay()
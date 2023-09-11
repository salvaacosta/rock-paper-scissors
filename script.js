function getUserChoices(){
    let userChoice = prompt("Choose Rock, Paper or Scissors");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}


function getComputerChoice(){
        let options = ["paper","rock","scissors"];
        let i = Math.floor(Math.random() * 3);
        let choose = options[i];
        return choose;
    }
 
    let userPoints = 0;
    let computerPoints = 0;

    function addUserPoints() {
        point = userPoints + 1;
        userPoints = point;
    }

    function addComputerPoints() {
        point = computerPoints + 1;
        computerPoints = point;
    }


for (let i = 0; i < 5; i++) {
    
    userChoice = getUserChoices();
    let computerChoice = getComputerChoice();   

    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors"){
        console.log("Wrong option");
    }

    else if ((userChoice == "rock") && (computerChoice == "scissors")) {
        console.log(`Computer choice: ${computerChoice}. You WON!!`);
        addUserPoints();

    }

    else if ((userChoice == "paper") && (computerChoice == "rock")) {
        console.log(`Computer choice: ${computerChoice}. You WON!!`);
        addUserPoints();
    }

    else if ((userChoice == "scissors") && (computerChoice == "paper")) {
        console.log(`Computer choice: ${computerChoice}. You WON!!`);
        addUserPoints();
    }

    else if (userChoice == computerChoice){
        console.log(`Computer choice: ${computerChoice}. TIE`)
    }
    
    else {
        console.log(`Computer choice: ${computerChoice}. You LOOSE!!`);
        addComputerPoints();
    }

}

if (userPoints == computerPoints) {
    console.log(`User Points: ${userPoints}. Computer Points: ${computerPoints}. TIE`)
}

else if (userPoints > computerPoints) {
    console.log(`User Points: ${userPoints}. Computer Points: ${computerPoints}. YOU ARE A WINNER!!`)

}

else { 
    console.log(`User Points: ${userPoints}. Computer Points: ${computerPoints}. YOU ARE A LOOSER!!`)

}

    


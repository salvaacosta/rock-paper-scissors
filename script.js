const startRestartBtn = document.querySelector('.start-restart');
startRestartBtn.addEventListener('click',tryAgain);

    let userPoints = 0;
    let computerPoints = 0;
    let gamePlays = 0;
    let point;
    let play;
    
    

function tryAgain() {
    parcialResult.textContent = "";
    finalResult.textContent = "";
    userPoints = 0;
    computerPoints = 0;
    point = 0;
    play = 0;
    startRestartBtn.classList.add('inactive');
    rock.addEventListener('click', selectRock);
    paper.addEventListener('click', selectPaper);
    scissors.addEventListener('click', selectScissors); 
}  
let userChoice;
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
const parcialResult = document.querySelector('#parcial-result');
const finalResult = document.querySelector('#final-result');




rock.addEventListener('click', selectRock);
paper.addEventListener('click', selectPaper);
scissors.addEventListener('click', selectScissors);


function selectRock() {
    playGame("rock");
}

function selectPaper() {
    playGame("paper");
}

function selectScissors() {
    playGame("scissors");
}



function playGame(choice) {
    let round = gamePlays + 1;
            
    userChoice = choice;
    function getComputerChoice(){
        let options = ["paper","rock","scissors"];
        let i = Math.floor(Math.random() * 3);
        let choose = options[i];
        return choose;
    }

    
    let computerChoice = getComputerChoice();   


    function addUserPoints() {
        point = userPoints + 1;
        userPoints = point;
    }

    function addComputerPoints() {
        point = computerPoints + 1;
        computerPoints = point;
    }

    function addGamePlays(){
        let play = gamePlays + 1;
        gamePlays = play;
    }


    if (gamePlays == 4) {

        rock.removeEventListener('click', selectRock);
        paper.removeEventListener('click', selectPaper);
        scissors.removeEventListener('click', selectScissors);




        if ((userChoice == "rock") && (computerChoice == "scissors")) {
            parcialResult.textContent = `ROUND: ${round} Computer choice: ${computerChoice}. You WON!!`;
            addUserPoints();
            addGamePlays();
    
        }
    
        else if ((userChoice == "paper") && (computerChoice == "rock")) {
            parcialResult.textContent = `ROUND: ${round} Computer choice: ${computerChoice}. You WON!!`;
            addUserPoints();
            addGamePlays();
        }
    
        else if ((userChoice == "scissors") && (computerChoice == "paper")) {
            parcialResult.textContent = `ROUND: ${round} Computer choice: ${computerChoice}. You WON!!`;
            addUserPoints();
            addGamePlays();
        }
    
        else if (userChoice == computerChoice){
            parcialResult.textContent = `ROUND: ${round} Computer choice: ${computerChoice}. DRAW`;
            addGamePlays();
        }
        
        else {
            parcialResult.textContent = `ROUND: ${round} Computer choice: ${computerChoice}. You LOOSE!!`;
            addComputerPoints();
            addGamePlays();
        }

        gamePlays = 0;
        startRestartBtn.textContent = "Play Again";
        startRestartBtn.classList.remove('inactive');

    
        if (userPoints == computerPoints) {
        finalResult.textContent = `User Points: ${userPoints}. Computer Points: ${computerPoints}. DRAW`;
        

    }   
    
    else if (userPoints > computerPoints) {
        finalResult.textContent = `User Points: ${userPoints}. Computer Points: ${computerPoints}. YOU ARE A WINNER!!`
    
    }
    
    else { 
        finalResult.textContent = `User Points: ${userPoints}. Computer Points: ${computerPoints}. YOU ARE A LOOSER!!`
    
    }
    
    }

    else if ((userChoice == "rock") && (computerChoice == "scissors")) {
        parcialResult.textContent = `ROUND: ${round} Computer choice: ${computerChoice}. You WON!!`;
        addUserPoints();
        addGamePlays();

    }

    else if ((userChoice == "paper") && (computerChoice == "rock")) {
        parcialResult.textContent = `ROUND: ${round} Computer choice: ${computerChoice}. You WON!!`;
        addUserPoints();
        addGamePlays();
    }

    else if ((userChoice == "scissors") && (computerChoice == "paper")) {
        parcialResult.textContent = `ROUND: ${round} Computer choice: ${computerChoice}. You WON!!`;
        addUserPoints();
        addGamePlays();
    }

    else if (userChoice == computerChoice){
        parcialResult.textContent = `ROUND: ${round} Computer choice: ${computerChoice}. DRAW`;
        addGamePlays();
    }
    
    else {
        parcialResult.textContent = `ROUND: ${round} Computer choice: ${computerChoice}. You LOOSE!!`;
        addComputerPoints();
        addGamePlays();
    }

    

}










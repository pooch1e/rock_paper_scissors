//const scores
let humanScore = 0;
let computerScore = 0;
let round = 0;
//function to start game
function startGame() {
    alert("Start the game: ")
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = determineWinner(humanChoice, computerChoice);

    if (result === "human") {
        alert("You won this round");
        humanScore++;
    } else if (result === "computer") {
        alert("Computer won");
        computerScore++;
    } else {
        alert("It is a draw")
    }
    round++;
    alert(`The score is: Human - ${humanScore}, Computer - ${computerScore}`);

        // Return the game state
        return {
            humanScore,
            computerScore,
            round,
            lastResult: result,
        };
    };
    



//function to randomly call rock, paper or scissors
//returns 1, 2, or 3
//1 = rock
//2 = paper
//3 = scissors

function getComputerChoice() { 
    // //initialise variables
    // let rock;
    // let paper;
    // let scissors;

    let randoNumber = Math.floor(Math.random() * 3) + 1; //get number between 1 and 3
    return randoNumber;

    // function randomNum() { //function to generate random number
  
    // }
    // let myNum = randomNum(); //create that number
    // console.log(randomNum());
    //print rock paper or scissors depending on what the random number was
//     if (myNum === 1) {
//         console.log("Rock");
//         return myNum;
        
//     } else if (myNum === 2) {
//        console.log("Paper");
//        return myNum;
       
//     } else if (myNum === 3) {
//         console.log("Scissors");
//         return myNum;
     
//     } else {
//         console.log(null);
//     }
   
// }
};



//human player input choice
//returns 1 2 or 3
function getHumanChoice() {
    //Get prompt from player and save in variable
    // let playerChoice = prompt("Rock, Paper or Scissors?").toUpperCase(); //expecting string
    
    //get prompt from button clicked
        $(".button").on("click", (e) => {
            const playerChoice = $(e.target).text().toUpperCase();
            let choice;
    
            if (playerChoice === "ROCK") {
                choice = 1;
                // console.log(choice); //check the output
            } else if (playerChoice === "PAPER") {
                choice = 2;
                console.log(choice);
            } else if (playerChoice === "SCISSORS") {
                choice = 3;
            } else {
                choice = null;
            }
        

        });
};


function determineWinner(human, computer) {
    if (human === computer) {
        return "draw";
    }

    // Rock beats Scissors, Scissors beat Paper, Paper beats Rock
    if (
        (human === 1 && computer === 3) || // Rock beats Scissors
        (human === 2 && computer === 1) || // Paper beats Rock
        (human === 3 && computer === 2)    // Scissors beat Paper
    ) {
        return "human";
    } else {
        return "computer";
    }
}

    for (let i = 0; i < 5; i++) {
        // Play the game and capture the result
        const gameState = startGame();

        if (gameState.computerScore === 3) {
        alert("Computer Wins!")
        break;
        
        } else if (gameState.humanScore === 3) {
        alert("Human Wins")
        break;
        }

        // Check if it was a draw
        if (gameState.lastResult === "draw") {
        i--; // Decrement i to replay the round
        }
}




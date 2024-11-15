//const scores
const humanScore = 0;
const computerScore = 0;

//function to start game
function startGame() {


}

//function to randomly call rock, paper or scissors

function getComputerChoice() {
    //initialise variables
    let rock;
    let paper;
    let scissors;


    function randomNum() { //function to generate random number
        let randoNumber = Math.floor(Math.random() * 3) + 1; //get number between 1 and 3
        return randoNumber;
    }
    let myNum = randomNum(); //create that number
    // console.log(randomNum());
    //print rock paper or scissors depending on what the random number was
    if (myNum === 1) {
        return rock = "Rock";
        // console.log(rock);
    } else if (myNum === 2) {
       return paper = "Paper";
        // console.log(paper);
    } else if (myNum === 3) {
        return scissors = "Scissors";
        // console.log(scissors);
    } else {
        console.log(null);
    }
   
}

//human player input choice
function getHumanChoice() {
    //initialise variables
    let rock;
    let paper;
    let scissors;
    //Get prompt from player and save in variable
    let playerChoice = prompt("Rock, Paper or Scissors?").toUpperCase(); //expecting string
    

    
    //logic for somehow compare string and convert it to 1/2/3
    if (playerChoice === "ROCK") {
        rock = 1;
        return rock;
    } else if (playerChoice === "PAPER") {
        paper = 2;
        return paper;
    } else if (playerChoice === "SCISSORS") {
        scissors = 3;
        return scissors;
    } else {
        return null;
    }

    
}

//compare human vs computer
function nextSequence() {



//game logic
getComputerChoice();
getHumanChoice();
//logic to determine who won


}
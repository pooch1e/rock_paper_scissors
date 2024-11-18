$(document).ready(() => {
    // Initialize scores and round
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    // Start Button: Reveals game and starts the first round
    function startButton() {
        $(".start").off("click").on("click", () => {
            $(".container").removeClass("hide"); // Show game buttons
            $(".start").addClass("hide");       // Hide start button
            $(".score").removeClass("hide");    //reveal score button
            playGame();                         // Start game
        });
    }

    // Play Game Logic
    function playGame() {
        if (humanScore < 3 && computerScore < 3 && round < 5) {
            // Wait for a single round to complete
            startGame((gameState) => {
                // Check for overall game winner
                if (gameState.humanScore === 3) {
                    alert("Congratulations! You win the game!");
                    resetGame(); // Reset game after win
                    return;
                } else if (gameState.computerScore === 3) {
                    alert("Computer wins the game! Better luck next time.");
                    resetGame(); // Reset game after loss
                    return;
                }

                // Replay round if it's a draw
                if (gameState.lastResult === "draw") {
                    round--; // Decrement round count for a replay
                }

                // Continue to the next round
                playGame();
            });
        }
    }

    // Single Round Logic
    function startGame(callback) {
        getHumanChoice((humanChoice) => {
            const computerChoice = getComputerChoice();
            const result = determineWinner(humanChoice, computerChoice);

            // Update scores and alert round result
            if (result === "human") {
                humanScore++;
                // alert("You won this round!");
                $("#human-score-card").html(`Human Score: ${humanScore}`);

            } else if (result === "computer") {
                computerScore++;
                // alert("Computer won this round!");
                $("#computer-score-card").html(`Computer Score: ${computerScore}`);
            } else {
                alert("It's a draw!");
            }

            round++;
            $("#round-card").html(`Round: ${round}`);
            $("#grandScore").html(`Score is: HUMAN ${humanScore}, COMPUTER ${computerScore}`);
            // alert(`Current Score:\nHuman: ${humanScore}\nComputer: ${computerScore}`);

            // Return the game state
            callback({
                humanScore,
                computerScore,
                round,
                lastResult: result,
            });
        });
    }

    // Human Choice Handler
    // Human Choice Handler
function getHumanChoice(callback) {
    // Remove any existing event listeners to prevent duplication
    $(".button").off("click").on("click", (e) => {
        const playerChoice = $(e.target).text().toUpperCase();
        let choice;

        if (playerChoice === "ROCK") {
            choice = 1;
        } else if (playerChoice === "PAPER") {
            choice = 2;
        } else if (playerChoice === "SCISSORS") {
            choice = 3;
        } else {
            alert("Invalid choice! Please pick Rock, Paper, or Scissors.");
            return;
        }

        callback(choice); // Pass the choice to the callback
    });
}

    // Generate Computer Choice
    function getComputerChoice() {
        return Math.floor(Math.random() * 3) + 1; // Random choice (1 = Rock, 2 = Paper, 3 = Scissors)
    }

    // Determine Winner for a Round
    function determineWinner(human, computer) {
        if (human === computer) return "draw"; // Draw case

        if (
            (human === 1 && computer === 3) || // Rock beats Scissors
            (human === 2 && computer === 1) || // Paper beats Rock
            (human === 3 && computer === 2)    // Scissors beat Paper
        ) {
            return "human";
        }
        return "computer"; // All other cases
    }

    // Reset Game State
    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        round = 0;

        $(".container").addClass("hide"); // Hide game buttons
        $(".start").removeClass("hide"); // Show start button
    }

    // Initialize the Start Button
    startButton();
});

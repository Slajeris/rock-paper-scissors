function getComputerChoice() {
    let num = Math.random();

    if (num < 0.33) {
        return "rock";
    } else if (num < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}



function getHumanChoice() {
    let check = 0;

    while (check != 1) {
        let input = prompt("Enter rock, paper, or scissors: ").toLowerCase();

        if (input == "rock" || input == "paper" || input == "scissors") {
            check = 1;
            return input
        } else {
            alert("Wrong input! Type only rock, paper or scissors!!!");
        }
    }
}




function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    alert("You will play a 5 round game of rock, paper, scissors against a computer!")

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            humanScore += 0.5;
            computerScore += 0.5;
            return alert("Computer's choice: " + computerChoice + ". Draw! Your score: " + humanScore + ". Computer's score: " + computerScore + ".");
        } else if ((humanChoice === "paper" && computerChoice === "scissors")
            || (humanChoice === "scissors" && computerChoice === "rock")
            || (humanChoice === "rock" && computerChoice === "paper")) {
            computerScore += 1;
            return alert("Computer's choice: " + computerChoice + ". Computer wins! Your score: " + humanScore + ". Computer's score: " + computerScore + ".");
        } else {
            humanScore += 1;
            return alert("Computer's choice: " + computerChoice + ". You win! Your score: " + humanScore + ". Computer's score: " + computerScore + ".");
        }
    }

    for (let i = 0; i < 5; ++i) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        alert("You win! Your score: " + humanScore + ". Computer's score: " + computerScore + ".");
    } else if (humanScore < computerScore) {
        alert("You lost! Your score: " + humanScore + ". Computer's score: " + computerScore + ".");
    } else {
        alert("Draw! Your score: " + humanScore + ". Computer's score: " + computerScore + ".");
    }
}

playGame();
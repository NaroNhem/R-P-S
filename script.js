
function computerPlay(randNum){
    if (randNum === 1) {
        return "rock";
    } else if (randNum === 2) {
        return "paper";
    } else {
        return "scissor";
    }
}


function playRound(computerSelection, userSelection) {
    if (computerSelection === userSelection){
        return "Tie"
    }else if (computerSelection === "rock") {
        if (userSelection === "paper") {
            return "You win";
        } else if (userSelection === "scissor") {
            return "You lose";
        }
    } else if (computerSelection === "paper") {
        if (userSelection === "scissor") {
            return "You win";
        } else if (userSelection === "rock") {
            return "You lose";
        }
    } else if (computerSelection === "scissor") {
        if (userSelection === "rock") {
            return "You win";
        } else if (userSelection ==="paper") {
            return "You Lose";
        }
    }
}

function playGame(){
    for (let i = 0; i < 5; i ++){
        let userChoice = prompt("R,P, or S?").toLowerCase();
        let randomNumber = Math.floor(Math.random()*3) + 1;
        let compChoice = computerPlay(randomNumber);
        console.log(playRound(compChoice, userChoice))
        if (i === 5){
            console.log("Done")
        }  
    }
}

/*console.log(playGame())*/
let randomNumber = Math.floor(Math.random()*3) + 1;

function computerChoice(randNum){
    if (randNum === 1) {
        return "rock";
    } else if (randNum === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

opponentChoice = computerChoice(randomNumber);
console.log(opponentChoice)

function computerPlay(randNum){
    if (randNum === 1) {
        return "rock";
    } else if (randNum === 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

userScore = 0;
opScore = 0;

function winner(userPoints, opPoints){
    if (userPoints === 5){
        userScore = 0;
        opScore = 0;
        return "You Won!";
    } else if(opPoints === 5) {
        userScore = 0;
        opScore = 0;
        return "You Lose."
    }
}


function playRound(computerSelection, userSelection) {
    if (computerSelection === userSelection){
        return "You and your opponent chose the same thing."
    }else if (computerSelection === "rock") {
        if (userSelection === "paper") {
            userScore +=1;
            return "Your opponent chose rock. You win.";
        } else if (userSelection === "scissor") {
            opScore += 1;
            return "Your opponent chose rock. You lose";
        }
    } else if (computerSelection === "paper") {
        if (userSelection === "scissor") {
            userScore +=1;
            return "Your opponent chose paper. You win.";
        } else if (userSelection === "rock") {
            opScore += 1;
            return "Your opponent chose paper. You lose.";
        }
    } else if (computerSelection === "scissor") {
        if (userSelection === "rock") {
            userScore +=1;
            return "Your opponent chose scissor. You win.";
        } else if (userSelection ==="paper") {
            opScore += 1;
            return "Your opponent chose scissor. You lose.";
        }
    }
}


function playGame(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    let compChoice = computerPlay(randomNumber);
    let x = playRound(compChoice, userChoice);
    const scoreNum = document.querySelector('.scoreNum');

    const userNum = document.getElementById("userNum");
    userNum.textContent = userScore;
    scoreNum.appendChild(userNum);

    const opNum = document.getElementById('opNum');
    opNum.textContent = opScore;
    scoreNum.appendChild(opNum);

    const results = document.querySelector('.results');
    const result = document.getElementById("resultDisplay");
    result.textContent = x;
    results.appendChild(result);

    if (userScore === 5){
        userScore = 0;
        opScore = 0;
        result.textContent = "You won!";
    } else if(opScore === 5) {
        userScore = 0;
        opScore = 0;
        result.textContent = "You lost.";
    }
}

/*console.log(playGame())*/

const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
    userChoice = "rock";
    playGame();
});

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {
    userChoice = "paper";
    playGame();
});

const scissor = document.querySelector('#scissor')
scissor.addEventListener('click', () => {
    userChoice = "scissor";
    playGame();
});


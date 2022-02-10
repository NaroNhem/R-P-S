
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


function playRound(computerSelection, userSelection) {
    if (computerSelection === userSelection){
        return "Tie"
    }else if (computerSelection === "rock") {
        if (userSelection === "paper") {
            userScore +=1;
            return "You win";
        } else if (userSelection === "scissor") {
            opScore += 1;
            return "You lose";
        }
    } else if (computerSelection === "paper") {
        if (userSelection === "scissor") {
            userScore +=1;
            return "You win";
        } else if (userSelection === "rock") {
            opScore += 1;
            return "You lose";
        }
    } else if (computerSelection === "scissor") {
        if (userSelection === "rock") {
            userScore +=1;
            return "You win";
        } else if (userSelection ==="paper") {
            opScore += 1;
            return "You Lose";
        }
    }
}


function playGame(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    let compChoice = computerPlay(randomNumber);
    console.log(playRound(compChoice, userChoice))
    const scoreNum = document.querySelector('.scoreNum');

    const userNum = document.getElementById("userNum");
    userNum.textContent = userScore;
    scoreNum.appendChild(userNum);

    const opNum = document.getElementById('opNum');
    opNum.textContent = opScore;
    scoreNum.appendChild(opNum);        
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
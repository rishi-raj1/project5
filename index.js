const computerScore = document.getElementById('comp-score');
const yourScore = document.getElementById('yo-score');

// console.log(computerScore, yourScore);

const imageSection = document.getElementsByClassName('image-section')[0];

const images = document.getElementsByClassName('image');

const playAgainBtn = document.getElementsByClassName('play-again')[0];
const playAgainBtn2 = document.getElementsByClassName('play-again2')[0];
const replay = document.getElementsByClassName('replay')[0];

// console.log(playAgainBtn, playAgainBtn2, replay);

const rules = document.getElementsByClassName('rules')[0];
const next = document.getElementsByClassName('next')[0];

const ruleDetails = document.getElementsByClassName('rule-details')[0];

const winLoss = document.getElementsByClassName('win-loss')[0];


const myResult = document.getElementsByClassName('my-result')[0];
const computerResult = document.getElementsByClassName('computer-result')[0];
const mySelf = document.getElementsByClassName('myself')[0];
const opponent = document.getElementsByClassName('opponent')[0];

const closeButton = document.getElementsByClassName('close-button')[0];

const winPage = document.getElementsByClassName('win-page')[0];
const gameInfo = document.getElementsByClassName('game-info')[0];

if (localStorage.getItem('computer-score') == null) {
    localStorage.setItem('computer-score', JSON.stringify(0));
}

if (localStorage.getItem('your-score') == null) {
    localStorage.setItem('your-score', JSON.stringify(0));
}



function Hide() {
    playAgainBtn.style.display = 'none';
    playAgainBtn2.style.display = 'none';
    replay.style.display = 'none';
    winLoss.style.display = 'none';

    next.style.display = 'none';
    ruleDetails.style.display = 'none';

    winPage.style.display = 'none';
}

Hide();

function showRules() {
    ruleDetails.style.display = 'block';
}


function closeRules() {
    ruleDetails.style.display = 'none';
}

rules.addEventListener('click', (e) => showRules(e));
closeButton.addEventListener('click', (e) => closeRules(e));



function imageClick(item) {
    winLoss.style.display = 'block';
    imageSection.style.display = 'none';

    const itemsArr = ['rock', 'scissor', 'paper'];
    const randomNumber = Math.floor(Math.random() * 2);
    const computerSelected = itemsArr[randomNumber];



    if (item.classList.contains('rock')) {
        myResult.innerHTML = '<img src="rock.png" alt="rock-image" />'

        if (computerSelected == 'rock') {
            computerResult.innerHTML = '<img src="rock.png" alt="rock-image" />'
            mySelf.innerText = "TIE UP";
            opponent.style.display = 'none';

            replay.style.display = 'block';
        }
        else if (computerSelected == 'paper') {
            computerResult.innerHTML = '<img src="paper.png" alt="paper-image" />'
            mySelf.innerText = "YOU LOST";

            playAgainBtn.style.display = 'block';

            let compScore = JSON.parse(localStorage.getItem('computer-score'));
            compScore++;
            localStorage.setItem('computer-score', JSON.stringify(compScore));

        }
        else if (computerSelected == 'scissor') {
            computerResult.innerHTML = '<img src="scissor.png" alt="scissor-image" />'
            mySelf.innerText = "YOU WIN";

            playAgainBtn.style.display = 'block';

            let youScore = JSON.parse(localStorage.getItem('your-score'));
            youScore++;
            localStorage.setItem('your-score', JSON.stringify(youScore));
        }
    }
    else if (item.classList.contains('paper')) {
        myResult.innerHTML = '<img src="paper.png" alt="paper-image" />'

        if (computerSelected == 'rock') {
            computerResult.innerHTML = '<img src="rock.png" alt="rock-image" />'
            mySelf.innerText = "YOU WIN";

            playAgainBtn.style.display = 'block';

            let youScore = JSON.parse(localStorage.getItem('your-score'));
            youScore++;
            localStorage.setItem('your-score', JSON.stringify(youScore));
        }
        else if (computerSelected == 'paper') {
            computerResult.innerHTML = '<img src="paper.png" alt="paper-image" />'
            mySelf.innerText = "TIE UP"
            opponent.style.display = 'none';

            replay.style.display = 'block';
        }
        else if (computerSelected == 'scissor') {
            computerResult.innerHTML = '<img src="scissor.png" alt="scissor-image" />'
            mySelf.innerText = "YOU LOST";

            playAgainBtn.style.display = 'block';

            let compScore = JSON.parse(localStorage.getItem('computer-score'));
            compScore++;
            localStorage.setItem('computer-score', JSON.stringify(compScore));
        }
    }
    else if (item.classList.contains('scissor')) {
        myResult.innerHTML = '<img src="scissor.png" alt="scissor-image" />'

        if (computerSelected == 'rock') {
            computerResult.innerHTML = '<img src="rock.png" alt="rock-image" />'
            mySelf.innerText = "YOU LOST";

            playAgainBtn.style.display = 'block';

            let compScore = JSON.parse(localStorage.getItem('computer-score'));
            compScore++;
            localStorage.setItem('computer-score', JSON.stringify(compScore));
        }
        else if (computerSelected == 'paper') {
            computerResult.innerHTML = '<img src="paper.png" alt="paper-image" />'
            mySelf.innerText = "YOU WIN";

            playAgainBtn.style.display = 'block';

            let youScore = JSON.parse(localStorage.getItem('your-score'));
            youScore++;
            localStorage.setItem('your-score', JSON.stringify(youScore));
        }
        else if (computerSelected == 'scissor') {
            computerResult.innerHTML = '<img src="scissor.png" alt="scissor-image" />'
            mySelf.innerText = "TIE UP";
            opponent.style.display = 'none';

            replay.style.display = 'block';
        }
    }

    computerScore.innerText = JSON.parse(localStorage.getItem('computer-score'));
    yourScore.innerText = JSON.parse(localStorage.getItem('your-score'));
}

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', (e) => imageClick(images[i]));
}








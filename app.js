let started = false;
let level = 0;
let colors = ['orange', 'brown', 'violet', 'pink'];
let userSeq = [];
let gameSeq = [];
let step = 0;
let scores = [];

let body = document.querySelector('body');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

document.addEventListener('keypress', function () {
    if (started == false) {
        started = true;
        h3.innerText = '';
        levelUp();
        if (scores.length == 0) userInput();
    }
})

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random() * 3);
    let colorToFlash = colors[randomIndex];
    let divToFlash = document.querySelector(`#${colorToFlash}`);

    setTimeout(function () {
        divToFlash.classList.add('gameFlash');
        setTimeout(function () {
            divToFlash.classList.remove('gameFlash');
        }, 500);
    }, 1000);

    gameSeq.push(colorToFlash);
    console.log('Game Sequence:', gameSeq);
}

function userInput() {
    let divs = document.querySelectorAll('.color');
    for (let div of divs) {
        div.addEventListener('click', function () {
            if (gameSeq.length === 0) {
                alert('Click okay and press any key to restart the game.');
            } else {
                div.classList.add('userFlash');
                setTimeout(function () {
                    div.classList.remove('userFlash');
                }, 200);
                let colorClicked = div.getAttribute('id');
                userSeq.push(colorClicked);
                console.log('User Sequence:', userSeq);
                matchSequence();
            }
        })
    }
}

function matchSequence() {
    if (userSeq[step] === gameSeq[step]) {
        if (step === level - 1) {
            step = 0;
            userSeq = [];
            levelUp();
        } else {
            step++;
        }
    } else {
        scores.push(level - 1);
        h2.innerText = 'Game over!';
        h3.innerHTML = `Oops! You made a mistake.<br>Your score was ${level - 1}. Press any key to restart.<br>Highscore: ${Math.max(...scores)}.`;
        console.log(scores);
        body.classList.add('gameOver');
        setTimeout(function () {
            body.classList.remove('gameOver');
        }, 300);

        level = 0;
        step = 0;
        gameSeq = [];
        userSeq = [];
        started = false;
    }
}
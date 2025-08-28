let score = {
    wins: 0,
    losses: 0,
    ties: 0
};

let game = document.getElementById("human");

let game1 = document.getElementById("computer");

let game2 = document.getElementById("TIE");

let Result = document.getElementById("Result");

function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}

function pickMove() {
    let computerMove = '';
    const result = Math.random();
    if (result >= 0 && result < 1 / 3) {
        computerMove = 'rock';
    } else if (result < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }
    return computerMove;
}

function playGame(playerMove) {
    const computerMove = pickMove();
    let message = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            message = 'Tie.';
            score.ties++;
        } else if (computerMove === 'scissors') {
            message = 'You won.';
            score.wins++;
        } else {
            message = 'You lose.';
            score.losses++;
        }
    }

    if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            message = 'You won.';
            score.wins++;
        } else if (computerMove === 'scissors') {
            message = 'You lose.';
            score.losses++;
        } else {
            message = 'Tie.';
            score.ties++;
        }
    }

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            message = 'You lose.';
            score.losses++;
        } else if (computerMove === 'scissors') {
            message = 'Tie.';
            score.ties++;
        } else {
            message = 'You won.';
            score.wins++;
        }
    }
    const res = `You picked ${playerMove}. Computer picked ${computerMove}. ${message}`;

    document.getElementById("human").innerHTML = score.wins;
    document.getElementById("computer").innerHTML = score.losses;
    document.getElementById("Result").innerHTML = res;
}
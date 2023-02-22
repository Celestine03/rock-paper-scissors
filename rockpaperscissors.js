// returns a random integer from 0 to 2
function comp_move() {
    let move = Math.floor(Math.random() * 3);
    if (move === 0) {
        return "ROCK";
    } else if (move === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function result(p, c) {
    if (p === c) {
        return "It's a tie!"
    } else if (p === "ROCK") {
        if (c === "PAPER") {
            return "Paper beats rock, computer wins!"
        } else {
            return "Rock beats scissors, you win!"
        }
    } else if (p === "PAPER") {
        if (c === "ROCK") {
            return "Paper beats rock, you win!"
        } else {
            return "Scissors beats paper, computer wins!"
        }
    } else {
        if (c === "ROCK") {
            return "Rock beats scissors, computer wins!"
        } else {
            return "Scissors beats paper, you win!"
        }
    }
}

function rock() {
    var currentPlayerMove = document.getElementById("playerMove").style.display = 'block';
    var currentCompMove = document.getElementById("computerMove").style.display = 'block';
    var newPlayerMove = "ROCK";
    var newCompMove = comp_move()
    var outcome = result(newPlayerMove, newCompMove)
    var winner = outcome.includes("you win!");
    var tie = outcome.includes("tie!");
    if (winner) {
        newPlayerMove = "<span style='color:green'> ROCK </span>";
    } else if (tie) {
        newPlayerMove = "<span style='color:yellow'> ROCK </span>";
    } else {
        newPlayerMove = "<span style='color:red'> ROCK </span>";
    }
    document.getElementById("playerMove").innerHTML = newPlayerMove;
    document.getElementById("computerMove").innerHTML = newCompMove;
    document.getElementById("result").innerHTML = outcome;
}

function paper() {
    var currentPlayerMove = document.getElementById("playerMove").style.display = 'block';
    var currentCompMove = document.getElementById("computerMove").style.display = 'block';
    var newPlayerMove = "PAPER";
    var newCompMove = comp_move()
    var outcome = result(newPlayerMove, newCompMove)
    var winner = outcome.includes("you win!");
    var tie = outcome.includes("tie!");
    if (winner) {
        newPlayerMove = "<span style='color:green'> PAPER </span>";
    } else if (tie) {
        newPlayerMove = "<span style='color:yellow'> PAPER </span>";
    } else {
        newPlayerMove = "<span style='color:red'> PAPER </span>";
    }
    document.getElementById("playerMove").innerHTML = newPlayerMove;
    document.getElementById("computerMove").innerHTML = newCompMove;
    document.getElementById("result").innerHTML = outcome;
}

function scissors() {
    var currentPlayerMove = document.getElementById("playerMove").style.display = 'block';
    var currentCompMove = document.getElementById("computerMove").style.display = 'block';
    var newPlayerMove = "SCISSORS";
    var newCompMove = comp_move()
    var outcome = result(newPlayerMove, newCompMove)
    var winner = outcome.includes("you win!");
    var tie = outcome.includes("tie!");
    if (winner) {
        newPlayerMove = "<span style='color:green'> SCISSORS </span>";
    } else if (tie) {
        newPlayerMove = "<span style='color:yellow'> SCISSORS </span>";
    } else {
        newPlayerMove = "<span style='color:red'> SCISSORS </span>";
    }
    document.getElementById("playerMove").innerHTML = newPlayerMove;
    document.getElementById("computerMove").innerHTML = newCompMove;
    document.getElementById("result").innerHTML = outcome;
}

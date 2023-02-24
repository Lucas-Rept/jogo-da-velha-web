let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ["O", "X"];
let end = false;
let pontos1 = 0;
let pontos2 = 0;

function playAudio() {
    let audio = new Audio("../audio/mixkit-modern-technology-select-3124.mp3");
    audio.play();
}

function play(square) {


    if (board[square] == "") {


        playerTime == 0 ? board[square] = "O" : board[square] = "X";

        playerTime == 0 ? playerTime = 1 : playerTime = 0;
    }

    if (isWin()) {
        updateSquares();

        playerTime == 1 ? pontos1++ : pontos2++;

        setTimeout(() => {
            if (playerTime == 1) {
                alert("Jogador 1 venceu!");
            }
            else {
                alert("Jogador 2 venceu!");
            }
        }, 10);
        replay();
        updateScore();
        return;
    }

    if (draw()) {
        updateSquares();
        setTimeout(() => {
            alert("Jogo Empatado");
        }, 10)
        replay();
    }


}

function isWin() {
    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winStates.length; i++) {
        pos1 = winStates[i][0];
        pos2 = winStates[i][1];
        pos3 = winStates[i][2];

        if (board[pos1] == board[pos2] && board[pos3] == board[pos2] && board[pos1] != "") {
            return true;
        }
    }

    return false;
}

function draw() {
    let emptySpaces = "0";
    for (i = 0; i < board.length; i++) {
        if (board[i] == "") {
            emptySpaces++;
        }
    }

    if (emptySpaces == 0) {
        return true;
    }

    return false;
}

function replay() {
    for (let i = 0; i < board.length; i++) {
        board[i] = "";
    }
}

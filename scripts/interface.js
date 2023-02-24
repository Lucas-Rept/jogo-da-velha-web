let squares = document.querySelectorAll(".square");
let square;
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
p1.innerHTML = pontos1;
p2.innerHTML = pontos2;

squares.forEach((square) => {
    square.addEventListener("click", handleClick);
})

function handleClick(event) {
    square = event.target.id;
    playAudio();
    play(square);
    setTimeout(() => {
        updateSquares();
    }, 15)
}


function updateSquares() {
    for (i = 0; i < board.length; i++) {
        if (board[i] == "O") {
            squares[i].innerHTML = "<div></div>";
            squares[i].firstChild.classList.add("O");
            if (i == square)
                squares[i].firstChild.classList.add("show");
        }
        if (board[i] == "X") {
            squares[i].innerHTML = "<div></div>";
            squares[i].firstChild.classList.add("X");
            if (i == square)
                squares[i].firstChild.classList.add("show");
        }
        if (board[i] == "") {
            squares[i].innerHTML = "";
        }

    }
}

function updateScore() {
    p1.innerHTML = pontos1;
    p2.innerHTML = pontos2;
}
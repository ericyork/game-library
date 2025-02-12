const statusDisplay = document.querySelector('.game--status');

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

if (currentPlayer == 'X') {
    function handleCellClick(clickedCellEvent) {
        const clickedCell = clickedCellEvent.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }

        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    }
} else if (currentPlayer == "O") {
    function handleCellClickComputer() {

        let counter = 0;
        const isEmpty = 0;

        while (counter != 1) {
            let rInt =  randomInt(9)
            if (gameState[rInt] == "") {
                isEmpty = rInt;
                counter = 1;
            }
        }

        switch (isEmpty) {
            case (isEmpty = 0):
                gameState[isEmpty] = currentPlayer;
                document.getElementById("c0").innerHTML = currentPlayer;
                break;
            case (isEmpty = 1):
                gameState[isEmpty] = currentPlayer;
                document.getElementById("c1").innerHTML = currentPlayer;
                break;
            case (isEmpty = 2):
                gameState[isEmpty] = currentPlayer;
                document.getElementById("c2").innerHTML = currentPlayer;
                break;
            case (isEmpty = 3):
                gameState[isEmpty] = currentPlayer;
                document.getElementById("c3").innerHTML = currentPlayer;
                break;
            case (isEmpty = 4):
                gameState[isEmpty] = currentPlayer;
                document.getElementById("c4").innerHTML = currentPlayer;
                break;
            case (isEmpty = 5):
                gameState[isEmpty] = currentPlayer;
                document.getElementById("c5").innerHTML = currentPlayer;
                break;
            case (isEmpty = 6):
                gameState[isEmpty] = currentPlayer;
                document.getElementById("c6").innerHTML = currentPlayer;
                break;
            case (isEmpty = 7):
                gameState[isEmpty] = currentPlayer;
                document.getElementById("c7").innerHTML = currentPlayer;
                break;
            case (isEmpty = 8):
                gameState[isEmpty] = currentPlayer;
                document.getElementById("c8").innerHTML = currentPlayer;
                break;
            default:
                break;
        }

        handleResultValidation();
    }
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);


//Note that you WILL need to change the fill character on the alternate clicks.
//You will also need to verify win conditions are met and output properly
//This runs when a button is clicked, but you should integrate it better
function compPlay() { //function to fill a random square
  let emptyCells = []; //creates array for empty cells
  const allCells = document.querySelectorAll('.cell'); //sets up array of all cells
  for (const aCell of allCells) { //loops through array to find empties
    if (aCell.innerHTML == "") { //if a cell is empty . . .
      emptyCells.push(aCell);    //add it to the array of empties
    }
  }

  let rand = Math.floor(Math.random() * emptyCells.length); //generates a random number between 0 and the number of empty cells

  if (emptyCells.length > 0) { //as long as there are empty cells . . .
    if (emptyCells[rand].innerHTML == "") { //and if a random cell is empty  . . .
      emptyCells[rand].innerHTML = "O"; //fill that cell with with a "O"
    }
  } else { //if no empty cells remain . . .
    console.log("Game Over!"); //log game over . . .
    return; //and end play
  }

  //logs, just FYI
  console.log("Rand #: " + rand);
  console.log("# of Empties: " + emptyCells.length);
}

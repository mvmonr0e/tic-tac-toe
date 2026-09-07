const Gameboard = {
    // what if in the board we tracked if each row and column was already filled,
    // then only check unfilled rows, columns, and diagonals on each gameOver() call?
    board: [
        ['0','0','0'],
        ['0','0','0'],
        ['0','0','0']
    ],

    validRows: [0,1,2],
    validCols: [0,1,2]
}
canMove = false;

// player object
class Player {
    constructor (name, tic, move, winner){
        this.name = name;
        this.tic = tic;
        this.move = move;
        this.winner = winner;
    }
}

//create new player obj
function createPlayer(name, tic){
    canMove = !canMove;
    winner = false;
    return new Player(name, tic, canMove, winner);
}


// move on the board
function move(player, row, col){
    Gameboard.board[row][col] = player.tic;
    p1.move = !p1.move;
    p2.move = !p2.move;
}

// check if game is over
function gameOver(){
    // check for tie
    if (!Gameboard.validCols && !Gameboard.validRows){
        return true;
    }

    // check each row
    spliceRow = -1;
    for (const i of Gameboard.validRows){
        tempRow = [];
        for (const j of Gameboard.validCols){
            tempRow.push([Gameboard.board[i][j]]);
        }
        if (tempRow.join('') === 'xxx'){
            p1.winner = true;
            return true;
        }
        else if (tempRow.join('') === 'ooo') {
            p2.winner = true;
            return true;
        }
        else if (!tempRow.join('').includes('0')){
            spliceRow = i
        }

        if (spliceRow !== -1){
            Gameboard.validRows.splice(1,spliceRow);
        }
    }

    // check each column
    spliceCol = -1;
    for (const j of Gameboard.validCols){
        tempCol = [];
        for (const i of Gameboard.validRows){
            tempCol.push([Gameboard.board[i][j]]);
        }
        if (tempCol.join('') === 'xxx'){
            p1.winner = true;
            return true;
        }
        else if (tempCol.join('') === 'ooo') {
            p2.winner = true;
            return true;
        }
        else if (!tempCol.join('').includes('0')){
            spliceCol = j;
        }
    }
    if (spliceCol !== -1){
        Gameboard.validCols.splice(1,spliceCol);
    }

    // check each diagonal
    diagonalUp = `${Gameboard.board[0][2]}${Gameboard.board[1][1]}${Gameboard.board[2][0]}`;
    diagonalDown = `${Gameboard.board[0][0]}${Gameboard.board[1][1]}${Gameboard.board[2][2]}`;
    if (diagonalUp === 'xxx' || diagonalDown === 'xxx'){
        p1.winner = true;
        return true;
    }
    else if (diagonalUp === 'ooo' || diagonalDown === 'ooo'){
        p2.winner = true;
        return true;
    }
}


// check if move is valid
function isValid(row,col){
    if (Gameboard.board[row][col] !== '0'){
        return false;
    }
    return true;
}

//play game
function play(){
    while(!gameOver()){
        // show current board
        displayBoard();

        // ask for input & validate it
        let userInput = prompt("Enter the coords of where you would like to move (e.g. 0 3):");
        let [row, col] = userInput.split(' ').map(Number);
        while(!isValid(row,col)){
            userInput = prompt("Invalid coords. Please try again:");
            [row, col] = userInput.split(' ').map(Number);
        }

        // update board
        if (p1.move){
            move(p1,row,col);
        } else {
            move(p2,row,col);
        }
    } displayBoard();

    if (p1.winner){
        console.log('P1 wins!');
    }
    else if (p2.winner){
        console.log('P2 wins!');
    } else {
        console.log('Scratch! Nobody wins!');
    }
}

function displayBoard(){
    console.clear();

    count = 0
    for (const row of Gameboard.board){
        rowString = '';
        for (const val of row){
            if (val === 'o'){
                rowString += '|_O_|';
            }
            else if (val === 'x'){
                rowString += '|_X_|';
            } else {
                rowString += '|___|';
            }
        }
        console.log(rowString);
    }
}

const p1 = createPlayer('p1','x');
const p2 = createPlayer('p2','o');
play();
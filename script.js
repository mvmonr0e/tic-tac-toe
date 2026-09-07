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
    if (!isValid(row,col)){
        console.log('move is not valid, try again');
    } else {
        Gameboard.board[row][col] = player.tic;
        p1.move = !p1.move;
        p2.move = !p2.move;
    }
}

// check if game is over
function gameOver(){
    // check each row
    spliceRow = -1;
    for (const i of validRows){
        tempRow = [];
        for (const j of validCols){
            tempRow.push([Gameboard.board[i][j]]);
        }
        if (tempRow.join('') === 'xxx'){
            winner(p1);
            return true;
        }
        else if (tempRow.join('') === 'ooo') {
            winner(p2);
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
    for (const j of validCols){
        tempCol = [];
        for (const i of validRows){
            tempRow.push([Gameboard.board[i][j]]);
        }
        if (tempRow.join('') === 'xxx'){
            winner(p1);
            return true;
        }
        else if (tempRow.join('') === 'ooo') {
            winner(p2);
            return true;
        }
        else if (!tempCol.join('').includes('0')){
            spliceCol = j;
        }
    }
    if (spliceCol !== -1){
        Gameboard.validCols.splice(1,spliceCol);
    }
}


// check if move is valid
function isValid(row,col){
    if (Gameboard.board[row][col] === '0'){
        return false;
    }
    return true;
}

//play game
function play(){
    displayBoard();

}

function displayBoard(){
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
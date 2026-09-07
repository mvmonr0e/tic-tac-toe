const Gameboard = {
    // what if in the board we tracked if each row and column was already filled,
    // then only check unfilled rows, columns, and diagonals on each gameOver() call?
    board: [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
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

}


// move on the board
function move(player,row, col){

}

// check if game is over
function gameOver(){

}


// check if move is valid
function isValid(row,col){

}

//play game
function play(){
    
}

const p1 = createPlayer('p1','x');
const p2 = createPlayer('p2','o');

const Gameboard = {
    board: [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
}
canMove = false;

class Player {
    constructor (name, tic, move){
        this.name = name
        this.tic = tic
        this.move = move
    }
}

function createPlayer(name, tic){
    canMove = !canMove;
    return new Player(name,tic,canMove);
}

function move(player, row, col){
    if (!isValid(row,col)){
        console.log('move is not valid, try again')
    }
}

function isValid(row,col){
    
}
const p1 = createPlayer('p1','x');
const p2 = createPlayer('p2','o');

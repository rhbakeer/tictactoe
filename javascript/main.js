import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();
gameView.updateBoard(game);
document.querySelector(".start")
    .addEventListener("click", () => {
        gameStart();
    })


let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", (event) => {
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    
    if(game.board[i]){
        return;
    }

    game.makeMove(i);
    game.nextTurn();
    gameView.updateBoard(game);

    var boardFull = true;

    for(var j=0; j<9; j++)
        {
            if(game.board[j] == null){
                boardFull = false;
            }
        }

        if(boardFull){
            alert("DRAW! Play Again");
        }
    }

function gameStart(){
    game = new Game();
    gameView.updateBoard(game);
}


gameView.updateBoard(game);
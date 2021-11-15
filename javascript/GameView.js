class GameView {

    updateBoard(game){    
        this.updateTurn(game);
        for(let i = 0; i < game.board.length; i++){
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
            tile.textContent = game.board[i];

            let tileType = game.board[i] == 'X' ? 'tile-x' : 'tile-o';
        }
    }

     
    updateTurn(game){
        let playerx = document.querySelector(".player-x");
        playerx.classList.remove('active');

        let playero = document.querySelector(".player-o");
        playero.classList.remove('active');       
        
        if(game.turn == 'O'){
            playero.classList.add('active');
        } else {
            playerx.classList.add('active');
        }
    }
}

export default GameView;
"use strict";

const playerFactory = (name, playLetter = "X") => {
    const cellpositions = [];

    const getName = () => name;
    const getPlayLetter  = () => playLetter;
    const getCellPositions = () => cellpositions;
    
   
    const playPositions = (position) =>{
        cellpositions.push(position.toString());
    };

    const chooseCell = (cell, index) => {
        cell.innerHTML = getPlayLetter();
        playPositions(index);
        return isWinner();
    };

    const isWinner = () => {
        if (cellpositions.length < 3) {
         return false;
        }else{
            let winner_formulas = ['012', '345', '678', '036', '147', '258', '048', '246'];
            return check_player_combination(winner_formulas, cellpositions.sort());  
        }
    };

    const check_player_combination = (winner_formulas, cellpositions) => {
        let found_winner = false;
        for (let win of winner_formulas) { 
            let count = 0;
            let win_chars = win.split('');
           for (let x of win_chars) {
                if (cellpositions.includes(x)) {
                    count = count + 1;
                };
                if (count == 3) {
                    return  true;
                };
            };

        };
        return found_winner;
    };
  
    return { getName, getPlayLetter, getCellPositions, chooseCell};
};

const startgame = document.querySelector("form");
startgame.addEventListener("submit", e => {

    const p1 = document.querySelector('[name="player1"]').value;
    const p2 = document.querySelector('[name="player2"]').value;

    let player1 = playerFactory(p1, "X");
    let player2 = playerFactory(p2, "O");

    let Game = GameModule;
    Game.displayController();

   Game.startGame(player1, player2);
    e.preventDefault();
});

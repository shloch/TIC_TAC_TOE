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
        console.log('cellpositions='+cellpositions);
        let found_winner = false;
        for (let win of winner_formulas) { 
            //console.log('win='+win);
            let count = 0;
            let win_chars = win.split('');
            console.log('win_chars='+win_chars);
           for (let x of win_chars) {
                //console.log('x='+x);
                if (cellpositions.includes(x)) {
                    count = count + 1;
                    console.log("count = " + count);
                    
                };
                if (count == 3) {
                    console.log("WINNER");
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

    //player1.playPositions(2);
    //console.log(player1.cellpositions)
    //player1.playPositions(6);
    //console.log(player1.cellpositions)


    // game flow
    const cells = document.querySelectorAll("td")
    let x = 1;
    let cellIndex = []
    cells.forEach((cell, index, cells) => {
        cell.addEventListener('click', event => {            
            console.log(index);
            if (!cellIndex.includes(index)){
                if (x % 2 === 0)
                {
                    let win = player2.chooseCell(cell, index);
                    x += 1;
                    cellIndex.push(index)
                    
                    //console.log(player2.getCellPositions());
                    if (win) {
                        alert('GAME OVER !!! --- PLAYER 2 WON')
                    } else if (cellIndex.length == 9) {
                        alert('GAME OVER !!! --- DRAW GAME');
                    }
                }
                else
                {
                    let win = player1.chooseCell(cell, index);
                    x += 1;
                    cellIndex.push(index)
                    
                    //console.log(player1.getCellPositions());
                    if (win) {
                        alert('GAME OVER !!! --- PLAYER 1 WON')
                    } else if (cellIndex.length == 9) {
                        alert('GAME OVER !!! --- DRAW GAME');
                    }
                }    
            }
            //console.log(x);
        }, false)
    })
    //game flow [end]
    e.preventDefault();
});

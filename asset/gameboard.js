"use strict";

var GameModule = (function() {
    let gameboard = [];

    
    let verifyGameWinner = function(isWinner, player) {
        if (isWinner) {
            alert(`GAME OVER !!! --- ${player.getName().toUpperCase()} WON`);
        } else if (gameboard.length == 9) {
            alert('GAME OVER !!! --- DRAW GAME');
        };
    }

    
    let mod = {};

    mod.displayController = function() {
        let tbl_text = `<tbody>
                        <tr>
                            <td id="one" data-value="1"></td>
                            <td id="two" data-value="2"></td>
                            <td id="three" data-value="3"></td>
                        </tr>
                        <tr>
                            <td id="four" data-value="4"></td>
                            <td id="five" data-value="5"></td>
                            <td id="six" data-value="6"></td>
                        </tr>
                        <tr>
                            <td id="seven" data-value="7"></td>
                            <td id="eight" data-value="8"></td>
                            <td id="nine" data-value="9"></td>
                        </tr>
                    </tbody>`;
        let tbl = document.querySelector("table")
        tbl.innerHTML = tbl_text;
    };


    mod.startGame = function(player1, player2) {
        const cells = document.querySelectorAll("td")
        let x = 1;
        cells.forEach((cell, index, cells) => {
            cell.addEventListener('click', event => {       
                if (!gameboard.includes(index)){
                    if (x % 2 === 0)
                    {
                        let win = player2.chooseCell(cell, index);
                        x += 1;
                        gameboard.push(index)               
                        verifyGameWinner(win, player2);
                    }
                    else
                    {
                        let win = player1.chooseCell(cell, index);
                        x += 1;
                        gameboard.push(index)
                        verifyGameWinner(win, player1);
                    }    
                }
            }, false)
        })
    };

    mod.displayGameOver = function() {};    
    return mod;
})();

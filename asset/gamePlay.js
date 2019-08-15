"use strict";

const playerFactory = (name, playLetter = "X") => {
    const cell = [,,,,,,,,];
    const playPositions = (position) =>{
        cell.push(position)
    };
    return { name, cell, playPositions, playLetter };
};

const startgame = document.querySelector("form");

startgame.addEventListener("submit", e => {
    const p1 = document.querySelector('[name="player1"]').value;
    const p2 = document.querySelector('[name="player2"]').value;

    let player1 = playerFactory(p1, "X");
    let player2 = playerFactory(p2, "O");

    player1.cell.push(2);
    player2.cell.push(6);
    console.log(player1,player2)
    playLoop(player1, player2);
    e.preventDefault();
});

const playLoop = (player1, player2) => {
    const fields = document.querySelectorAll("td")
    let x = 1;
    let fieldIndex = []
    fields.forEach((field, index, fields) => {
        field.addEventListener('click', event => {            
            console.log(index);
            if (!fieldIndex.includes(index)){
                if (x % 2 === 0)
                {
                    field.innerHTML = "O";
                    x += 1;
                    player1.cell.push()
                    fieldIndex.push(index)
                }
                else
                {
                    field.innerHTML = "X"
                    x += 1;
                    fieldIndex.push(index)
                }    
            }
            console.log(x);
        }, false)
    })
}

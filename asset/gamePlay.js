"use strict";

const playerFactory = (name, playLetter = "X") => {
    const cellpositions = [];

    const getName = () => name;
    const getPlayLetter  = () => playLetter;
    const getCellPositions = () => cellpositions;
    
   
    const playPositions = (position) =>{
        cellpositions.push(position)
    };
    return { getName, getPlayLetter, playPositions, getCellPositions};
};

const startgame = document.querySelector("form");
startgame.addEventListener("submit", e => {
    const p1 = document.querySelector('[name="player1"]').value;
    const p2 = document.querySelector('[name="player2"]').value;

    let player1 = playerFactory(p1, "X");
    let player2 = playerFactory(p2, "O");

    player1.playPositions(2);
    console.log(player1.cellpositions)
    player1.playPositions(6);
    console.log(player1.cellpositions)

    e.preventDefault();
});

const playLoop = () => {
    let playcount = 0
    while (playcount < 9) {
        
        playcount++
    }

}

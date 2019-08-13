"use strict";

const playerFactory = (name, playpositions = [], playLetter = "X") => {
    return { name, playpositions, playLetter };
};

const startgame = document.querySelector("form");
startgame.addEventListener("submit", e => {
    const p1 = document.querySelector('[name="player1"]').value;
    const p2 = document.querySelector('[name="player2"]').value;

    let player1 = playerFactory(p1, [], "X");
    let player2 = playerFactory(p2, [], "O");
    console.log(player1.name);
});
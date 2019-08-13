"use strict";

var GameModule = (function() {
    let gameboard = {
        board: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };

    let mod = {};

    mod.displayController = function() {
        //displays state of array on DOM
    };

    mod.startGame = function() {};

    mod.registerPlayerMove = function(Player, move) {
        //register player move
    };

    mod.checksWinner = function(gameboard) {};
    mod.gameOver = function() {
        //game over
    };

    return mod;
})();
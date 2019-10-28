/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//game initialized as global variable
let game;

document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame(); 
});

document.querySelector('div#qwerty').addEventListener('click', (event) => {
    if(event.target.type === 'submit') {
        game.handleInteraction(event.target);
    }
});
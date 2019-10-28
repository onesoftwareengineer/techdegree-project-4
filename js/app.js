/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//game initialized as global variable
let game;

document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame(); 
    console.log(game);
});




// game.phrases.forEach( (phrase, index) => {
//     console.log(`phrase ${index} : ${phrase.phrase}`);     
// });

// for(let x=0; x<10; x++) {
//     console.log(game.getRandomPhrase().phrase);
// };

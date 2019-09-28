/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const phrase = new Phrase(game.getRandomPhrase().phrase);
phrase.addPhraseToDisplay();

// game.phrases.forEach( (phrase, index) => {
//     console.log(`phrase ${index} : ${phrase.phrase}`);     
// });

// for(let x=0; x<10; x++) {
//     console.log(game.getRandomPhrase().phrase);
// };

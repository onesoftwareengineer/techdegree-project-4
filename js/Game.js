/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [
            { phrase: 'everything happens for a reason'},
            { phrase: 'fate is what we have done'},
            { phrase: 'actions are the seed of fate'},
            { phrase: 'deeds grow into destiny'},
            { phrase: 'fate will find a way'}
        ];
        return phrases;
    };

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomIndex = Math.floor( Math.random()*this.phrases.length );        
        return this.phrases[randomIndex];
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.querySelector('div#overlay').style.display = 'none';
        const phrase = new Phrase(game.getRandomPhrase().phrase);
        this.activePhrase = phrase.phrase;
        phrase.addPhraseToDisplay();
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        console.log(button);
    };

    

}


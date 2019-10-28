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
    * @return {array} An array of phrase objects that could be used in the game
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
        this.activePhrase = phrase;
        phrase.addPhraseToDisplay();
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        // checks to see if the onscreen keyboard button clicked by the player matches a letter in the phrase
        if( this.activePhrase.checkLetter(button.innerText) === false) {
            // Disable the selected letter’s onscreen keyboard button.
            button.disabled = true;
            // adds wrong class to button
            button.className = 'key wrong';
            //remove one life, no need to check if game is over, verification is done in removelife method
            this.removeLife();
        }
        else {
            // Disable the selected letter’s onscreen keyboard button.
            button.disabled = true;
            // If the phrase includes the guessed letter, add the `chosen` CSS class to the selected letter's keyboard button
            button.className = 'key chosen';
            this.activePhrase.showMatchedLetter(button.innerText);
            // calls the `checkForWin()` method. If the player has won the game, also call the `gameOver()` method.
            if(this.checkForWin()) {
                this.gameOver('won');
            }
        }
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        let gameIsWon = true;
        document.querySelectorAll(`.hide`).forEach(x => {
            //if className contains hide, letter hasn't been guessed yet so game is not won yet
            if( x.className.indexOf('hide letter') !== -1) {
                gameIsWon = false;
            }
        });
        return gameIsWon;
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        document.querySelectorAll('li.tries img')[this.missed].setAttribute('src','images/lostHeart.png') ;
        this.missed++;
        if(this.missed > 4 ) {
            this.gameOver('lost');
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.querySelector('div#overlay');
        overlay.style.display = "";
        if(gameWon === 'lost') {
            overlay.className = 'lose';
            overlay.children[1].innerText = 'You lost, but keep on trying man and you\'ll make it too.';
        }
        else if(gameWon === 'won') {
            overlay.className = 'win';
            overlay.children[1].innerText = 'Great job man, you just won the game ;)';
        }
        this.gameReset();
    };

    /**
    * Resetting the gameboard between games
    */
    gameReset() {
        //Remove all li elements from the Phrase ul element
        document.querySelectorAll('div#phrase ul li').forEach(element => {
            element.remove();
        });
        //Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use the chosen or wrong CSS classes
        document.querySelectorAll('.key').forEach(element => {
            element.className = 'key';
            element.removeAttribute('disabled');
        });
        //Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image
        document.querySelectorAll('li.tries img').forEach(element => {
            element.setAttribute('src','images/liveHeart.png') ;
        });
    }
}


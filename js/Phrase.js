/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    };

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {        
        let htmlToPrint = '';
        for(let x=0; x< this.phrase.length; x++) {
            if(this.phrase[x] === ' ') {
                htmlToPrint+=`<li class='hide space'> </li>`;
            }
            else {
                htmlToPrint+=`<li class="hide letter ${this.phrase[x]}">${this.phrase[x]}</li>`;
            } 
        }
        document.querySelector('div#phrase ul').innerHTML = htmlToPrint;
    };

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.indexOf(letter) !== -1 ? true : false;
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {};

}


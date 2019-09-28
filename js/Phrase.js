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
        const htmlToPrint = '';
        for(let x=0; x< this.phrase.length) {
            if(this.phrase[x] === ' ') {
                htmlToPrint+=`<li class='hide space'> </li>`;
            }
            else {
                htmlToPrint+=`<li class="hide letter ${this.phrase[x]}">${this.phrase[x]}</li>`;
            } 
        }
        document.querySelector('div#phrase ul').innerHTML = htmlToPrint;
    };
}


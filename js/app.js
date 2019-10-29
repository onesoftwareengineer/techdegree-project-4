/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//game initialized as global variable
let game;

document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame(); 
});

//adding event listener to the virtual online keyboard
document.querySelector('div#qwerty').addEventListener('click', (event) => {
    if(event.target.type === 'submit') {
        game.handleInteraction(event.target);
    }
});

//adding event listener to the users physical keyboard
document.addEventListener('keydown', (event) => {
    //capturing the character the user entered on his keyboard
    const key = event.key; 
    //regex validation, if character pressed on the physical keyboard is letter 
    if(/^[a-zA-Z]$/.test(key)) {
        //finds the corresponding button object for the users pressed letter and sends it to handleinteraction to play that letter 
        document.querySelectorAll('.key').forEach(correspondingButton => {
            if( correspondingButton.innerText === key.toLowerCase() ) {
                game.handleInteraction(correspondingButton);
            }
        });        
    }
});
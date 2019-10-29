# techdegree project 4

The project is a browser-based, word guessing game: "Phrase Hunter." JavaScript and OOP (Object-Oriented Programming) is used to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

Using JavaScript, two JavaScript classes with specific properties and methods are created. A Game class is created for managing the game, and a Phrase class to help with creating an array of Phrase objects.

The code chooses a random phrase, splits the phrase into letters, and puts those letters onto the gameboard.

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. 
If the letter is in the phrase, the gameboard displays the chosen letters on the screen.

A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).
If the player completes the phrase before they run out of guesses, a winning screen appears. 
If the player guesses incorrectly five times, a losing screen appears.

A player can guess a letter only once. After they’ve guessed a letter, that letter is disabled on the onscreen keyboard.


Additional style changes from initial project specifications:
game won overlay background color changed to #00A86B
game lost overlay background color changed to #FA8072
.chosen key class background color changed to #00A86B
.wrong key background color changed to #FA8072
.wrong key style with font striekthrough added

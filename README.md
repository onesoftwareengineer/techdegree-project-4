## Phrase Hunter Game
Browser-based, JavaScript and OOP (Object-Oriented Programming) word guessing game.
A random hidden phrase is selected which the player tries to guess by clicking letters.

## Technologies
JavaScript OOP (Object-Oriented Programming), HTML, CSS

## Screenshots
![image](https://raw.githubusercontent.com/onesoftwareengineer/techdegree-project-4/master/screenshot1.JPG)
*first screen after game is started and a random hidden phrase is generated*


![image](https://raw.githubusercontent.com/onesoftwareengineer/techdegree-project-4/master/screenshot2.JPG)
*user tries to guess letters of the hidden app*


![image](https://raw.githubusercontent.com/onesoftwareengineer/techdegree-project-4/master/screenshot3.JPG)
*user almost won and has 2 lifes left (2 additional guesses)*


## Additional details on how it works
Using JavaScript, two JavaScript classes with specific properties and methods are created. 
A Game class is created for managing the game, and a Phrase class to help with creating an array of Phrase objects.

The code chooses a random phrase, splits the phrase into letters, and puts those letters onto the gameboard.
Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. 
If the letter is in the phrase, the gameboard displays the chosen letters on the screen.

A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).
If the player completes the phrase before they run out of guesses, a winning screen appears. 
If the player guesses incorrectly five times, a losing screen appears.

A player can guess a letter only once. After they’ve guessed a letter, that letter is disabled on the onscreen keyboard.

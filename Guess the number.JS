const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});  //this allows us to read input from the console
Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
const guessNumber = (userGuess, randomNumber) => {
    if (userGuess < 1 || userGuess > 100) {
        return 'Please enter a number between 1 and 100.';
    }
    if (userGuess === randomNumber) {
        return 'Congratulations! You guessed the number!';
    } else if (userGuess < randomNumber) {
        return 'Too low! Try again.';
    } else {
        return 'Too high! Try again.';
    }
};
// Example usage:
let randomNumber = Math.floor(Math.random() * 100) + 1; // Use let so we can reassign
function askGuess() {
    rl.question('Guess a number between 1 and 100: ', (input) => {
        const userGuess = Number(input);
        const result = guessNumber(userGuess, randomNumber);
        console.log(result);
        if (result === 'Congratulations! You guessed the number!') {
            rl.question('Do you want to play again? (yes/no): ', (answer) => {
                if (answer.toLowerCase() === 'yes') {
                    randomNumber = Math.floor(Math.random() * 100) + 1;
                    askGuess();
                } else {
                    console.log('Thanks for playing!');
                    rl.close();
                }
            });
        } else {
            askGuess();
        }
    });
}



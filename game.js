const getChoices = (userInput) => {
    if (['rock', 'paper', 'scissors'].includes(userInput.toLowerCase())) {
        return userInput.toLowerCase();
    } else {
        console.log('Invalid input. Please enter rock, paper, or scissors.');
        return [];
    }
}
const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0)
        return 'rock';
    else if (randomNum === 1)
        return 'paper';
    else if (randomNum === 2)
        return 'scissors';
}

const determineWinner = (UserChoice, computerChoice) => {
    if (UserChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (UserChoice === 'rock' && computerChoice === 'scissors') ||
        (UserChoice === 'paper' && computerChoice === 'rock') ||
        (UserChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

console.log(getChoices('paper'))
console.log(getComputerChoice())
console.log(determineWinner(getChoice, getComputerChoice()))
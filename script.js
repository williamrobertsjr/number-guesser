let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generate a random number
const generateTarget = () => {
    let randNum = Math.floor(Math.random()*9) + 1;
    return randNum;
}

// Compare guesses and determine winner; tie goes to human
const compareGuesses = (humanNum, computerNum, targetNum) => {
    let humanDiff = Math.abs(targetNum - humanNum);
    let computerDiff = Math.abs(targetNum - computerNum);

    if (humanDiff < computerDiff || humanDiff === computerDiff) {
        return true;
    } else {
        return false;
    }
}

// Add score to winner's tally
const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

// Move to new round
const advanceRound = () => currentRoundNumber + 1;

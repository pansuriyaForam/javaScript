const randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;

while (guess !== randomNumber) {
    guess = parseInt(prompt("Guess a random number between 1 and 100:"));
    if (guess > randomNumber) {
        console.log("Too high!");
    } else if (guess < randomNumber) {
        console.log("Too low!");
    } else {
        console.log("Correct! the number was " + randomNumber + "!");
        break;
    }
}
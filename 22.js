// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let num = 45;

let n = prompt("Guess the number: ");

while (n != num) {
    n = prompt("You entered wrong number! Please guess again.");
}

console.log("WOW! You entered the right number.");
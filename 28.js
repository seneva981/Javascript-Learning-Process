// Promot the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the full name length.

// e.g: user name = "kumaranuj", username should be "@kumaranuj9".

let fullName = prompt("Enter you full name: ");

console.log("@" + fullName + fullName.length);
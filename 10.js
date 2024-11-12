// Conditional Statement - If else

// Example 01

let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}
else {
    color = "white";
}

console.log(color);

// Example 02

let age = 23;

if (age >= 18) {
    console.log("You can vote and drive.");
}
else {
    console.log("You cannot vote and drive.");
}

// Example 03 - Even or Odd

let num = 11;

if (num%2 === 0) {
    console.log(num, "is even.");
}
else {
    console.log(num, "is odd.");
}
// Take a number n as input from the user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

let n = prompt("Enter a number till which you want to get the array: ");
let arr = [];
for (let index = 1; index <= n; index++) {
    arr[index-1] = index;
}
console.log(`The required array is: ${arr}`);

// Calculating sum of all numbers in array using reduce method

let sum = arr.reduce((prev, curr) => {
    return (prev + curr);
})

console.log(`The sum of all the numbers in the arrray is: ${sum}`);

// Calculating product of all numbers in array using reduce method

let product = arr.reduce((prev, curr) => {
    return (prev*curr);
})

console.log(`The product of all the numbers in the arrray is: ${product}`);
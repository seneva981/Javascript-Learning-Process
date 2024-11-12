// For a given array of numbers, print the square of each value using the forEach Loop.

let num = [3, 4, 5, 6, 7];

console.log(`The square of the numbers in array are:`);
num.forEach((val) => {
    console.log(`Value is ${val} and its square is ${val**2}`);
})
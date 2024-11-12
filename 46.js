// Reduce method - to storing and printing the sum of the elements of an array.

let arr = [1, 2, 3, 4, 15, 5, 6, 9];

let result = arr.reduce((prev, curr) => {
    return (prev + curr);
})

console.log(`The sum of the elements of array is: ${result}`);

// to storing and printing the largest element of the array.

let larNum = arr.reduce((prev, curr) => {
    return (prev > curr ? prev : curr);
})

console.log(larNum);
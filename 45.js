// Filter method - to return and print the even numbers 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let evenNum = arr.filter((val) => {
    return (val%2) === 0;
})

console.log(evenNum);

// to return and print the odd numbers

let oddNum = arr.filter((val) => {
    return (val%2) !== 0;
})

console.log(oddNum);

// to return and print the numbers which are greater than 3

let gtrThanThree = arr.filter((val) => {
    return val > 3;
})

console.log(gtrThanThree);
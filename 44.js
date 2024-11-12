// Map method - to print the elements of array.

let arr = [1, 2, 3, 4, 5];

arr.map((val) => {
    console.log(`Value : ${val}`);
})

// to multiply the elements with 2

let double = arr.map((val) => {
    return val*2;
})

console.log(double);

// to print the square of the elements of the array.

let square = arr.map((val) => {
    return (val ** 2);
})

console.log(square);
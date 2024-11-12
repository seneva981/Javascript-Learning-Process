// For a given array with marks of students -> [85, 97, 44, 37, 76, 60].
// Find the average marks of the entire class.

let arr = [85, 97, 44, 37, 76, 60];

let sum = 0;

for (let element of arr) {
    sum += element;
}

console.log(`The average of the entire class is ${sum/arr.length}`);
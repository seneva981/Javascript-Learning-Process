// forEach Loop - Passing three arguments to the callback function.


let arrNumber = [1, 2, 3, 4];
let arrString = ["Pune", "Mumbai", "Delhi"];

arrNumber.forEach(function print(val, index, arrNumber) {
    console.log(`Value is ${val}, Index Number is ${index}, Array is ${arrNumber}\n`);
})

arrString.forEach(function print(val, index, arrString) {
    console.log(`Value is ${val}, Index Number is ${index}, Array is ${arrString}\n`);
})

arrNumber.forEach((val, index, arrNumber) => {
    console.log(`Value is ${val}, Index Number is ${index}, Array is ${arrNumber}\n`);
})

arrString.forEach((val, index, arrString) => {
    console.log(`Value is ${val}, Index Number is ${index}, Array is ${arrString}\n`);
})
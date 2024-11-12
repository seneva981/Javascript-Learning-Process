// Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

function vowels(str) {
    let no = 0;
    for (let el of str) {
        if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u" || el === "A" || el === "E" || el === "I" || el === "O" || el === "U") {
            no++;
        }
    }
    return no;
}

let number = vowels("Kumar Anuj");
console.log(number);


// Create an arrow function to perform the same task.
let noOfVowels = (string) => {
    let num = 0;
    for (let element of string) {
        if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u" || element === "A" || element === "E" || element === "I" || element === "O" || element === "U") {
            num++;
        }
    }
    console.log(num);
}

noOfVowels("Hello There! How are you?");
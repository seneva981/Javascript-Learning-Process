//  Arrow Functions


// Without parameters
let print = () => {
    console.log("Hello!");
    console.log("Kumar Anuj");
}
console.log(print);
print();


// With parameters
let sum = (a, b) => {
    console.log(a + b);
}

console.log(sum);
sum(4, 3);


// Function with return value
let mul = (a, b) => {
    return a*b;
}

console.log(mul);
console.log(mul(4, 5));
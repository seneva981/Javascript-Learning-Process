// Variables

fullName = "Kumar Anuj";
console.log(fullName);
console.log(typeof fullName);

age = 20;
console.log(age);
console.log(typeof age);

price = 99.99;
console.log(price);
console.log(typeof price);

radius = 14;
console.log(radius);
console.log(typeof radius);

a = null;
console.log(a);
console.log(typeof a);

b = undefined;
console.log(b);
console.log(typeof b);

isFollow = true;
console.log(isFollow);
console.log(typeof isFollow);

fullName = 25;                           // Data type of the variable can be changed because javascript is dynamically typed language
console.log(fullName);
console.log(typeof fullName);

c = BigInt(123);                        // BigInt Datatype
console.log(c);
console.log(typeof c);

d = Symbol(12);                         // Symbol Datatype
console.log(d);
console.log(typeof d);

const student = {
    Name: "Kumar Anuj",
    age: 20,                            // Object datatype
    cgpa: 8.2,
    isPass: true
};
console.log(student);
console.log(student.Name);
console.log(student.age);
console.log(student["cgpa"]);
console.log(student["isPass"]);
console.log(typeof student);

student["age"] = student["age"] + 1;           // Updating value of key inside object datatype
console.log(student["age"]);

student["marks"] = 455;
console.log(student.marks);                    // Adding new key and its value to object datatype
// Loops - For in Loop

let student = {
    fullName: "Kumar Anuj",
    age: 20,
    cgpa: 7.5,
    isPass: true,
};

for(let key in student){
    console.log("Key is:", key, "and Value is:", student[key]);
}
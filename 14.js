// Write a code which can give grades to students according to their scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 00-49, F

let marks = prompt("Enter your marks (0-100):");
let grade;

if (marks >= 90 && marks <= 100) {
    grade = "A";
}
else if (marks >= 70 && marks < 90) {
    grade = "B";
}
else if (marks >= 60 && marks < 70) {
    grade = "C";
}
else if (marks >= 50 && marks <60) {
    grade = "D";
}
else if (marks >= 0 && marks < 50) {
    grade = "F";
}

console.log("According to your marks, your grade is:",grade);
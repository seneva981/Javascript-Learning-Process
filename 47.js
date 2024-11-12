// We are given array of marks of students. Filter out of the marks of students that scored 90+.

let marks = [97, 89, 93, 99, 94, 95, 85];

let marksAbove90 = marks.filter((val) => {
    return (val > 90);
})

console.log(`Marks above 90 are: ${marksAbove90}`);
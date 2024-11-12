// Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix".
// a. Remove the first company from the array.
// b. Remove Uber and add Ola in its place.
// c. Add Amazon at the end.

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "netflix"];
let remove = companies.shift();
console.log(`Companies after removing 1st company are: ${companies}\n`);

companies.splice(1, 1, "Ola");
console.log(`Companies after replacing Uber with Ola are: ${companies}\n`);

companies.push("Amazon");
console.log(`Companies after adding Amazon at the end are: ${companies}\n`);
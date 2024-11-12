// Looping through array

let heroes = ["Ironman", "Batman", "Thor", "Hulk", "Shaktimaan", "Spiderman", "Antman"];


// By using for loop
for (let index = 0; index < heroes.length; index++) {
    let element = heroes[index];
    console.log(element);
}

// By using for of loop
for (let hero of heroes) {
    console.log(hero);
}
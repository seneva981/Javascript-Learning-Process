// Array methods

// Push Method
let foodItems = ["Potato", "Litchi", "Apple", "Tomato"];
console.log(`Food Items before adding more food items are: ${foodItems}\n`);

foodItems.push("Chips", "Paneer", "Burger");
console.log(`Food Items after adding some more items are: ${foodItems}\n`);


// Pop Method
let deletedItems = foodItems.pop();
console.log(`Deleted item is ${deletedItems}\n`);
console.log(`Food Items after deleting last food are: ${foodItems}\n`);


// toString Method
let marks = [97, 99, 89, 94, 92];
console.log(`Food Items after converting to string are: ${foodItems.toString()}\n`);
console.log(`Marks after converting to string are: ${marks.toString()}\n`);


// concat method
let marvelHeroes = ["Spiderman", "Hulk", "Superman"];
let indianHeroes = ["Shaktiman", "Krish", "Flying Jatt"];
let items = foodItems.concat(marvelHeroes);
console.log(`Two array can be concated like this: ${items}\n`);
let itemsMore = foodItems.concat(marvelHeroes, indianHeroes);
console.log(`More than two array can be concatinated like this ${itemsMore}\n`);


// unshift method
marvelHeroes.unshift("X-Man");
console.log(`Marvel Heroes after adding at first hero are: ${marvelHeroes}\n`);


// shift method
console.log(`Marvel Heroes after deleting first hero is: ${marvelHeroes.shift()}\n`);


// slice method
console.log(`Food items after slicing are: ${foodItems.slice(1, 3)}\n`);


// Splice method - Adding element in array using splice method
marks.splice(2, 0, 91);
console.log(`Marks after adding one more marks are: ${marks}\n`);


// Splice method - Deleting element in array using splice method
marks.splice(3, 1);
console.log(`Marks after deleting a marks are: ${marks}\n`);

// Splice method - Replacing a element in array using splice method
marks.splice(2, 1, 100);
console.log(`Marks after replacing a marks are: ${marks}\n`);
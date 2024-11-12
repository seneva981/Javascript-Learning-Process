// Document Object Model (DOM) Manipulation

// Selecting with ID - Accessing element in html file by using id.

let buttons = document.getElementById("myId");
console.log(buttons);
console.dir(buttons);

// Selecting with Class - Accessing element in html file by using Class.

let headings = document.getElementsByClassName("myClass");
console.log(headings);
console.dir(headings);

// Selecting with TagName - Accessing element in html file by using TagName.

let parahs = document.getElementsByTagName("p");
console.log(parahs);
console.dir(parahs);

// Selecting with Query Selector on the basis of TagName- Accessing element in html file by using Query Selector on the basis of TagName.

let firElTag = document.querySelector("p");
console.log(firElTag);
console.dir(firElTag);

let allElTag = document.querySelectorAll("p");
console.log(allElTag);
console.dir(allElTag);

// Selecting with Query Selector on the basis of Class- Accessing element in html file by using Query Selector on the basis of Class.
let firElClass = document.querySelector(".myClass");
console.log(firElClass);
console.dir(firElClass);

let allElClass = document.querySelectorAll(".myClass");
console.log(allElClass);
console.dir(allElClass);

// Selecting with Query Selector on the basis of Id- Accessing element in html file by using Query Selector on the basis of Id.
let firElId = document.querySelector("#myId");
console.log(firElId);
console.dir(firElId);
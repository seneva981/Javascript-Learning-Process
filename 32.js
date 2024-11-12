// For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let arr = [250, 645, 300, 900, 50];

for (let index = 0; index < arr.length; index++) {
    arr[index] = (arr[index] - ((10/100)*arr[index]));
    console.log(arr[index]);
}
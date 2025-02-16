const fruits = ["apple", "orange", "banana"];
fruits.push("grapes"); // Add at end
console.log(fruits); 

fruits.pop(); // Remove last element
console.log(fruits); 

fruits.shift(); // Removes the first element
console.log(fruits); 

fruits.unshift("Mango"); // Add at start
console.log(fruits); 

console.log(fruits.indexOf("Mango"));
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach
fruits.forEach((fruits) => console.log(fruits));
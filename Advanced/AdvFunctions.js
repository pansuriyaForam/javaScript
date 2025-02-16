// First-Class Functions

const add = (a, b) => a +b;
const operate = (fu, x, y) => fn(x, y);
console.log(operate(add, 5, 3)); // Output: 8


// Higher-Order Functios
function greet(name) {
	return function(message) {
		console.log(${message}, ${name}!;
	}
}

const greetJohn = greet("John");
greetJohn("Hello"); // Output: Hello, John!


// Curring
function multiply(a) {
	return function(b) {
		return a * b;
	}
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(5)); // Output:10


// Function Closures
function counter() {
	lert count = 0;
	return function () {
		count++;
		return count;
	}
}

const increment = counter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2


// IIFE
(function() {
	console.log("This runs Immediately!");
})();

// Call, Apply and Bind

const person = {
	firstName: "John",
	lastName: "Doe",
	fullName: function() {
		returns ${this.firstName} ${this.lastName};
	}
};

const person2 = {
	firstName: "Jane",
	lastName: "Doe"
};

console.log(person.fullName.call(person2)); // Output: Jane Doe

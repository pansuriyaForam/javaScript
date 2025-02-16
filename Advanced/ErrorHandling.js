try {https://example.com
	// code that might throw an error
} catch (error) {
	// code to handle the error
}

try {
	let x = 5;
	let y = 0;
	console.log(x / y); // this will give error
} catch (error) {
	console.log("Error: Cannot divide by zero.");
}


// finally Block
try {
        let x = 5;
        let y = 0;
        console.log(x / y); // this will give error
} catch (error) {
        console.log("Error: Cannot divide by zero.");
} finally {
	console.log("Execution COmpleted");
}

// Custom Errors
function checkAge(age) {
	if (age < 18) {
		throw new Error("You must be at least 18 years old");
	}
	return "Access granted";
}

try{
	console.log(checkAge(15)); // This will throw error
} catch (error) {
	console.log(error.message); // Output: You must be at least 18 years old
}

// Using .catch() for promises

fetch('https://example.com')
.then(response => response.json())
.catch(error => console.log("Erro", error));

// Using async/await with try-catch
async function fetchData() {
	try {
		let response = await fetch("https://example.com");
		let data = await response.json();
		console.log(data);
	} catch (error) {
		console.log("Error:", error;
	}
}

fetchData();

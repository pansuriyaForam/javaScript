const expenses = [
    { description: "Groceries", amount: 50 },
    { description: "Rent", amount: 500 },
    { description: "Internet", amount: 100 },
]

const addExpenses = ( description, amount ) => {
    expenses.push({ description, amount});
    console.log(`expenses "${description}" added!`);
}

// Extract amount
const amount = expenses.map((expenses) => expenses.amount);

// Total amount
const total = amount.reduce((sum, amount) => sum + amount, 0);
console.log(`Total amount: ${total}`);

// Filter expense above 1000
const highExpenses = expenses.filter((expenses) => expenses.amount > 1000);
console.log("High Expenses:", highExpenses);
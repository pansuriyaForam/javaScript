const person = {
    name: "foram",
    age: 18,
    isStudent: true,
};

console.log(person);
console.log(person.name); // dot notation
console.log(person["age"]); // breaket notation
console.log(person.isStudent);

person.age = 19;
console.log(person.age);  // new value of age

person.isStuding = true;
console.log(person); 
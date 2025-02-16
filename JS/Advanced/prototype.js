function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.sayHello = function() {                  //adds a method to the prototype of all instances of Person.
	console.log(Hello, my name is ${this.name});
};

const john = new Person('John', 25);
john.sayHello(); // Output: Hello, my name is John

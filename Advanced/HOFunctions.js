function higherOrder(fn) {
    console.log("Before calling the callback function");
    fn(); // calling the passed function
    console.log("After calling the callback function");
}

higherOrder(() => console.log("Callback function executed"));
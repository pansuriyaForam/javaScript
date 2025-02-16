let globalvar = "I am a global variable"

function showScope() {
    let localVar = "I am a local variable"
    console.log(globalvar); //Accessible
    console.log(localVar); //Accessible
}

showScope();
// console.log(localVar); //Error: localVar is not defined
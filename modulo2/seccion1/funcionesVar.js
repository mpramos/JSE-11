
var globalGreeting = "Buenos";

function testFunction() {
    var localGreeting = "Días";  
    console.log("función:");
    console.log(globalGreeting);
    console.log(localGreeting);
}

testFunction();

console.log("programa principal:");
console.log(globalGreeting);
console.log(localGreeting); // -> Uncaught ReferenceError: localGreeting is not defined
    


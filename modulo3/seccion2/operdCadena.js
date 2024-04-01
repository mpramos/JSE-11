//! Operadores de cadenas

let greetings = "Hi";
console.log(greetings + " " + "Alice"); // -> Hi Alice

let sentence = "Happy New Year ";
let newSentence = sentence + 10191;

console.log(newSentence); // -> Happy New Year 10191
console.log(typeof newSentence); // -> string
    
//! Operadores de asignación compuesta

let _sentence = "Happy New ";
_sentence += "Year ";
_sentence += 10191;
console.log(_sentence); // -> Happy New Year 10191
//? Declaracion de la constante greeting
// const greeting = "¡Hola!";
// console.log(greeting);
//? Pero esta próxima definitivamente causa un error
// const greeting; // -> Uncaught SyntaxError: Missing initializer in const declaration
// greeting = "¡Hola!";
//? Como dijimos, un cambio en la constante es imposible. Esta vez la declaración es correcta, 
//? pero tratamos de modificar el valor almacenado en la constante.
const greeting = "¡Hola!";
// console.log(greeting);
greeting = "Hi!"; // -> Uncaught TypeError: Assignment to constant variable.




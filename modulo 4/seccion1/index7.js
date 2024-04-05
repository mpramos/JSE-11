//? EJ1
let price = 100;
let shippingCost;
if (price > 50) {
    shippingCost = 0;
} else {
    shippingCost = 5;
}
console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0
//?EJ2
let _price = 100;
let _shippingCost = _price > 50 ? 0 : 5;

console.log(`price = ${_price}, shipping = ${_shippingCost}`); // -> price = 100, shipping = 0
//?EJ3
let start = confirm("¿Iniciar?");
start ? alert("¡Aquí vamos!") : console.log("Abortado");
//?EJ4
let _start = confirm("¿Iniciar?");
let message = _start ? "¡Aquí vamos!" : "Abortado";
alert(message);

//!FUNCION DE DECLARACION
//!FUNCION DE EXPRESION
//!FUNCION DE ANÓNIMA
//!FUNCION DE FLECHA

//? Declaración de función

function cuadrado() {
    let num= 2
    let cuadrado = num * num
    console.log(cuadrado);
}
cuadrado()


function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne+numTwo
    console.log(sum);
}
addTwoNumbers()


function showFullName() {
    let firstName = 'Juana'
    let lastName = 'Ramirez'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName);
}
showFullName()


//? Valor devuelto por la funcion
function showFullName() {
    let firstName = 'Juana'
    let lastName = 'Ramirez'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName    
}
console.log(showFullName());

function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne+numTwo
    return sum
}
console.log(addTwoNumbers())

//? Función con un parámetro

function areaOfCircle(r) {
    let area = Math.PI * r *r
    return area
}
console.log(areaOfCircle(10));

function cuadrado(number) {
    return number * number
}
console.log(cuadrado(10));
//? Función con dos parámetro
function addTwoNumbers(numOne,numTwo) {
    return  numOne+numTwo
}
console.log(addTwoNumbers(10,20))
//? Función con multiples parametros
// function name(params) {
    
// }
// name(par1,par2,par3,par4,par5,...)

function sumArrayValues(arr) {
    let sum =0
    for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i]
    }
    return sum
}
const numbers =[1,2,3,4,5]
console.log(sumArrayValues(numbers));

// Funcion con un numero ilimitado de parámetros

function sumAllNumbers() {
    let sum =0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(sumAllNumbers(1,2,3,4))
console.log(sumAllNumbers(10,20,13,40,10))
console.log(sumAllNumbers(15,20,30,25,10,33,40))


const sumAllNumbers = (...args)=>{
    let sum=0
    for (const element of args) {
        sum += element
    }
    return sum
}
console.log(sumAllNumbers(1,2,3,4))
console.log(sumAllNumbers(10,20,13,40,10))
console.log(sumAllNumbers(15,20,30,25,10,33,40))

//? Función anónima
const anonymousFun= function() {
    console.log('Hola a todos soy una funcion anonima');
}
anonymousFun()

//? Funciones de autoinvocación

(function (n) {
console.log(n*n);
})(2)

let cuadradoNum=(function(n) {
    return n*n
})(10)
console.log(cuadradoNum);

//? Funcion de flecha

function cuadrado(n) {
    return n*n
}
console.log(cuadrado(2));


const cuadrado=n=> n*n
console.log(cuadrado(2));

//? Funciones con parámetros predeterminados

function saludar(name='Peter') {
    let message = `${name}, Bienvenido a JavaScript y React con evolutech y cisco`
    return message
}
console.log(saludar('Juana'));
console.log(saludar());


function generateFullName(firstName = 'Jaime',lastName = 'Rodriguez') {
    let fullName = `${firstName} ${lastName}`
    return fullName
}

console.log(generateFullName());
console.log(generateFullName('David','Ramirez'));


function calcularEdad(añoNacimiento,añoActual=2024) {
        let edad = añoActual - añoNacimiento
        return edad
}
console.log('Edad : ',calcularEdad(1990));

function pesoObjeto(masa, gravedad = 9.81) {
    let peso = masa* gravedad + 'N'
    return peso
}

console.log('Peso de un objeto en Newton', pesoObjeto(100));
console.log('Peso de un objeto en Newton', pesoObjeto(100,1.62));


const saludos=(name= 'Peter')=>`${name} bienvenid@ a la especialidad de JavaScript y React`
console.log(saludos());
console.log(saludos('Juana'));


const showName=()=>{
    console.log('holaaaa  ');
    console.log('a');
    console.log('todos ');
}
showName();
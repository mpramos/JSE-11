//!sintaxis del bucle
for (initializacion; condition; increment/decrement) {
// code     
}
// 0 1 2 3 4 5
for (let i = 0; i <6 ; i++) { // i = 0
    console.log(i);
}
// 5 4 3 2 1 0
for (let i = 5; i>=0 ; i--) { // i = 4
    console.log(i);
}

for (let i = 0; i <=5; i++) {
    console.log(`${i} * ${i} = ${i*i}`);
}
/*
0 * 0 =0 
1 * 1 =1
2 * 2 =4
3 * 3 =9
4 * 4 =16
5 * 5 =25
*/
const countries = ['Peru','Bolivia','Argentina','Chile','Ecuador']
// ['PERU','BOLIVIA','ARGENTINA','CHILE','ECUADOR']
let newArray = []
for (let i = 0; i <countries.length; i++) {
 newArray.push(countries[i].toUpperCase())
}
console.log(newArray)
console.log(countries)

//? Adicion de todos los elementos del arreglo

let numbers = [1,2,3,4,5]
// 15
// 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
//sum =0
// sum = sum + 1   --> 0 +1 =1
// sum = sum + 2   --> 1 +2 =3
// sum = sum + 3   --> 3 +3 =6
// sum = sum + 4   --> 6 +4 =10
// sum = sum + 5   --> 10 +5 =15
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
}
console.log(sum);

//? Creacion de un nuevo arreglo basada en una arreglo existente
let _numbers = [1,2,3,4,5]
// [1,4,9,16,25]
// 1*1 =1
// 2*2 =4
// 3*3 =9
// 4*4 =16
// 5*5 =25
let _newArray = []
for (let i = 0; i < _numbers.length; i++) {
    _newArray.push(_numbers[i] * _numbers[i])
}
console.log(_newArray)
console.log(_numbers)

//! while
//  0 1 2 3 4 5 
let i =0
while (i <=5) {
    console.log(i)
    i++
}
//! do while
let _i=0
do {
    console.log(_i)
    _i++
} while (_i<=5)
//! For de bucle

for (const iterator of object) {
    
}

//1 2 3 4 5
for (const number of __numbers) {
    console.log(number);
}

for (let i = 0; i < __numbers.length; i++) {
    console.log(__numbers[i]);
}
//1 4 9 16 25
let __numbers =[1,2,3,4,5]
for (const number of __numbers) {
    console.log(number*number);
}
let _sum=0
for (const number of __numbers) {
    _sum = _sum + number
}
console.log(_sum);

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
// for (const tech of webTechs) {
//     console.log(tech.toUpperCase());
// }
for (const tech of webTechs) {
    console.log(tech[0]);
}

















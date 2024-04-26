let numbers = [1,2,3]
let [numOne,,numThree]= numbers
console.log(numOne);
console.log(numThree);
function sumar(a,b) {
    return a +b
}
console.log(sumar(numOne,numTwo));
let names = [undefined,'pamela','cecilia']
let [
    firstPerson='Mario',
    secondPerson,
    thirdPerson, 
    fourthPerson='Jhon']=names
console.log(firstPerson,secondPerson,thirdPerson,fourthPerson);

let fullstack =[
    ['HTML','CSS','JS','React'],
    ['Node','Express','MongoDB']
]

for (const [first,second,third] of fullstack) {
    console.log(first,second,third);
}


let [frontend,backend] = fullstack
console.log(frontend);
console.log(backend);

let nums =[1,2,3,4,5,6,7,8,9,10]
let[num1,num2,num3,...rest]=nums
console.log(num1);
console.log(num2);
console.log(num3);
console.log(rest);
let nums1=[num1,num2,num3,...rest]=rest
console.log(num1);
console.log(num2);
console.log(num3);
console.log(rest);
let nums2=[num1,num2,num3,num4]=rest
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

const countries =[['Argentina','Buenos Aires'],['Peru','Lima'],['Colombia','Bogota']]

for (const [country,city] of countries) {
    console.log(country,city);
}




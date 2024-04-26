
const nums=[1,2,3,4,5,6,7,8,9,10]
let [num1,num2,num3,...rest] = nums
console.log(rest);

const countries =[
    'Bolivia',
    'Peru',
    'Venezuela',
    'Argentina',
    'Colombia',
    'Brasil',
]
let [bol,per,,...restCountries]= countries
console.log(bol,per);
console.log(restCountries);


const evens =[0,2,4,6,8,10]
const evensNumbers =[...evens]
const odds =[1,3,5,7,9]
const oddsNumbers =[...odds]


let wholeNumbers=[...evensNumbers,...oddsNumbers]
console.log(evensNumbers);
console.log(oddsNumbers);
console.log(wholeNumbers);

let frontend=['HTML','CSS','JS','React']
let backend=['Node','Express','MongoDB']
const fullstack =[...frontend,...backend]
console.log(fullstack);

















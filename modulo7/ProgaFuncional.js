//?ForEach

let sum = 0
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(num => sum += num);
console.log(sum);

const countries = ['Bolivia', 'Peru', 'Argentina', 'Colombia']
countries.forEach(country => console.log(country.toUpperCase()))

//? map
const numbers_1 = [1, 2, 3, 4, 5]
const numbersSquare = numbers_1.map(num => num * num)
console.log(numbersSquare);
console.log(numbers_1);
const names = ['Mario', 'Jose', 'Ricardo', 'Cecilia']
const namesToUpperCase = names.map(name => name.toUpperCase())
console.log(namesToUpperCase);
console.log(names);
const countries_1 = ['Bolivia', 'Peru', 'Argentina', 'Colombia']
const countriesFirstThreeLetters = countries_1.map(country => country.toUpperCase().slice(0, 3))
console.log(countriesFirstThreeLetters);
//? filter

const countries_2 = ['Bolivia', 'Peru', 'Argentina', 'Colombia']
const countriesContainingIa = countries_2.filter(country => country.includes('ia'))
console.log(countriesContainingIa);

const countries_3 = ['Bolivia', 'Peru', 'Argentina', 'Colombia']
const countriesHaveMoreFiveLetters = countries_3.filter(country => country.length >= 5)
console.log(countriesHaveMoreFiveLetters);

const scores = [
    { name: 'juana', score: 95 },
    { name: 'carla', score: 98 },
    { name: 'elsa', score: 80 },
    { name: 'carlos', score: 50 },
    { name: 'martha', score: 85 },
    { name: 'jhon', score: 100 },
]

const scoresGreaterEighty = scores.filter(score => score.score > 80)
console.log(scoresGreaterEighty);
//? reduce
// [1,2,3,4,5]
// 1+2+3+4+5=15
// let _sum=0
// for (const num of nums) {
//     _sum+=num
// }
// for (let i = 0; i < nums.length; i++) {
//     _sum+=nums[i]

// }
// console.log(_sum);
// nums.forEach((num)=>_sum+=num)
// console.log(_sum);
let nums = [1, 2, 3, 4, 5]
let _sum = nums.reduce((acc, cur) => acc + cur, 0)
console.log(_sum);

//? every = cada
// let cont=0
// for (let i = 0; i <_names.length; i++) {
//     if (typeof _names[i]=== 'string') {
//         cont++
//     } 
// }
// if (cont===_names.length) {
//     areAllString=true
// } else {
//     areAllString=false
// }
// console.log(areAllString);
const _names = ['Marco', 'Alejandra', 'Luis', 'Pedro', true]
let areAllStr = _names.every(name => typeof name === 'string')
console.log(areAllStr);
const bools = [true, true, true, true, false]
const areAllTrue = bools.every(b => b === true)
console.log(areAllTrue);
//? find
// let cont
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i]<20) {
//         cont = ages[i]
//         break 
//     } 
// }
// console.log(cont)
const ages = [24, 22, 25, 32, 35, 18]
// 18
let age = ages.find(age => age < 20)
console.log(age);
const __names = ['Marco', 'Alejandra', 'Luis', 'Pedro']
const _name = __names.find(name => name.length > 7)
console.log(_name);
// let score
// for (let i = 0; i < _scores.length; i++) {
//     if (_scores[i].score>80) {
//         score=_scores[i]
//         break
//     } 
// }
// console.log(score);
const _scores = [
    { name: 'Marco', score: 95 },
    { name: 'Alejandra', score: 80 },
    { name: 'Luis', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]
const score = _scores.find(user => user.score > 80)
console.log(score);
//? findIndex
// let index
// for (let i = 0; i < $names.length; i++) {
//     if ($names[i].length>7) {
//         index=i
//         break
//     }
// }
// console.log(index);
const $names = ['Marco', 'Alejandra', 'Luis', 'Pedro']
let nameIndex = $names.findIndex(name => name.length > 7);
const $ages = [24, 22, 25, 32, 35, 18]
let ageIndex = $ages.findIndex(age => age < 20);
//? some
// let isSomeString
// for (let i = 0; i < _$names.length; i++) {
//     if (typeof _$names[i]==='string') {
//         isSomeString=true
//         break
//     } 
// }
// console.log(isSomeString);
// const _$names = ['Marco', 'Alejandra', 'Luis', 'Pedro']
const _$names = [2, 'Alejandra', true, 5]
let isSomeString=_$names.some(name=>typeof name ==='string')

const _bools = [true, true, true, true, false]
let isSomeBool=_bools.some(b=>b ===true)
//? Sort
const products=['Milk','Coffe','Sugar','Honey','Apple','Carrot']
// A B C D E F a b c d 
let productosSort=products.sort()
console.log(productosSort);
console.log(products)
const _numbers=[9.81,3.14,100,37]
let _numbersCopy=[..._numbers]
console.log(_numbers.sort((a,b)=>a-b))
console.log(_numbers.sort((a,b)=>b-a))
console.log(_numbersCopy);

const users =[
    {name:'Marco', age:150},
    {name:'Luis', age:50},
    {name:'Pedro', age:100},
    {name:'Ana', age:22}
]
users.sort((a,b)=>{
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log(users);






























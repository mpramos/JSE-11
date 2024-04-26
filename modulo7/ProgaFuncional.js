//?ForEach

let sum=0
const numbers =[1,2,3,4,5]
numbers.forEach(num => sum +=num);
console.log(sum);

const countries =['Bolivia','Peru','Argentina','Colombia']
countries.forEach(country=>console.log(country.toUpperCase()))

//? map
const numbers_1 =[1,2,3,4,5]
const numbersSquare=numbers_1.map(num=>num*num)
console.log(numbersSquare);
console.log(numbers_1);
const names =['Mario','Jose','Ricardo','Cecilia']
const namesToUpperCase = names.map(name=> name.toUpperCase())
console.log(namesToUpperCase);
console.log(names);
const countries_1 =['Bolivia','Peru','Argentina','Colombia']
const countriesFirstThreeLetters = countries_1.map(country=> country.toUpperCase().slice(0,3))
console.log(countriesFirstThreeLetters);
//? filter

const countries_2 =['Bolivia','Peru','Argentina','Colombia']
const countriesContainingIa= countries_2.filter(country=> country.includes('ia'))
console.log(countriesContainingIa);

const countries_3 =['Bolivia','Peru','Argentina','Colombia']
const countriesHaveMoreFiveLetters= countries_3.filter(country=>country.length>=5)
console.log(countriesHaveMoreFiveLetters);

const scores =[
    {name:'juana',score:95},
    {name:'carla',score:98},
    {name:'elsa',score:80},
    {name:'carlos',score:50},
    {name:'martha',score:85},
    {name:'jhon',score:100},
]

const scoresGreaterEighty = scores.filter(score=>score.score >80)
console.log(scoresGreaterEighty);
//! Set
const languages =[
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]
const setOfLanguages= new Set(languages)

for (const language of setOfLanguages) {
    console.log(language);
}
const companies = new Set()
console.log(companies.size)
companies.add('Google')
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size)
console.log(companies)
let _companies=['Google','Facebook','Amazon','Oracle','Microsoft']
let setOfCompanies = new Set()
for (const company of _companies) {
    setOfCompanies.add(company)
}
console.log(setOfCompanies);
console.log(setOfCompanies.size);
console.log(setOfCompanies.delete('Google'));
console.log(setOfCompanies.delete('Apple'));
console.log('has');
console.log(setOfCompanies.has('Apple'));
console.log(setOfCompanies.has('Facebook'));
console.log(setOfCompanies.size);
setOfCompanies.clear()
console.log(setOfCompanies);
const _languages =[
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]
const langSet = new Set(_languages)
console.log(langSet)
console.log(langSet.size)
const counts=[]
const count={}
for (const l of langSet) {
    let filteredLang=_languages.filter(lng=>lng ===l)
    console.log(filteredLang) //['English','English']
    counts.push({lang:l,count:filteredLang.length})
}
console.log(counts);
const $numbers=[5,3,2,5,5,9,4,5]
const setOfNumbers = new Set($numbers)
console.log(setOfNumbers)

let a = [1,2,3,4,5]
let b = [3,4,5,6]
let c = [...a,...b]
//? Union de conjuntos
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)
//? Interseccion de conjuntos
let _a = [1,2,3,4,5]
let _b = [3,4,5,6]
let _A = new Set(_a) //{1,2,3,4,5}
let _B = new Set(_b)//{3,4,5,6}
let _c = _a.filter(num=>_B.has(num))
let _C= new Set(_c)
console.log(_C);
//? Diferencia de conjuntos
let $a = [1,2,3,4,5]
let $b = [3,4,5,6]

let $A = new Set($a)
let $B = new Set($b)

let $c=$a.filter(num=>!$B.has(num)) 
let $C= new Set($c)
console.log($C);






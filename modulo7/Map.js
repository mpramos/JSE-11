let countries =[
    ['Bolivia','Cochabamba'],
    ['Peru','Lima'],
    ['Colombia','Bogota'],
    ['Argentina','Buenos Aires'],
]
const map=new Map(countries)
// console.log(map);
map.set('Chile','Santiago de chile')
// console.log(map);
// console.log(map.size)

// console.log(map.get('Peru'));
// console.log(map.has('Perul'));
for (const [country,city] of map) {
    console.log(country,city);
}
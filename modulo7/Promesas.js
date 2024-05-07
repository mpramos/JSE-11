// Pendiente
// Cumplido
// Rechazado
// then

const promesa = new Promise((resolve,reject)=>{
    resolve('success')
    reject('failure')
})
console.log(promesa);

const doPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const skills = ['HTML','CSS','JavaScript']
        if (skills.includes('Node')) {
            resolve('fullstack')
        } else {
            reject('fallo')
        }
    }, 2000);
})
doPromise
.then(result=> console.log(result))
.catch(error => console.log(error))


const url='https://restcountries.com/v2/all'
fetch(url)
    .then(respuesta=> respuesta.json())
    .then(data=>console.log(data))
    .catch(error=> console.error(error))

//! Async y Await

const fetchData = async ()=>{
    try {
        const respuesta = await fetch('https://restcountries.com/v2/all')
        const countries = await respuesta.json()
        console.log(countries);
    } catch (error) {
        console.error(error)
    }
}
fetchData()












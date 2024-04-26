try {
    let a=b
} catch (error) {
    console.log(error);
    try {
        console.log(b)
    } catch {
        console.log('existe error');
    }
} finally{
    console.log('juana');
}


try {
    let lastName='Ramirez'
    let fullName = firstName + ' ' + lastName
} catch (error) {
    console.log('Nombre del error ', error.name);
    console.log('Mensaje del error ', error.message);
} finally{
    console.log('El siguiente caso no puede ser ejecutado');
}

//? throw 
throw 'Error2'
throw 42
throw true
throw new Error('Required')

const throwErrorExampleFun =()=>{
    let message
    let x  = 11
    try {
        if (x == '') throw 'empty'
        if (isNaN(x))  throw 'not a number'
        if (x < 5) throw 'too low'
        if (x > 10) throw 'too high'
    } catch (error) {
        console.log(error);
    }
}

throwErrorExampleFun()


//? Tipos de error

let firstName ='juana'
let fullName = firstName + ' ' + lastName
console.log(fullName);


let square = 2 x 2
console.log(square);
console.log('holaaa');

let num=10
console.log(num.toLowerCase());













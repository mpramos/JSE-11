//? Primer ejemplo
let counter;
console.log(counter); // -> undefined
{
    counter = 1;
    console.log(counter); // -> 1
}
counter = counter + 1;
console.log(counter); // -> 2

//? Segundo ejemplo
let _counter;
console.log(_counter); // -> undefined
{
    _counter = 1; // -> global dentro del contexto {}
    {
        console.log(_counter); // -> 1
    }
}
_counter = _counter + 1;
console.log(_counter); // -> 2




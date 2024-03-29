let counter = 100;
console.log(counter); // -> 100
{
   counter = 200;
   console.log(counter); // -> 200
}
console.log(counter); // -> 200
    

let _counter = 100;
console.log(_counter); // -> 100
{
  let _counter = 200;
  console.log(_counter); // -> 200
}
console.log(_counter); // -> 100
    



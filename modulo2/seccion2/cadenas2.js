let path = "C:\\Windows" - "Windows";
console.log(path); // -> NaN

let test = "100" - "10";
console.log(test); // -> 90
console.log(typeof test); // -> number





let _path = "C:\\" + "Windows";
console.log(_path); // -> C:\Windows

let _test = "100" + "10";
console.log(_test); // -> 10010
console.log(typeof _test); // -> string






let country = "Malawi";
let continent = "Africa";

let sentence = ` ${country} se ubica en ${continent}.`;
console.log(sentence); // -> Malawi se ubica en Africa.



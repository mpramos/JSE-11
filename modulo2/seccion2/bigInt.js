//?1
let big = 1234567890000000000000n;
let big2 = 1n;

console.log(big); // -> 1234567890000000000000n
console.log(typeof big); // -> bigint

console.log(big2); // -> 1n
console.log(7n * 4n); // -> 1n
console.log(7n * 7n); // -> 1n




//?2

let big3 = 1000n + 20; 
// -> Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

//?3

let big4 = 1000n / 0n; // -> Uncaught RangeError: Division by zero



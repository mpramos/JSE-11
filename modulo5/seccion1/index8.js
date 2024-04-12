function add(first, second) {
    return first + second;
    }
    
    let first = 10, second = 20, third = 40, fourth = 80;
    console.log(add(first, second)); // -> 30
    console.log(add(second, third)); // -> 60
    console.log(add(third, fourth)); // -> 120
//!
let a = 100, b = 200, c = 300;

function test(a) {
    let b = 10;
    console.log(a); // parameter a
    console.log(b); // local variable b
    console.log(c); // global variable c
}

test(1);        // -> 1
                // -> 10
                // -> 300

console.log(a); // -> 100
console.log(b); // -> 200
console.log(c); // -> 300

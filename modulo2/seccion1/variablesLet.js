let height = 180;
{
    let weight = 70;
    console.log(height); // -> 180
    console.log(weight); // -> 70   
}
console.log(height); // -> 180
console.log(weight); // -> Uncaught ReferenceError: weight is not defined
    
let _height = 200;
{
    let _weight = 100;
    {
        let _info = "tall";
        console.log(_height); // -> 200
        console.log(_weight); // -> 100
        console.log(_info); // -> tall
    }
    console.log(_height); // -> 200
    console.log(_weight); // -> 100
    console.log(_info); // -> Uncaught ReferenceError: info is not defined
 }
    



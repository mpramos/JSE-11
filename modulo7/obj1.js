const person = {
    firstName:'Juana',
    lastName: 'Ramirez',
    age:50,
    country:'Peru',
    skills:[
        'HTML',
        'CSS',
        'JS',
        'React',
        'Node',
        'MongoDB'
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    isMarried:true,
    'phone number':'4234234234234'
}
person.skills.push('Express')
person.nationality='Peruan'
person.title ='teacher'
person.country='Argentina'

person.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills.splice(0,this.skills.length-1).join(', ')
    let lastSkill = this.skills.splice(this.skills.length-1,1).join()

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement =`${fullName} is a ${this.title}. 
She Lives in ${this.country}. She teaches ${skills}.`
    return statement
}
// console.log(person.getPersonInfo());

let copyPerson= Object.assign({},person)
copyPerson.hobbies=['🏃‍♂️','🚶‍♀️','🏋️‍♀️']
console.log(person);
console.log(copyPerson);

let point1 = point0;    // copy reference
let point2 = {};
Object.assign(point2, point0);  //  copy properties into the new object
console.log(point2.x);
console.log(point2.y);
console.log(point1 === point0); // true
console.log(point1 === point2); // false
let point0 = {x:10, y: 20 };
let point3 = {};
Object.assign(point3, point0, {z: 100});
console.log(point3.z);
console.log(point0);



let point0 = {x:10, y: 20 };
let point2 = { ...point0};
let point3 = { ...point0, z: 100};
console.log(point0);
console.log(point2);
console.log(point3);

let point4 = { ...point3,...{z: 200, color: "red"}};
console.log(point4);
let point4 = { ...point3, z: 200, color: "red"};
console.log(point4);









console.log('claves');
const keys = Object.keys(copyPerson)
console.log(keys);
console.log('valores');
const values = Object.values(copyPerson)
console.log(values);
console.log('claves y valores');
const entries = Object.entries(copyPerson)
console.log(entries);

console.log('hasOwnProperty');
console.log(copyPerson.hasOwnProperty('name'));
console.log(copyPerson.hasOwnProperty('title'));


let test = {
    nr: 10, 
    b: false, 
    str: "uno dos tres", 
    arr: [10, 20, 30], 
    obj: {
        x: 10, 
        y: 20
    }, 
fn: function(arg) {console.log(arg)} 
};
test.obj.y=40
console.log(test.obj.y);





let point = {
    x: 0,
    y: 0,
    moveHorizontally: function(distance) {
        this.x = this.x + distance;
    },
    moveVertically: function(distance) {
        this.y = this.y + distance;
    }
}
console.log(point.x);    // -> 0
point.moveHorizontally(30);
console.log(point.x);    // -> 30



let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};

contact.email = {
    private: "RonaldSMurphy@freepost.org",
    work: "rsmurphy@briazz.com" 
};
console.log(contact.email);

delete contact.email.private
console.log(contact.email.private);
console.log(contact.email);

let contact = {
    email_1: "RonaldSMurphy@freepost.org",
    email_2: "rsmurphy@briazz.com"
};
for(i=1; i<=2; i++) {
    let key = "email_" + i;
    console.log(key);
    console.log(contact[key]);
}

let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};
for(x in contact) {
    // print property name, type and value
    console.log(`${x} : ${typeof contact[x]} : ${contact[x]}`);
}

const contact = {};
contact.email = "RonaldSMurphy@freepost.org";
console.log(contact.email);






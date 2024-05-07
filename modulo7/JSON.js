const userText=` {
    "users" :[
        {
            "firstName" :"Juana",
            "lastName":"Ramirez",
            "age": 40,
            "email":"juana@gmail.com"
        },
        {
            "firstName" :"Alex",
            "lastName":"James",
            "age":34 ,
            "email":"alex@gmail.com"
        }
    ]
}`
const userObj=JSON.parse(userText,(key,value)=>{
    let newValue= 
    typeof value== 'string' && key !='email' ? value.toUpperCase():value
    return newValue
})
console.log(userObj);




const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
  const txt = JSON.stringify(users)
  console.log(txt) 

const _user={
    firstName:'Juanita',
    lastName:'Ramirez',
    country:'Peru',
    city:'Lima',
    email:'juanita@gmail.com',
    skills:['HTML','CSS','JAVASCRIPT'],
    age:40,
    isLoggedIn:false,
    poitns:30
}

const _txt= JSON.stringify(_user,['firstName','lastName','country','city','age'])
console.log(_txt);

























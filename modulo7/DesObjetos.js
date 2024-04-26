
const rectangle={
    width:20,
    height:10,
    area:200
}
let {width:w,height:h,area:a,perimeter:p=60}=rectangle
console.log(w,h,a,p);

const rect ={
    width:20,
    height:10,
}
const calculatePerimeter=({width,height})=>{
    return 2*(width + height)
}
console.log(calculatePerimeter(rect));


const person = {
    firstName:'Juana',
    lastName: 'Ramirez',
    age:50,
    country:'Peru',
    job:'Instructor and Developer',
    skills:[
        'HTML',
        'CSS',
        'JS',
        'React',
        'Node',
        'MongoDB'
    ],
   languages:['Español','Ingles','Frances']
}

const getPersonInfo=({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
})=>{
    const formattedSkills = skills.slice(0,-1).join(', ')
    const formattedLanguages= languages.slice(0,-1).join(', ')
    let personInfo= `${firstName} ${lastName} lives in ${country}.She is ${age}
    years old. She is ${job}. She teaches ${formattedSkills} and ${skills[skills.length-1]}
    She speaks ${formattedLanguages} and a little bit of ${languages[2]}`
    return personInfo
}
console.log(getPersonInfo(person));

const todoList =[
    {
        task:'Prepare Js Test',
        time:'27/4/2024 8:30',
        completed: true
    },
    {
        task:'Give Js Test',
        time:'27/4/2024 10:00',
        completed: false
    },
    {
        task:'Test Result',
        time:'27/4/2024 1:00',
        completed: false
    },
]

for (const {task,time,completed} of todoList) {
    console.log(task,time,completed);
}




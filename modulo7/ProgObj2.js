class Persona {
    constructor(firstName='Juana', lastName='Ramirez',age=30, country='Peru',city='Lima'){
        this.firstName=firstName
        this.lastName= lastName
        this.age=age
        this.country=country
        this.city=city
        this.score=0
        this.skills=[]
    }
    getFullName(){
        const fullName= this.firstName+' '+this.lastName
        return fullName
    }
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }
    set setScore(score){
        this.score+=score
    }
    set setSkill(skill){
        this.skills.push(skill)
    }

    getPersonInfo(){
        let fullName= this.getFullName()
        let skills = this.skills.length>0 && this.skills.slice(0,this.skills.length-1).join(', ')+
         ` y ${this.skills[this.skills.length-1]}`
         let formattedSkills= skills ? `conoce ${skills}`: ''
         let info= `${fullName} tiene ${this.age} vive en ${this.city}, ${this.country}. ${formattedSkills}`
         return info
    }
}
const person1= new Persona('Jose','Alvarez',35,'Peru','Lima')
// console.log(person1);
person1.setScore=1
person1.setSkill='HTML'
person1.setSkill='CSS'
person1.setSkill='JavaScript'
// console.log(person1.getScore);
// console.log(person1.getSkills);
console.log(person1.getPersonInfo());
class Estudiante extends Persona{
    saySomething(){
        console.log('Hola soy un estudiante');
    }
}
const s1= new Estudiante()
s1.saySomething()
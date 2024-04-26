let user ={
    name:'Juana',
    title:'Programmer',
    country:'Peru',
    city:'Lima',
}

const copiedUser={...user,title:'instructor'}
console.log(copiedUser);

const sumAllNums=(...args)=>{
    let sum =0
    for (const num of args) {
        sum+= num
    }
    return sum
}

 console.log(sumAllNums(1,2,3,4,5))


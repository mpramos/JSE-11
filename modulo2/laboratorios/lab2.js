let emoji = '✨😃'
console.log(emoji);

emoji[0] = '📽'
console.log(emoji);


let emojis = ['✨','😃','📽',1,2,'👀']
console.log(emojis.length);
console.log(emojis.length-1);
console.log(emojis[emojis.length-1]); // propiedad length para saber el numero de elementos que tenemos en el arreglo

emojis[4]='👍'
console.log(emojis);
emojis.push('👀')
console.log(emojis);
//? Primera forma de creacion de un usuario ❌
let nombreU1= 'mario'
let edadU1= 35
console.log(nombreU1);
console.log(edadU1);
//? Segunda forma de creacion de un usuario ❎
let usuario1=['mario',35,123123]
console.log(usuario1);

// let estrella = emojis[2]
// console.log(estrella);
// console.log(emojis);
emojis[0] = '📽'
console.log(emojis);
//? Tercera forma de creacion de un usuario 🆗
let _usuario1 = {
    nombre :'mario',
    edad: 35,
    telefono :123123            
}

console.log(_usuario1);
console.log(_usuario1.nombre);
console.log(_usuario1.edad);
console.log(_usuario1.telefono);
//? Ejemplo de lista de usuarios
let usuarios = [
    {
        nombre :'mario',
        edad: 35,
        telefono :123123            
    },
    {
        nombre :'jose',
        edad: 25,
        telefono :122123            
    },
    {
        nombre :'juana',
        edad: 45,
        telefono :223123            
    }
]
console.log(usuarios[0].nombre);
console.log(usuarios[1]);


let contacts =[
    {name :"Maxwell Wright" ,
    email :"Curabitur.egestas.nunc@nonummyac.co.uk",
    phone :"(0191) 719 6495"} ,
    {name :"Raja Villarrea" ,
    email :"posuere.vulputate@sed.com",
    phone :"0866 398 2895" },
    {name :"Helen Richards",
    email :"libero@convallis.edu", 
    phone :"0800 1111" }
]
let newContact={
    name :"Maisie Haley",
    email :"risus.Quisque@urna.ca.", 
    phone :"0913 531 3030"
}
contacts.push(newContact) // agregar un nuevo contacto al arreglo de contacts

//*Mostrar el primer contacto
console.log('EL PRIMER CONTACTO');
console.log(`${contacts[0].name}/${contacts[0].email}/${contacts[0].phone}`);

//*Mostrar el ultimo contacto
console.log('EL ULTIMO CONTACTO');
contacts.push({name:'Lorenzo',email:'lore@gmail.com',phone:'12312312'})
contacts.push({name:'Pamela',email:'pame@gmail.com',phone:'12312312'})
console.log(`${contacts[contacts.length-1].name}/${contacts[contacts.length-1].email}/${contacts[contacts.length-1].phone}`);
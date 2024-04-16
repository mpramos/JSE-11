
// ? showContact: la función debe tomar dos argumentos; 
// ? el primero es la lista de contactos y el segundo es
// ?  el número de índice del contacto a mostrar; dentro de la función,
// ?   verifica si se pasan los argumentos correctos, es decir,
// ?    si los contactos son un arreglo (utiliza la construcción instanceofArray para esto).
// ? showAllContacts: la función debe tomar un argumento, la lista de contactos; 
// ? dentro de la función, verifica si el argumento dado es un arreglo.
// ? addNewContact: la función debe tomar cuatro argumentos, 
// ? una lista de contactos y los datos del nuevo contacto,
// ?  es decir: nombre, teléfono y número; antes de agregar un nuevo contacto,
// ?   verifica si el argumento pasado es un arreglo y si los datos del nuevo contacto tienen algún valor.
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
function showContact(contactos,indice){
    if (indice<=contactos.length-1 && contactos instanceof Array) {
        for (let i = 0; i < contactos.length; i++) {
            if (i===indice) {
                return (`${contactos[indice].name} ${contactos[i].phone} ${contactos[i].email}`)
            } 
        }
    } else {
        return ('argumentos invalidos')
    }
}
function showAllContacts(contactos) {
    if (contactos instanceof Array) {
        for (const contacto of contactos) {
          console.log(`${contacto.name} ${contacto.phone} ${contacto.email}`);  
        }
    } else {
        console.log('parámetros inválidos');
    }
}
showAllContacts(contacts)
showAllContacts(2)

function addNewContact(contactos,nombre,telefono,email) {
    if (contacts instanceof Array && nombre && telefono && email ) {
        let nuevoContacto={
            name:nombre,
            phone:telefono,
            email:email
        }
        contactos.push(nuevoContacto)
        return contactos
    } else {
        return('los parametros son invalidos');
    }
}

 console.log(addNewContact(contacts,'juana','1231231','juana@gmail.com'))
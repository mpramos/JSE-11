// Mostrar el primer contacto (primero)
// Mostrar el último contacto (último)
// Añadir un nuevo contacto (nuevo)


/*Al agregar un nuevo contacto, verifica si el usuario ha
ingresado todos los datos necesarios. Si falta al menos
uno de los tres valores (nombre, teléfono o correo electrónico), no se agrega el contacto.*/
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
    // Agregar un nuevo Contacto
    let nombreContacto = prompt('Ingrese el nombre del nuevo contacto')
    let telefonoContacto = prompt('Ingrese el telefono del nuevo contacto')
    let emailContacto = prompt('Ingrese el email del nuevo contacto')
    let nuevoContacto ={
        name: nombreContacto,
        phone:telefonoContacto,
        email: emailContacto
    }
    if (nuevoContacto.name && nuevoContacto.phone && nuevoContacto.email ) {
        alert(nuevoContacto.name + ' ' + nuevoContacto.phone + ' '+nuevoContacto.email)
        console.log( {name: nuevoContacto.name, phone:  nuevoContacto.phone, email:  nuevoContacto.email} )
        contacts.push(nuevoContacto)
    } else {
        alert('no cumple con todos los campos')   
        console.log(contacts);
    }
    // Mostrar el primer contacto
    alert(`PRIMER CONTACTO :${contacts[0].name}/ ${contacts[0].email}/ ${contacts[0].phone}`)
    // Mostrar el ultimo contacto
    alert(`ULTIMO CONTACTO :${contacts[contacts.length-1].name}/${contacts[contacts.length-1].email}/ ${contacts[contacts.length-1].phone}`)
    console.log(contacts);
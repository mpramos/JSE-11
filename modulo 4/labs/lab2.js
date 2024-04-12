/**Además, intenta encerrar todo el programa en un bucle para que al usuario se le pregunte repetidamente 
qué quiere hacer. El usuario puede optar por:

Mostrar el primer contacto (primero)
Mostrar el último contacto (último)
Mostrar todos los contactos (todos)
Añadir un nuevo contacto (nuevo)
Salir del programa (salir)
Después de ejecutar la acción seleccionada, el programa le dará la oportunidad de elegir nuevamente. El programa debe
finalizar las acciones solo
después de que el usuario dé un comando específico, por ejemplo salir.*/

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


let isActive = true
while (isActive) {
    alert(` opcion 1: Mostrar el primer contacto 
    opcion 2: Mostrar el ultimo contacto 
    opcion 3: Mostrar todos los contactos
    opcion 4: Añadir un nuevo contacto 
    opcion 5: Salir del programa`) 
    let opcion = prompt('Selecciona una opcion ')
    switch (opcion) {
        case '1':
            alert(`${contacts[0].name}/ ${contacts[0].phone}/${contacts[0].email}`)
            break;
        case '2':
            alert(`${contacts[contacts.length-1].name}/ ${contacts[contacts.length-1].phone}/${contacts[contacts.length-1].email}`)
            break;
            case '3':
                for (let i = 0; i < contacts.length; i++) {
                    alert(`${contacts[i].name}/ ${contacts[i].phone}/${contacts[i].email}`)
                }
                break;
        case '4':
            let nombre = prompt('Ingrese el nombre del nuevo contacto')
            let telefono = prompt('Ingrese el telefono del nuevo contacto')
            let correo = prompt('Ingrese el correo del nuevo contacto')
            let nuevoContacto={
                name : nombre,
                email:correo,
                phone: telefono
            }
            contacts.push(nuevoContacto)
            alert(`${nuevoContacto.name}/ ${nuevoContacto.phone}/${nuevoContacto.email}`)
            console.log(contacts);
            break;
        case '5':
               isActive=false 
               break
        default:
            alert(`la opcion ${opcion} no es válida `)
            break;
    }
}

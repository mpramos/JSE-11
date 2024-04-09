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


let opcion 
while (opcion!=='5') {
    alert(` opcion 1: Mostrar el primer contacto 
    opcion 2: Mostrar el ultimo contacto 
    opcion 3: Mostrar todos los contactos
    opcion 4: Añadir un nuevo contacto 
    opcion 5: Salir del programa`) 
    opcion = prompt('Selecciona una opcion ')
    switch (opcion) {
        case '1':
            alert(`${contacts[0].name}/ ${contacts[0].phone}/${contacts[0].email}`)
            break;
    
        default:
            break;
    }
}

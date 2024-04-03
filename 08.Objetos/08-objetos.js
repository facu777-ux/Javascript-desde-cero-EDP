
// Completa el siguiente objeto 'alumnos' que tenga como primera propiedad nombre, segunda propiedad apellido, tercera edad y cuarta examen
// nombre y apellido deben tener como valor un string, edad un entero y examen un booleano.
// Tu código:
let alumnos = {
    nombre: "Facundo",
    apellido: "Espeche",
    edad: 21,
    examen: true
}


function datosObj(obj){
    // Pasado el objeto por paramentros compuesto de la siguiente manera : 
    //{ nombre: Leonardo, apellido: Avila }
    // obtener los valeres nombre y apellido y dar un mensaje de bienvenida 
    // 'Bienvenido Leonardo Avila' 
    // tu código aqui:

    return `Bienvenido ${obj.nombre} ${obj.apellido}`;

}

function cambiandoPropiedades(obj){
    // Pasado el objeto por paramentros compuesto de la siguiente manera : 
    //{ nombre: Pablo, apellido: Perez, edad: 25 }
    // Agregar una propiedad 'nacionalidad' con el valor de 'Argentina'
    // tu código aqui:

    obj.nacionalidad = 'Argentina';
    return obj
}

function eliminarPropiedad(objeto, propiedad) {
    // Esta funcion recibe por parametros un objeto y una propiedad del mismo objeto.
    // tendrás que eliminar esa propiedad del objeto y devolver el objeto
    // Tu código:

    delete objeto[propiedad];
    return objeto; 
}

function contieneEmail(user) {
    // Devuelve true si el user contiene la propiedad de 'email', si no contiene devuelve false
    // Tu código:

    return user.email ? true : false;
}

function verificarPassword(user) {
    // Por parametros se pasa una objeto el cual tiene una propriedad 'password'.
    // comprueba si el valor de esta propiedad tiene un longitud mayor o igual a 8 caracteres
    // si cumple devolver true, caso contrario devolver 'Por favor, pon una contraseña más segura'
    // Tu código:

    if (user.password.length >= 8) {
        return true;
    }else{
        return 'Porfavor, pon una contraseña más segura';
    }

}

function permisosDeEntrada(personas) {
    // 'personas' es un array de objetos 'persona', dentro de cada objeto tienen como propiedad
    // nombre, apellido, edad , entrada (valor booleano). comprobar cada persona
    // si contiene entrada (true) y si es mayor de edad. agregar en un nuevo array, las personas que cumplan
    // el nuevo array debe contener unicamente el nombre de las personas
    // tu código:

    let newArr = [];

    for (let i = 0; i < personas.length; i++) {
        if (personas[i].entrada && personas[i].edad >= 18) {
            newArr.push(personas[i].nombre);
        }
    }

    return newArr

}

//Crea un objeto "libro" con propiedades como título, autor y año de publicación. 
//Luego, completa la función que toma ese objeto como argumento
//devuelva la información del libro de la siguiente manera: "El libro {título}, escrito por {autor} , fue publicado en {añoPublicación}".
//tu codigo:

let libro = {
    título: "El Principito",
    autor: "J.K Rowling",
    añoPublicación: 1987
};
  
  // Función para mostrar la información del libro
  function mostrarInformacionLibro(libro) {
    return `El libro ${libro.título}, escrito por ${libro.autor} , fue publicado en ${libro.añoPublicación}.`
  }

module.exports = {
    alumnos,
    eliminarPropiedad,
    cambiandoPropiedades,
    datosObj,
    contieneEmail,
    verificarPassword,
    permisosDeEntrada,
    libro,
    mostrarInformacionLibro
  };
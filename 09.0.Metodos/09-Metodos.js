function arrayDuplicados(array){
    // Por parametros recibiras un array de numeros, tendras que el array duplicado! Usa: Metodo .map()
    // Tu codigo:
    const duplicados = array.map(function(numero){
        return numero * 2;
    })

    return duplicados

}

const nombresPersonas = (array) => {
    // Por parametros recibiras un array de objetos. tendras que iterar entre ellos y devolver un array con todos los nombres
    // Usa metodo .map().. Ayuda => la propiedad de los nombres es => name.
    // Tu codigo:

    return array.map(persona => persona.name);

}

function masImpuestos(array){
    // Tienes un array de objetos que contiene como propiedades => producto, nSerie, precio. tendrás que calcular impuestos del 10% y agregarlo como prodiedad
    // Ejemplo: {producto: 'Zapatillas Nike', nSerie: 1511440, precio: $1000}. Deberias devolver => {producto: 'Zapatillas Nike', nSerie: 1511440, precio: 1000, Impuestos: 100}
    // Usar metodo .map()
    // Tu codigo:

    const arrayConImpuestos = array.map(function (objeto) {
        const impuestos = parseInt(objeto.precio * 0.1); //voy a la propiedad precio de cada objeto y le aplico el 10% de impuestos
        return{
            producto: objeto.producto,
            nSerie: objeto.nSerie,
            precio: objeto.precio,
            impuestos: impuestos
        } //Agrego la propiedad 'Impuestos' por cada objeto
    });

    return arrayConImpuestos
    
}


function NombresLargos(array){
    // Usando metodo Filter(), deberás retornar todos los nombres que superen una longitud mayor o igual a 5  (FILTER)
    // Tu codigo:

    const arrayNombresLargos = array.filter(function(nombre){
        return nombre.length >= 5; 
    })

    return arrayNombresLargos

}

function filtaradoPorCategoria(array, categoria){
    // Recibiras por parametros un array de objetos con peliculas de la siguiente manera: {titulo: 'Spiderman', Estreno: , Categoria:  }.
    // deberás usar metodo filter, para devolver un array con los nombres de las peliculas que sean de la categoria pedida.
    // Tu codigo:

    const PelisPedidas = array.filter(function(pelicula){
        return pelicula.categoria === categoria;
    }).map(function(pelicula){
        return pelicula.titulo;
    })

    return PelisPedidas


}

function examenIngreso(array){
    // Recibiras por parametros un array de objetos con datos de Alumnos que se presentaron a rendir el examen de ingreso.
    // Deberas devolver un array con los datos (obj). de los alumnos que aprobaron el examon (nota >= 70) y inscripcion completa (inscripcion = true)
    // Tu codigo:

    const AlumnosAprobados = array.filter(function(Alumno) {
        return Alumno.nota >= 70 && Alumno.inscripcion;
    })

    return AlumnosAprobados

}

function nombreContiene(nombres, search) {
    // Recibiras un array de strings con nombres de personas, que asistieron a un evento. deberas devolver un array con todos los nombres
    // que incluyan lo pedido por 'search'. Ej: ['Leo','Agustina','Martina','Pedro','Manuel', 'Cristina'] & Search = 'tina'
    // deberia devolver => ['Agustina','Martina','Cristina']
    // Tu código aquí 👈

    const NombresFiltrados = nombres.filter(function(nombre) {
        return nombre.toLowerCase().includes(search.toLowerCase());
    })

    return NombresFiltrados
}


module.exports = {
    arrayDuplicados,
    nombresPersonas,
    masImpuestos,
    NombresLargos,
    filtaradoPorCategoria,
    examenIngreso,
    nombreContiene

}
function verificarNumero(numero){
    // Escribe un programa que tome un número como entrada y muestre "Es positivo" si el número es mayor que cero,
    // "Es negativo" si es menor que cero y "Es cero" si es igual a cero.
    // Tu código 👇:

    if (numero > 0) {
        return "Es positivo";
    }else if(num < 0){
        return "Es negativo";
    }else {
        return "Es cero";
    }


}


function esBisiesto(anio){
    // Escribe un programa que determine si un año es bisiesto o no.
    // Un año es bisiesto si es divisible entre 4, excepto aquellos que son divisibles entre 100 pero no entre 400.
    // Tu código 👇:

    if (anio % 4 === 0 && anio % 100 !== 0 && anio % 400 === 1) return "Es bisiesto";

}

function verificarCalificacion(calificacion){
    // Escribe un programa que determine si un estudiante aprobó o reprobó un examen.
    // El estudiante aprueba si su calificación es mayor o igual a 60.
    // Tu código 👇:
    
    return calificacion >= 60 ? "El estudiante aprobó su examen" : "El estudiante desaprobó su examen"
}

function esMayor(num1, num2, num3){
    // Escribe un programa que determine el mayor de tres números dados.
    // Tu código 👇:

    if(num1 > num2 && num1 > num3) return `El mayor de los tres números es: ${num1}`
    if(num2 > num1 && num2 > num3) return `El mayor de los tres números es: ${num2}`
    if(num3 > num1 && num3 > num2) return `El mayor de los tres números es: ${num3}`

}

function esPrimo(num){
    // Escribe un programa que determine si un número dado es primo.
    // Tu código 👇:

    

    if (num < 2) return "El numero no es primo" 
    for (let i = 2; i < num; i++) {
       
        if (num % i === 0){
            return "El numero no es primo";
        }
    }

    return "El numero es primo"


}

module.exports = {
    verificarCalificacion,
    verificarNumero,
    esBisiesto,
    esMayor,
    esPrimo
}

module.exports = {
    verificarCalificacion,
    verificarNumero,
    esBisiesto,
    esMayor,
    esPrimo
}
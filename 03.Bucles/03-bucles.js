function cantidadDeVocales(phrase){
// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇
    let arr_phrase = phrase.split('');
    let contador = 0;

    for (let i = 0; i < phrase.length; i++) {
        
        if ('aeiou' .includes(arr_phrase[i])) {
            contador++;
        }
    }

    return contador

}

function primerDivisible(divisor, dividendo) {
// Encuentra el primer número divisible por 'dividendo' a partir de un número dado (divisor) utilizando un bucle while
// Tu código:👇

    let num = dividendo;
    let num_divisible = false;

    while (!num_divisible) {
        if (num % divisor === 0) {
            num_divisible = true;
        } else {
            divisor++;
        }
    }

    return divisor

}


function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇


    for (let i = 1; i < 101; i++) {
        
        if (i === x) {
            return "El numero X es: " + i
        }
        
    }

}

function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇
    let acumulador = 0;

    for (let i = 0; i <= num; i++) {
        acumulador += i;
    }

    return acumulador

}

function BinarioADecimal(num) {
// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
// tu código:👇

    let arr_num = num.split('').reverse();
    let decimal = 0;



    for (let i = 0; i < arr_num.length; i++) {
        
        if (arr_num [i] === '1') {
            
            decimal += (parseInt(arr_num[i])) * 2 ** i;
        }
    }

    return decimal



}

function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇

    if(numero < 2) return numero + " no es primo.";

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return numero + " no es primo.";
        }        
    }

    return numero + " es primo.";
}

function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇

    let cadena_inv = '';

    for (let i = cadena.length - 1; i >= 0; i--) {
        cadena_inv += cadena[i];
    }
    
    return cadena_inv

}
  
module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}
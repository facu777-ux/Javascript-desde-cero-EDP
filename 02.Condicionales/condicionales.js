// Ejercicio de Ejemplo:
/* TITULO - NO MODIFICAR*/ document.write('<div class="titulo"><p>Ejercicio de Ejemplo - Resultado:</p></div>')
// En la Escuela de Programación tienen como condicion para poder inscribirse a los cursos, la persona tenga 18 años o más.
// Pidele al usuario que ingrese su edad ( usando prompt() ), y en caso que tenga 18 años o más imprima un mensaje indicandole que puede inscribirse.
// caso contrario se le indica que no puede inscribirse y la razón.
// Tu codigo 👇:
        let edad_usuario = parseInt(prompt("Ingrese su edad: "))

        edad_usuario >= 18 ? alert("Podés inscribirte a un curso") : alert("No podes inscribirte debido a que tu edad es: " + edad_usuario + " , y se requiere tener 18 años o más")
        if (edad_usuario >= 18) {
                document.write("Podés inscribirte a un curso")
        }else{
                document.write("No podes inscribirte debido a que tu edad es: " + edad_usuario + " , y se requiere tener 18 años o más")
        }

//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 1 - Calificación | Resultado:</p></div>')
// Ejercicio N° 1:
// Escribe un programa que solicite al usuario ingresar una calificación del 0 al 100 y luego muestre un mensaje según la siguiente escala:
// Calificación de 90 o más: "Excelente"
// Calificación entre 70 y 89: "Bueno"
// Calificación entre 60 y 69: "Suficiente"
// Calificación menor a 60: "Insuficiente"
// Tu codigo 👇:
        let calificacion;

        do {
                calificacion = parseInt(prompt("Ingrese una calificación del 0 al 100: "))
        } while (calificacion <= 0);



        if (calificacion < 60) {
                alert("Insuficiente")
                document.write(`Debido a que su calificación es de: ${calificacion}, se especifica como: Insuficiente`)
        }else if (calificacion >= 60 && calificacion <=69) {
                alert("Suficiente")
                document.write(`Debido a que su calificación es de: ${calificacion}, se especifica como: Suficiente`)
        }else if (calificacion >= 70 && calificacion <=89) {
                alert("Bueno")
                document.write(`Debido a que su calificación es de: ${calificacion}, se especifica como: Bueno`)
        }else if (calificacion >= 90) {
                alert("Excelente")
                document.write(`Debido a que su calificación es de: ${calificacion}, se especifica como: Excelente`)
        }


//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 2 - Par o Impar | Resultado:</p></div>')
// Ejercicio N° 2:
// Escribe un programa que solicite al usuario ingresar un número entero y luego determine si es par o impar.
// Tu codigo 👇:

        let Num;

        do {
                Num = parseInt(prompt("Ingrese un número entero"));
                if (Num % 1 !== 0) {
                        alert("Por favor, ingrese un número entero.");
                }
        } while (Num % 1 !== 0);

        if (Num % 2 === 0) {
                document.write("El número ingresado es par")
        }else{
                document.write("El número ingresado es impar")
        }


//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 3 - Día de la Semana | Resultado:</p></div>')
// Ejercicio N° 3:
// Escribe un programa que solicite al usuario ingresar un número del 1 al 7 representando un día de la semana, y luego imprima el nombre del día correspondiente.
// Por ejemplo, si el usuario ingresa 1, el programa debe imprimir "Lunes".
// Tu codigo 👇:

        let numero;

        do{
                numero = parseInt(prompt(
                        `Porfavor, ingrese un número del 1 al 7, teniendo en cuenta que:
                        1: LUNES
                        2: MARTES
                        3: MIÉRCOLES
                        4: JUEVES
                        5: VIERNES
                        6: SÁBADO
                        7: DOMINGO
                        Su número:....`
                ));

                if (numero <= 0 || numero > 7) {
                        alert("El numero a ingresar tiene que ser del 1 al 7");
                }
        }while(numero <= 0 || numero > 7);

        if (numero === 1) document.write("LUNES")
        if (numero === 2) document.write("MARTES")
        if (numero === 3) document.write("MIERCOLES")
        if (numero === 4) document.write("JUEVES")
        if (numero === 5) document.write("VIERNES")
        if (numero === 6) document.write("SABADO")
        if (numero === 7) document.write("DOMINGO")


//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 4 - Antigüedad laboral | Resultado:</p></div>')
// Ejercicio N° 4:
// Escribe un programa que solicite al usuario ingresar su antigüedad en años en una empresa y su salario actual.
// Si la antigüedad es mayor o igual a 5 años, y el salario es menor a $500,
// el programa debe imprimir un mensaje que indique que el empleado es elegible para una bonificación del 10% de su salario actual.
// Tu codigo 👇:
        let salario, antiguedad;

        do {
                antiguedad = parseInt(prompt("Ingrese su antiguedad, en años, en la empresa: ....."));
                salario = parseInt(prompt("Ingrese su salario: ...."));
        } while (salario < 0 || antiguedad < 0);

        if (antiguedad >= 5 && salario < 500){
                document.write("Felicitaciones!! Eres elegible para una bonificación del 10% de tu salario actual!") 
        }else{
                alert("No cumples con los requisistos para una bonificación del 10 % de tu salario actual");
                document.write("No cumples con los requisistos para una bonificación del 10 % de tu salario actual");
        }  



//_________________________________________

/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 5 - Rango de edad | Resultado:</p></div>')
// Ejercicio N° 5:
// Escribe un programa que solicite al usuario ingresar su edad y luego determine en qué rango de edad se encuentra:
// Menor de 18 años: "Menor de edad"
// Entre 18 y 65 años: "Adulto"
// Mayor de 65 años: "Senior"
// Tu codigo 👇:

        let edad;

        do {
                edad = parseInt(prompt("Ingrese su edad porfavor:..."))
        } while (edad < 0);

        if(edad < 18)document.write("Menor de edad")
        if(edad >=18 && edad <= 65)document.write("Adulto")
        if(edad > 65)document.write("Senior")


//_________________________________________


// 👇👇 NO MODIFICAR 👇👇

const footer = `

<footer>
        <a href="https://github.com/AvLeo/Javascript-desde-cero-EDP" target="_blank">REPO GITHUB</a>
        <a href="https://leo-a.notion.site/JavaScript-8243598cde1e4cc5aea0fc1eeb7a090f?pvs=74" target="_blank">Notion</a>
</footer>


`

document.write(footer)
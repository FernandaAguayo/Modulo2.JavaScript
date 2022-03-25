// Diferencia de iteradores:
// For. Repite hasta que se cumpla la condicional
// Do - While. Mientras se cumpla una condicion, el bucle se continua ejecutando.
// If - else. Toma decisiones logicas y ejecuta dependiendo cual cumple la condicion.

// Ejercicio 1 ---------------     2/6     -------------------------------------------------------
// Dado un arreglo de calificaciones obtener la calificación máxima, mínima y promedio
var calificaciones = [9, 8, 10, 5, 9, 7, 3];
    // Mayor
var calOrdenadas = calificaciones.sort(function (a, b) { return a - b });
var numeroMayor = calOrdenadas[calOrdenadas.length - 1];
console.log("Numero Mayor: ", numeroMayor)
    // Menor
var numeroMenor = calOrdenadas[0];
console.log("Numero Menor: ", numeroMenor)
    // Promedio
let count = calificaciones.length;
calificaciones = calificaciones.reduce((previous, current) => current += previous);
console.log("Promedio: ",calificaciones /= count)

// Ejercicio 2
// Con ayuda de los ciclos, imprimir la serie Fibonacci 0,1,1,2,3,5,8,13,21,...


// Ejercicio 3
//Crea un programa con ayuda de iteraciones que muestre en la consola una pirámide de asteriscos


// Ejercicio 4 --
//Mostrar en la consola la table de un número (del 1 al 10)
for (i = 1; i <= 10; i++) {
    document.write(i + "x 2 =" + (i) * 2 + "<br>");
}

// Ejercicio 5
// escribir todos los números pares  del 1 al 100
for (i = 1; i < 100; i++) {
    let numeroPar = 1;
    if (numeroPar = (numeroPar / 2) = 0) {
        document.write(numeroPar);
        numeroPar++;
    }
}
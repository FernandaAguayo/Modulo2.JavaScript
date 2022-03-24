// agrega 3 alumnos en un arreglo y solo enseña en la consola el primero y el tercero.
// se guardan con corchetes
var alumnos = ['Fernanda', 'Javier', 'Luis'];
// Recuerda que inicia desde el cero
console.log(alumnos[0], alumnos[2])
// Mostrar todos los alumnos
console.log(alumnos)

// el hacerlo con ciclos nos permite repetir la estructura dependiendo la condicional.
// for ("inicia en";"¿cuantas veces se ejecutara?";"que pasara en cada ejecucion?")

for (i = 0; i < 10; i++) {
    document.write("Profe, no me repruebe :(" + "<br>");
}
for (i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}
// Diferencia de iteradores:
// For. Repite hasta que se cumpla la condicional
// Do - While. Mientras se cumpla una condicion, el bucle se continua ejecutando.
// If - else. Toma decisiones logicas y ejecuta dependiendo cual cumple la condicion.

// Ejercicio 1 ---------------     1/6     -------------------------------------------------------
// Dado un arreglo de calificaciones obtener la calificación máxima, mínima y promedio
var cal = [9, 8, 10, 5, 9, 7, 3];
for (cal = 0; cal < 100; cal++) {
    document.write(cal + "<br>");
}

// Ejercicio 2
// Con ayuda de los ciclos, imprimir la serie Fibonacci 0,1,1,2,3,5,8,13,21,...


// Ejercicio 3
//Crea un programa con ayuda de iteraciones que muestre en la consola una pirámide de asteriscos
i = 0;
while (i < 5) {
    console.log("*", i);

    i = i + 1;
}

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
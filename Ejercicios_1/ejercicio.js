// Ejercicio 1
var mascota1 = 'pedrito';
var mascota2 = 'rufo';
var mascota3 = 'chalncla';
//  opcion 1
console.log('mis mascotas son' + mascota1 +','+ mascota2 +'y'+ mascota3)
//  opcion 2
console.log(`Mis mascotas son ${mascota1}, ${mascota2} y ${mascota3}`)

// Ejercicio 2
var mascota1 = prompt("nombre mascota 1:")
var mascota2 = prompt("nombre mascota 2:")

console.log("Quiero mucho a " + mascota1 + " y " + mascota2);

// Ejercicio 3
let cadenaDeTexto = '100';
console.log(typeof cadenaDeTexto)
//  Lo almacene en una variable para que lo transforme
//  Coerción. Impricita, no decidi que lo transformara, Js transformo el string a un numero
// var cadenaDeTextoTransformada = dato*1;
var cadenaDeTextoTransformada = parseInt (cadenaDeTexto);
console.log (cadenaDeTextoTransformada)

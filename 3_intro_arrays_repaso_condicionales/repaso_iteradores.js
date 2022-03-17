// crea una condicion con "if" que cuando el usuario sea mayor de edad
// puede entrar a ver BATMAN.
edadUsuario = 18;

if (edadUsuario < 18) {
    console.log('no, eres menor de edad y te asustas');
} else if (edadUsuario >= 18) {
    console.log('si puedes ver la peli.')
}

// Solo el profesor y director puede ingresar a la plataforma, los demas 
// seran denegados.

var persona = 'profesor'
if (persona == 'profesor') {
    console.log('Bienvenido, profesor')
} else if (persona == 'director') {
    console.log('Bienvenido director')
} else {
    console.log('No tienes acceso')
}

// Guarda en variables el nombre de las siguientes mascotas:
// 1. Pedrito
// 2. Rufo
// 3. Chancla

// Ejercicio 1
var mascota1 = 'pedrito';
var mascota2 = 'rufo';
var mascota3 = 'chancla';
// Muestra en consola, accediendo a las variables, un mensaje como el siguiente:
// "Mis mascotas son Pedrito, Rufo y Chancla. Las quiero mucho"

//  opcion 1
console.log('mis mascotas son' + mascota1 + ',' + mascota2 + 'y' + mascota3)
//  opcion 2, Es mas facil y rapida de escribir
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
var cadenaDeTextoTransformada = parseInt(cadenaDeTexto);
console.log(cadenaDeTextoTransformada)


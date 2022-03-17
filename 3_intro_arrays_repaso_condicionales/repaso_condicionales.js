// Ejercicio 1
var n1 = prompt("Escribe un número");
if (n1 % 5 === 0) {
    console.log("numero cool uwu");
} else {
    console.log("No es cool UnU");
}

// Ejercicio 2
let sentimientos = prompt("Como te sientes bro?")
switch (sentimientos) {
    case "happy": alert("cool bro, the life is short")
        break;
    case "sad": alert("go for tacos bro, tacos = smile")
        break;
    default:
        alert("código inválido")
        break;
}

// Ejercicio 3
let rango = parseInt(prompt("Ingresa tu rango"))
if (rango >= 0 || rango <= 10) {
    console.log('Eres un paladin')
} else if (rango >= 11 || rango <= 30) {
    console.log("Eres un caballero dorado")
}
else if (rango >= 31 || rango <= 50) {
    console.log("Eres un dios destructor")
}
else {
    console.log("Ese rango no existe bro XD")
}
// Ejercicio 4
// Piedra, papel o tijera
let p1 = prompt("player 1. Escoje piedra, papel o tijera: ")
let p2 = prompt("player 2.Escoje piedra, papel o tijera: ")
if (p1 == 'piedra' && p2 == 'tijera') {
    console.log("player 1 ¡Gana!")
}
else if (p1 == 'piedra' && p2 == 'papel') {
    console.log("player 2 ¡Gana!")
}
else if (p1 == 'piedra' && p2 == 'piedra') {
    console.log("empataron")
}
else if (p1 == 'papel' && p2 == 'tijera') {
    console.log("player 2 ¡Gana!")
}
else if (p1 == 'papel' && p2 == 'papel') {
    console.log("empataron")
}
else if (p1 == 'papel' && p2 == 'piedra') {
    console.log("player 1 ¡Gana!")
}
else if (p1 == 'tijera' && p2 == 'tijera') {
    console.log("empataron")
}
else if (p1 == 'tijera' && p2 == 'papel') {
    console.log("player 1 ¡Gana!")
}
else if (p1 == 'tijera' && p2 == 'piedra') {
    console.log("player 2 ¡Gana!")
}

// Ejercicio 5
let numero1 = parseInt(prompt("Ingresa el nuimero 1"))
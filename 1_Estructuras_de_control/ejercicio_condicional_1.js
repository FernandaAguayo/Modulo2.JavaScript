// Esta es la manera en la que el usuario escribe y lo pone directamene en la variable de "edad"
let edad = parseInt(prompt("Cual es tu edad"))

if (edad < 4) {
    alert("Muy joven")
}
else if (edad >= 4 && edad <= 99) {
    alert("Diviertete")
}
else if (edad > 99) {
    alert("lo siento pero para el dominmo no hay limite")
}
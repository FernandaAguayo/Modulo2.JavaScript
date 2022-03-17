const alumnos = []; // Nos pidio un arreglo que estuviera vacio
let agregarAlumno = "si";
while (agregarAlumno === "si"){
    alumnos.push({
        nombre: prompt("Ingresa el nombre del nuevo alumno:"),
        apellido: ("Ingresa el apellido del nuevo alumno:")
    });
    agregarAlumno=prompt("Quieres añadir a un nuevo alumno?");
}


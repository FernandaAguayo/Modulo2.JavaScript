i = 0; // Se inicializa desde una variable encangada de contar

//Condicion: Mientras la variable contador "i" sea menor a 5.
    while( i < 5){
    console.log("valor de i:", i);
    // Incrementara el valor de "i".
    i = i + 1;
    }

    // Ejemplo. Se repetira el ciclo mientras sea menor a 5.
    let iteracion = 0;
    while(iteracion<5){
    console.log(`valor de iteracion: ${iteracion}`)
    iteracion=iteracion+1
    }

    // Ejemplo 2.
    let preguntaComida = 'no'
    while (preguntaComida==='no'){
    preguntaComida = prompt ("Quieres comer?")
    }
    console.log ("Provecho")

    // Ejercicio 1.
    let saludo = 'hola'
    while (saludo==='hola'){
    console.log('hola')
    saludo = prompt ("¿hola?")
    }
    console.log ("te voy a acusar")

    // Ejercicio 2. Contador numerico
    let cantidadDeTragos = 0;
    while (cantidadDeTragos<7){
    console.log("Echese otra compa...")
        cantidadDeTragos++
    } console.log("Ni una mas, esta bien pedo >:c")

    // Ejercicio 3. Que me diga de manera textual si quiere o no otra y al septimo ya no darle otro trago.
    let cantidadDeCheves = 0;
    while (cantidadDeCheves<7){
    }

// Como acceder a las propiedades de nuestro Objeto ----------------
// propiedad, llave y valor, se accede por "notacion con puntos" y "acceso por corchetes"
// Bajar renglon con "shift" y "enter".
    const fernanda = {
    apellidos: "Aguayo",
    edad: 21,
    fechaDeNacimiento : "12 Junio",
    datosCuriosos : {
    mascota:  "perro",
    colorFavorito: "morado",
    videojuegoFavorito: "Halo Reach"
    }
}

// Arreglos dentro de un Objeto ------------------------------------
// Funcion "push" Agrega, lo elimina y nos lo devuelve.
// Funcion "pop" Elimina lo ultimo lo elimina y nos lo devuelve.
// Funcion "unshift"  inicio lo elimina y nos lo devuelve.
// concat, es para poner los dos arreglos en uno solo, que sean parte del mismo.
// slice, split, join, include, lenght, index off.
// Ordenar alfabeticamente "sort" menor-mayor.
// de manera inversa a "sort" es "reverse" mayor-menor.
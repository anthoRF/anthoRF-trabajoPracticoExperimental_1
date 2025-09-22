/*
    Versión repetitiva:
    La tienda vende N celulares. Para cada uno se ingresan marca y capacidad, y se calcula
    el precio final con las reglas anteriores.
*/

/*
    ENTRADA:
        numeroCelulares(leer) = 0
        i(contador) = 0
        precioInicial(asignar) = 250
        marca(leer) = ""
        capacidad(leer) = ""
        ajuste(asignar) = 0
        precioFinal(calcular) = 0

    PROCESO:
        leer numeroCelulares
        mientras i < numeroCelulares hacer
            leer marca, capacidad
            si marca = "A" y capacidad = "64" entonces
                ajuste = 20
            sino si marca = "A" y capacidad = "128" entonces
                ajuste = 30
            sino si marca = "B" y capacidad = "64" entonces
                ajuste = -30
            sino si marca = "B" y capacidad = "128" entonces
                ajuste = -50
            sino
                ajuste = 0
            fin si
            precioFinal = precioInicial + ajuste
            ajuste = 0
            i = i + 1
        fin mientras

    SALIDA:
        Escribir "Precio Inicial: $" + precioInicial
        Escribir "Ajuste: $" + ajuste
        Escribir "Precio Final: $" + precioFinal
*/

function precioFinalVR() {
    let i = 0;
    let ajuste = 0;
    const precioInicial = 250;
    let precioFinal = 0;

    alert(`
    OPCIONES: 
        1. Marca A, 64 GB → +$20
        2. Marca A, 128 GB → +$30
        3. Marca B, 64 GB → -$30
        4. Marca B, 128 GB → -$50

    CONSIDERACIONES: 
        - Ingrese "A" o "B" para la marca
        - Ingrese "64" o "128" para la capacidad
        - Ingrese la marca en mayúsculas
    `);

    let numeroCelulares = parseInt(prompt(`Numero de celulares vendidos: `));

    while(i < numeroCelulares) {
    
        alert(`\nCelular ${i + 1}:`);

        let marca = prompt("Ingrese la marca: ");
        let capacidad = prompt('Ingrese la capacidad: ');

        if(marca == "A" && capacidad == "64"){
            ajuste = +20;
        } else if (marca == "A" && capacidad == "128"){
            ajuste = +30;
        } else if (marca == "B" && capacidad == "64") {
            ajuste = -30;
        } else if (marca == "B" && capacidad == "128") {
            ajuste = -50;
        } else {
            alert("Datos inválidos, se aplicará precio base.");
        }

        precioFinal = precioInicial + ajuste;

        alert( `
        Precio Inicial: $${precioInicial}
        Ajuste: $${ajuste}
        Precio Final: ${precioFinal.toFixed(2)}`);
        ajuste = 0;
    i++
    }
}

precioFinalVR();
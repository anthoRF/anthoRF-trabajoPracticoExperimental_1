/*
    Versión condicional:
    Una tienda de electrónicos fija un precio inicial a un celular y ajusta según marca y
    capacidad:
    o Marca A, 64 GB → +$20.
    o Marca A, 128 GB → +$30.
    o Marca B, 64 GB → –$30.
    o Marca B, 128 GB → –$50.
    Determinar el precio final de un celular vendido.
*/

/*
    ENTRADA:
        precioInicial(asignar) = 250
        marca(leer) = ""
        capacidad(leer) = ""
        ajuste(asignar) = 0
        precioFinal(calcular) = 0

    PROCESO:
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

    SALIDA:
        Escribir "Precio Inicial: $" + precioInicial
        Escribir "Ajuste: $" + ajuste
        Escribir "Precio Final: $" + precioFinal
*/

function precioFinalVC () {

    const precioInicial = 250;
    let ajuste = 0;
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

    let marca = prompt("Ingrese la marca: ");
    let capacidad = prompt('Ingrese la capacidad: ');

    if(marca == "A" && capacidad == "64"){
        ajuste = 20;
    } else if (marca == "A" && capacidad == "128"){
        ajuste = 30;
    } else if (marca == "B" && capacidad == "64") {
        ajuste = -30;
    } else if (marca == "B" && capacidad == "128") {
        ajuste = -50;
    } else {
        alert("Datos inválidos, se aplicará precio base.");
    }
    
    precioFinal = precioInicial + ajuste;

    return `
    Precio Inicial: $${precioInicial}
    Ajuste: $${ajuste}
    Precio Final: ${precioFinal.toFixed(2)}`;
}

alert(precioFinalVC());
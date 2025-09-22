/*
    Versión con arreglos:
    Guardar en un arreglo las marcas, en otro las capacidades y en un tercer arreglo los
    precios finales de cada celular.
*/

/*
    ENTRADA:
        numeroCelulares(leer) = 0
        i(contador) = 0
        precioInicial(asignar) = 250
        marcas(leer) = []
        capacidades(leer) = []
        preciosFinales(calcular) = []
        ajuste(asignar) = 0

    PROCESO:
        leer numeroCelulares
        para i desde 0 hasta numeroCelulares-1 hacer
            leer marcas[i], capacidades[i]
            si marcas[i] = "A" y capacidades[i] = 64 entonces
                ajuste = 20
            sino si marcas[i] = "A" y capacidades[i] = 128 entonces
                ajuste = 30
            sino si marcas[i] = "B" y capacidades[i] = 64 entonces
                ajuste = -30
            sino si marcas[i] = "B" y capacidades[i] = 128 entonces
                ajuste = -50
            sino
                ajuste = 0
            fin si
            preciosFinales[i] = precioInicial + ajuste
            ajuste = 0
        fin para

    SALIDA:
        Escribir marcas, capacidades, preciosFinales
*/

function precioFinalVA () {
    let ajuste = 0;
    const precioInicial = 250;
    let marcas = [];
    let capacidades = [];
    let preciosFinales = [];

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
    for (let i = 0; i < numeroCelulares; i++) {

        alert(`Celular ${i + 1}:`);

        marcas[i] = prompt(`Ingrese la marca del celular ${i + 1}: `);
        capacidades[i] = parseInt(prompt(`Ingrese la capacidad del celular ${i + 1}: `));
        
        if (marcas[i] == "A" && capacidades[i] == 64) {
            ajuste = +20;
        } else if (marcas[i] == "A" && capacidades[i] == 128) {
            ajuste = +30;
        } else if (marcas[i] == "B" && capacidades[i] == 64) {
            ajuste = -30;
        } else if (marcas[i] == "B" && capacidades[i] == 128) {
            ajuste = -50;
        } else {
            alert("Datos inválidos, se aplicará precio base.");
        }

        preciosFinales[i] = precioInicial + ajuste;
        
        alert(`
        Precio Inicial: $${precioInicial}
        Ajuste: $${ajuste}
        Precio Final: $${preciosFinales[i]}`);

        ajuste = 0; 
    }
}

precioFinalVA();
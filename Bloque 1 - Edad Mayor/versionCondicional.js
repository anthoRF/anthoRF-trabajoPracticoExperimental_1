/*
    1. Versión condicional:
    Se registran las edades de tres hermanos. El algoritmo debe determinar quién es el
    mayor de los tres, mostrando la edad correspondiente.
    o Entrada: tres enteros (edades).
    o Proceso: usar condiciones múltiples para comparar.
    o Salida: “El hermano mayor tiene X años.”
*/

/*
    ENTRADA:
        edad1(leer) = 0, edad2(leer) = 0, edad3(leer) = 0, 
        mayor(asignar) = 0

    PROCESO:
        leer edad1, edad2, edad3
        si edad1 > edad2 y edad1 > edad3 entonces
            mayor = edad1
        sino si edad2 > edad1 y edad2 > edad3 entonces
            mayor = edad2
        sino
            mayor = edad3
        fin si

    SALIDA:
        Escribir "El hermano mayor tiene " + mayor + " años."
*/

function edadMayorHermanosVC () {
    const edad1 = parseInt(prompt('Edad Hermano 1: '));
    const edad2 = parseInt(prompt('Edad Hermano 2: '));
    const edad3 = parseInt(prompt('Edad Hermano 3: '));
    let mayor = 0;

    if (edad1 > edad2 && edad1 > edad3) {
        mayor = edad1;
    } else if (edad1 < edad2 && edad2 > edad3) {
        mayor = edad2;
    } else {
        mayor = edad3;
    }

    alert(`El hermano mayor tiene ${mayor} años.`)
}

edadMayorHermanosVC();
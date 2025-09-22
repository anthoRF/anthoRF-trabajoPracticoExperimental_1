/*
    Versión repetitiva:
    Se registran N grupos de tres hermanos. Para cada grupo, el programa debe
    determinar quién es el mayor y mostrarlo en pantalla.
    o Entrada: cantidad de grupos y edades de cada grupo.
    o Proceso: recorrer con un ciclo for/while.
    o Salida: para cada grupo, la edad mayor.
*/

/*
    ENTRADA:
        grupoHermanos(leer) = 0
        edad1(leer) = 0, edad2(leer) = 0, edad3(leer) = 0
        mayor(asignar) = 0
        i(contador) = 0

    PROCESO:
        leer grupoHermanos
        mientras i < grupoHermanos hacer
            leer edad1, edad2, edad3
            si edad1 > edad2 y edad1 > edad3 entonces
                mayor = edad1
            sino si edad2 > edad1 y edad2 > edad3 entonces
                mayor = edad2
            sino
                mayor = edad3
            fin si
            escribir "El hermano mayor tiene " + mayor + " años."
            i = i + 1
        fin mientras

    SALIDA:
        Para cada grupo, escribir el mayor de los tres hermanos.
*/

function edadMayorHermanosVR (){
    const grupoHermanos = parseInt(prompt('Grupo de Hermanos: '));
    let i = 0;
    let mayor = 0;

    while (i < grupoHermanos) {
        alert(`Grupo Hermanos ${i+1}`)
        const edad1 = parseInt(prompt('Edad Hermano 1: '));
        const edad2 = parseInt(prompt('Edad Hermano 2: '));
        const edad3 = parseInt(prompt('Edad Hermano 3: '));

        if (edad1 > edad2 && edad1 > edad3) {
            mayor = edad1;
        } else if (edad1 < edad2 && edad2 > edad3){
            mayor = edad2;
        } else {
            mayor = edad3;
        }
        alert(`El hermano mayor tiene ${mayor} años.`);
    i++;
    }
}

edadMayorHermanosVR();
/*
    3. Versión con arreglos:
    Guardar en un arreglo de 3 posiciones las edades de los hermanos y recorrer el arreglo
    para determinar la mayor edad.
    o Entrada: arreglo de enteros.
    o Proceso: recorrer el arreglo y comparar valores.
    o Salida: edad mayor.
*/

/*
    ENTRADA:
        edadesHermanos(leer) = []
        mayor(asignar) = 0
        i(contador) = 0

    PROCESO:
        para i desde 0 hasta 2 hacer
            leer edadesHermanos[i]
        fin para

        mayor = edadesHermanos[0]
        para i desde 1 hasta 2 hacer
            si edadesHermanos[i] > mayor entonces
                mayor = edadesHermanos[i]
            fin si
        fin para

    SALIDA:
        Escribir "El hermano mayor tiene " + mayor + " años."
*/

function edadMayorHermanosVA (){
    
    let edadesHermanos = [];

    for (let i = 0; i < 3; i++) {
        edadesHermanos[i] = parseInt(prompt(`Edad Hermano ${i+1}: `));
    }

    let mayor = edadesHermanos[0];
    for (let i = 1; i < edadesHermanos.length; i++){
        if (edadesHermanos[i] > mayor) {
            mayor = edadesHermanos[i];
        }
    }

    alert(`El hermano mayor tiene ${mayor} años.`)
}

edadMayorHermanosVA();
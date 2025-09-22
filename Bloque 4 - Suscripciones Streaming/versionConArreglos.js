/*
    Versión con arreglos:
    Guardar en un arreglo la cantidad de usuarios de cada grupo y en otro arreglo el costo
    total calculado. Mostrar además en un arreglo paralelo el costo por usuario.
*/

/*
    ENTRADA:
        numeroGrupos(leer) = 0
        i(contador) = 0
        numeroUsuarios(leer) = []
        costoTotal(calcular) = []
        valorPorUsuario(asignar) = []

    PROCESO:
        leer numeroGrupos
        para i desde 0 hasta numeroGrupos-1 hacer
            escribir "Grupo " + (i+1)
            leer numeroUsuarios[i]

            si numeroUsuarios[i] > 0 entonces
                si numeroUsuarios[i] >= 100 entonces
                    valorPorUsuario[i] = 5
                sino si numeroUsuarios[i] >= 50 entonces
                    valorPorUsuario[i] = 6
                sino si numeroUsuarios[i] >= 30 entonces
                    valorPorUsuario[i] = 8
                sino
                    costoTotal[i] = 300
                    valorPorUsuario[i] = costoTotal[i] / numeroUsuarios[i]
                fin si

                si numeroUsuarios[i] >= 30 entonces
                    costoTotal[i] = numeroUsuarios[i] * valorPorUsuario[i]
                fin si

                escribir "Valor por usuario: " + valorPorUsuario[i]
                escribir "Costo total: " + costoTotal[i]
            sino
                escribir "Datos inválidos para este grupo."
            fin si
        fin para

    SALIDA:
        escribir numeroUsuarios
        escribir valorPorUsuario
        escribir costoTotal
*/

function suscripcionStreamingVA() {
    let numeroUsuarios = [];
    let costoTotal = [];
    let valorPorUsuario = [];
    const numeroGrupos = parseInt(prompt('Grupos de Usuario: '));

    for (let i = 0; i < numeroGrupos; i++) {
        alert(`Grupo ${i+1}:`);

        numeroUsuarios[i] = parseInt(prompt('Numero de Usuarios: '));

        if (numeroUsuarios[i] > 0) {
            if (numeroUsuarios[i] >= 100) {
                valorPorUsuario[i] = 5.00;
            } else if (numeroUsuarios[i] >= 50) {
                valorPorUsuario[i] = 6.00;
            } else if (numeroUsuarios[i] >= 30) {
                valorPorUsuario[i] = 8.00;
            } else {
                costoTotal[i] = 300;
                valorPorUsuario[i] = costoTotal[i] / numeroUsuarios[i];
            }

            if (numeroUsuarios[i] >= 30) {
                costoTotal[i] = numeroUsuarios[i] * valorPorUsuario[i];
            }

            alert(`
            Valor por usuario: $${valorPorUsuario[i].toFixed(2)}
            Total del Pedido: $${costoTotal[i].toFixed(2)}`);

        } else {
            alert('Datos inválidos para este grupo.');
        }
    }    
}

suscripcionStreamingVA();
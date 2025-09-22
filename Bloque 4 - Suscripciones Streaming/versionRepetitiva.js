/*
    Versión repetitiva:
    La aplicación recibe N solicitudes de grupos. Para cada uno, calcular el costo total y el
    costo por usuario aplicando las mismas reglas.
*/

/*
    ENTRADA:
        numeroGrupos(leer) = 0
        i(contador) = 0
        numeroUsuarios(leer) = 0
        valorPorUsuario(asignar) = 0
        costoTotal(calcular) = 0

    PROCESO:
        leer numeroGrupos
        mientras i < numeroGrupos hacer
            escribir "Grupo " + (i+1)
            leer numeroUsuarios

            si numeroUsuarios > 0 entonces
                si numeroUsuarios >= 100 entonces
                    valorPorUsuario = 5
                sino si numeroUsuarios >= 50 entonces
                    valorPorUsuario = 6
                sino si numeroUsuarios >= 30 entonces
                    valorPorUsuario = 8
                sino
                    costoTotal = 300
                    valorPorUsuario = costoTotal / numeroUsuarios
                fin si

                si numeroUsuarios >= 30 entonces
                    costoTotal = numeroUsuarios * valorPorUsuario
                fin si

                escribir "Valor por usuario: " + valorPorUsuario
                escribir "Costo total: " + costoTotal
            sino
                escribir "Datos inválidos para este grupo."
            fin si

            i = i + 1
        fin mientras
*/

function suscripcionStreamingVR() {
    let i = 0;
    let valorPorUsuario = 0;
    let costoTotal = 0;
    const numeroGrupos = parseInt(prompt('Grupos de Usuario: '));

    while (i < numeroGrupos) {
        alert(`Grupo ${i+1}:`);
        let numeroUsuarios = parseInt(prompt('Numero de Usuarios: '));

        if (numeroUsuarios > 0) {
            if (numeroUsuarios >= 100) {
                valorPorUsuario = 5.00;
            } else if (numeroUsuarios >= 50) {
                valorPorUsuario = 6.00;
            } else if (numeroUsuarios >= 30) {
                valorPorUsuario = 8.00;
            } else { 
                costoTotal = 300;
                valorPorUsuario = costoTotal / numeroUsuarios;
            }

            if (numeroUsuarios >= 30) {
                costoTotal = numeroUsuarios * valorPorUsuario;
            }

            alert(`
            Valor por usuario: $${valorPorUsuario.toFixed(2)}
            Total del Pedido: $${costoTotal.toFixed(2)}`);

        } else {
            alert('Datos inválidos para este grupo.');
        }
    i++;
    }
}

suscripcionStreamingVR();
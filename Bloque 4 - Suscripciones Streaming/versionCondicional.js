/*
    Versión condicional:
    Una aplicación de streaming cobra según número de usuarios:
    • ≥100 usuarios → $5 c/u.
    • 50–99 usuarios → $6 c/u.
    • 30–49 usuarios → $8 c/u.
    • <30 usuarios → $300 fijos.
    Calcular el costo total y el costo por usuario para un grupo.
*/

/*
    ENTRADA:
        numeroUsuarios(leer) = 0
        valorPorUsuario(asignar) = 0
        costoTotal(calcular) = 0

    PROCESO:
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
            escribir "Datos inválidos."
        fin si

    SALIDA:
        Valor por usuario y costo total calculados si los datos son válidos,
        o mensaje de error indicando datos inválidos.
*/

function suscripcionStreamingVC() {
    let valorPorUsuario = 0;
    let costoTotal = 0;
    const numeroUsuarios = parseInt(prompt('Numero de Usuarios: '));

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
        alert('Datos inválidos.');
    }
}

suscripcionStreamingVC();

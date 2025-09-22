/*
    Versión condicional:
    Una empresa de impresión ofrece tarjetas de invitación:
    o Pedido ≤ 200 → $2.00 c/u.
    o Entre 201 y 300 → $1.80 c/u.
    o Más de 300 → $1.50 c/u.
    Calcular el costo total de un pedido 
*/

/*
    ENTRADA:
        pedido(leer) = 0
        valorIndividual(asignar) = 0
        costoTotal(calcular) = 0

    PROCESO:
        leer pedido
        si pedido <= 200 y pedido > 0 entonces
            valorIndividual = 2.00
        sino si pedido >= 201 y pedido <= 300 entonces
            valorIndividual = 1.80
        sino si pedido > 300 entonces
            valorIndividual = 1.50
        sino
            escribir "Datos inválidos."
        fin si
        costoTotal = pedido * valorIndividual

    SALIDA:
        Escribir "Valor por unidad: $" + valorIndividual
        Escribir "Total del Pedido: $" + costoTotal
*/

function pedidoInvitacionesVC(){

    let valorIndividual = 0;
    let costoTotal = 0;

    alert(`VALORES POR PEDIDO: 
    
    Pedidos menores a 200: $2.00 c/u
    Pedidos entre 201 y 300: $1.80 c/u
    Pedidos mayores a 300: $1.50 c/u
    `);

    const pedido = parseInt(prompt('¿Cuántas tarjetas de invitación desea?: '));

    if (pedido <= 200 && pedido > 0) {
        valorIndividual = 2.00;
    } else if (pedido >= 201 && pedido <= 300) {
        valorIndividual = 1.80;
    } else if (pedido > 300) {
        valorIndividual = 1.50;
    } else {
        alert('Datos inválidos.');
    }

    costoTotal = pedido * valorIndividual;

    return `
    Valor por unidad: $${valorIndividual}
    Total del Pedido: $${costoTotal.toFixed(2)}
    `
}

alert(pedidoInvitacionesVC());
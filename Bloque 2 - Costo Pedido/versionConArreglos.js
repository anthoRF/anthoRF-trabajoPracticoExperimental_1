/*
    Versión con arreglos:
    Guardar en un arreglo las cantidades de tarjetas de N pedidos. Calcular en un arreglo
    paralelo el costo total de cada pedido.
*/

/*
    ENTRADA:
        numeroPedidos(leer) = 0
        pedido(leer) = []
        costoTotal(calcular) = []
        i(contador) = 0
        valorIndividual(asignar) = 0

    PROCESO:
        leer numeroPedidos
        para i desde 0 hasta numeroPedidos-1 hacer
            leer pedido[i]
            si pedido[i] <= 200 y pedido > 0 entonces
                valorIndividual = 2.00
            sino si pedido[i] >= 201 y pedido[i] <= 300 entonces
                valorIndividual = 1.80
            sino si pedido[i] > 300 entonces
                valorIndividual = 1.50
            sino
                escribir "Datos inválidos."
            fin si
            costoTotal[i] = pedido[i] * valorIndividual
        fin para

    SALIDA:
        Escribir costoTotal
*/

function pedidoInvitacionesVA(){ 

    let valorIndividual = 0;
    let costoTotal = [];

    alert(`VALORES POR PEDIDO: 
    
    Pedidos menores a 200: $2.00 c/u
    Pedidos entre 201 y 300: $1.80 c/u
    Pedidos mayores a 300: $1.50 c/u
    `);

    const numeroPedidos = parseInt(prompt('Numero de Pedidos: '));

    const pedido = [];

    for (let i = 0; i < numeroPedidos; i++) {
        alert(`Pedido ${i+1}: `);
        pedido[i] = parseInt(prompt('¿Cuántas tarjetas de invitación desea?: '));

        if (pedido[i] <= 200 && pedido[i] > 0) {
            valorIndividual = 2.00;
        } else if (pedido[i] >= 201 && pedido[i] <= 300) {
            valorIndividual = 1.80;
        } else if (pedido[i] > 300) {
            valorIndividual = 1.50;
        } else {
            alert('Datos inválidos.');
        }

        costoTotal[i] = pedido[i] * valorIndividual;

        alert(`
        Valor por unidad: $${valorIndividual}
        Total del Pedido: $${costoTotal[i].toFixed(2)}`);
    }
}

pedidoInvitacionesVA();
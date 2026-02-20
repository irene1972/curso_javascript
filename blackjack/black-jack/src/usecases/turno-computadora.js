import { crearCartaHTML, pedirCarta, valorCarta } from './index.js';

export const mostrarPedirCartaComputadora = (valor,deck,marcadorComputadora,divComputadora) => {
    
    let carta = pedirCarta(deck);
    carta = carta.replace(',', '');
    valor += valorCarta(carta);
    crearCartaHTML(marcadorComputadora,valor,divComputadora,carta);
    return valor;
  }

export const turnoComputadora = (valorCartas,deck,marcadorComputadora,divComputadora) => {
    
    let valor = 0;
    if (valorCartas > 21) {
        mostrarPedirCartaComputadora(valor,deck,marcadorComputadora,divComputadora);
        setTimeout(() => {
        alert('La computadora gana');
        return;
        }, 100);

    } else {
        while (valor < valorCartas && valor <= 21) {
            const totalComputadora = mostrarPedirCartaComputadora(valor,deck,marcadorComputadora,divComputadora);
            valor = totalComputadora;
        }
    }
    //evaluar quien ha ganado
    if (valorCartas > 21 && valor > 21) {
        setTimeout(() => {
            alert('pierden los dos');
        }, 100);

    } else if (valorCartas > 21 && valor <= 21) {
        setTimeout(() => {
            alert('gana computadora');
        }, 100);

    } else if (valor > 21 && valorCartas <= 21) {
        setTimeout(() => {
            alert('gana jugador');
        }, 100);

    } else {
        if (valorCartas > valor) {
            setTimeout(() => {
                alert('gana jugador');
            }, 100);

        } else if (valorCartas < valor) {
            setTimeout(() => {
                alert('gana computadora');
            }, 100);

        } else {
            setTimeout(() => {
                alert('Empate');
            }, 100);

        }
    }


}
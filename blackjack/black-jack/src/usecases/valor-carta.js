//obtener el valor de una carta
/**
 * 
 * @param {String} carta 
 * @returns {Number}    devuelve el valor de la carta
 */
export const valorCarta = (carta) => {
    carta = carta.replace(',', '');
    const valor = carta.substring(0, carta.length - 1);
    let puntos = 0;
    if (isNaN(valor)) {
        puntos = (valor === 'A') ? 11 : 10;
    } else {
        puntos = +valor;
    }
    return puntos;
}
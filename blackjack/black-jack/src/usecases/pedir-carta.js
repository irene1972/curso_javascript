

//tomar una carta
/**
 * 
 * @param {Array<String>} deck 
 * @returns {String}    devuelve una carta
 */
  export const pedirCarta = (deck) => {
    if (deck.length === 0) {
      throw 'No hay cartas en el deck';
    }
    let carta = deck.pop();
    carta = carta.replace(',', '');
    return carta

  }
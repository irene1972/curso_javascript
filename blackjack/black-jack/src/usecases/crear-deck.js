import _ from 'underscore';

let deck = [];

//crear una nueva baraja
/**
 * 
 * @param {Array<String>} tiposDeCarta  ejemplo: ['C', 'D,', 'H', 'S']
 * @param {Array<String>} tiposEspeciales   ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>}     retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length===0) throw new Error('tiposDeCarta es obligatorio');
    if (!tiposEspeciales || tiposEspeciales.length===0) throw new Error('tiposEspeciales es obligatorio');

    for (let i = 2; i <= 10; i++) {
        for (const tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }
    for (const esp of tiposEspeciales) {
        for (const tipo of tiposDeCarta) {
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck)
    return deck;
}
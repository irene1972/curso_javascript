import {  crearCartaHTML, 
          crearDeck,
          pedirCarta,
          turnoComputadora,
          valorCarta} from './usecases/index.js'
import {
  tipos,
  especiales,
  botonNuevoJuego,
  botonPedirCarta,
  botonDetener,
  marcadorJugador,
  divJugador,
  marcadorComputadora,
  divComputadora
} from './variables.js';
import './style.css'

(() => {

  /**
* 2C = Two of Clubs
* 2D = Two of Diamonds
* 2H = Two of Hearts
* 2S = Two of Spades
*/

  let deck = [];
  let valorCartas = 0;

  const iniciarJuego = () => {
    divJugador.innerHTML = '';
    divComputadora.innerHTML = '';
    botonPedirCarta.disabled = false;
    botonDetener.disabled = false;
    valorCartas = 0;
    deck=crearDeck(tipos, especiales);
    mostrarPedirCarta();
  }

  const mostrarPedirCarta = () => {
    let carta = pedirCarta(deck);
    carta = carta.replace(',', '');
    valorCartas += valorCarta(carta);
    crearCartaHTML(marcadorJugador,valorCartas,divJugador,carta);
    if (valorCartas > 21) {
      //botones pedir carta y detener se deshabilitan
      botonPedirCarta.disabled = true;
      botonDetener.disabled = true;

      //inicia el juego la computadora
      turnoComputadora(valorCartas,deck,marcadorComputadora,divComputadora);
    }

  }

  const detenerJuego = () => {
    turnoComputadora(valorCartas,deck,marcadorComputadora,divComputadora);
  }

  document.addEventListener('DOMContentLoaded', () => {

    botonNuevoJuego.addEventListener('click', iniciarJuego);
    botonPedirCarta.addEventListener('click', mostrarPedirCarta);
    botonDetener.addEventListener('click', detenerJuego);

  });


})()

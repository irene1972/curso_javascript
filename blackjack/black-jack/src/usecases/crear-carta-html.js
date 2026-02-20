export const crearCartaHTML = (referencia, valorCartas,referencia2,carta) => {
    referencia.textContent = valorCartas;
    referencia2.innerHTML += `<img class="carta" src="./cartas/${carta.replace(',', '')}.png" alt="imagen carta">`;
}
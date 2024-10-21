/**
 * 
 * @param {Array} puntosHTML 
 * @param {String} puntos 
 * @param {HTMLElement} divCartas 
 * @param {String} carta 
 */
export const renderCartas = (divCartas, carta) => {     
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    console.log(divCartas);
    divCartas.append( imgCarta );
}
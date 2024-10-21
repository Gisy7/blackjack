/**
 * Esta función me permite tomar una carta
 * @param {array<String>} deck 
 * @returns devuelve las cartas
 */
export const pedirCarta = (deck) => {


    
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
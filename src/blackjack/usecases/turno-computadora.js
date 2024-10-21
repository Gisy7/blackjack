import { pedirCarta, valorCarta, renderCartas } from "./index";

const validacion = (puntosMinimos, deck, puntosHTML, divCartasComputadora) => {
    if(!puntosMinimos) throw new Error("Puntos minimos son necesarios")
    if(!puntosHTML) throw new Error("Argumento puntosHTML es necesario")
}



export const turnoComputadora = ( puntosMinimos, deck, puntosHTML, divCartasComputadora ) => {

    validacion(puntosMinimos, deck, puntosHTML, divCartasComputadora)

    let  puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        
        renderCartas(divCartasComputadora, carta)

        puntosHTML[1].innerText =  puntosComputadora;

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

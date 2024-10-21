import { shuffle } from "underscore";

export const prueba = "Hola mundo"



/**
 * Esta función crea un nuevo deck
 * @param {array<String>} tiposDeCarta Ejemplos: ['C','D','H','S']
 * @param {array<String>} tiposEspeciales Ejemplos: ['A','J','Q','K']
 * @returns {array} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {


    if(!tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error ("TiposDeCarta es olbigatorio como un array de string ")

    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error ("tiposEspeciales es olbigatorio como un array de string ")

    let deck = []
    console.log(tiposDeCarta);

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    deck = shuffle( deck );
    return deck;
}



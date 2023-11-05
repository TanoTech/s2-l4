/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* let l1 = parseFloat(prompt('inserisci altezza'))
let l2 = parseFloat(prompt('inserisci base'))

function area(l1 , l2){
    return l1 * l2
}
const areaRettangolo = area(l1, l2)
console.log(`l'area del retangolo è` + ' ' + areaRettangolo)  */


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/


/* let numero1 = parseInt(prompt('inserisci primo numero'))
let numero2 = parseInt(prompt('inserisci secondo numero'))

function crazySum(numero1, numero2){
    if (numero1 === numero2){
        return (numero1 + numero2) * 3
    } else {
        return numero1 + numero2
    }
} 

const somma = crazySum(numero1, numero2)
console.log(somma)  */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/


/* let numeroUtente  = parseFloat(prompt('inserisci numero'))
const parametro = 19

function crazyDiff(numeroUtente, parametro){
    if (Math.abs(numeroUtente > parametro)){
        return (numeroUtente - parametro) * 3
    } else{
        return Math.abs(numeroUtente - parametro)
    }
}

const differenzaAssoluta = crazyDiff(numeroUtente, parametro)
console.log(differenzaAssoluta) */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/


/* const numeroIntero = parseInt(prompt('inserisci numero intero'))

function boundary(numeroIntero){
    if (numeroIntero >= 20 && numeroIntero <=100 ){
        return true
    } else if (numeroIntero === 400){
        return true
    } else {
        return false
    }
}
const veroFalso = boundary(numeroIntero)
console.log(veroFalso)  */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/


/* let inputStringra = prompt('inserisci stringa')

function epify(inputStringra){
    const tuttoGrande = inputStringra.toUpperCase()
    if (tuttoGrande.indexOf('EPICODE') === 0){
    return inputStringra
    }else{
        return "EPICODE" + " " + inputStringra
    }
}
 
let messaggio = epify(inputStringra)
console.log(messaggio) */


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* let numero2Utente = parseInt(prompt('inserisci numero'))

risposta1 = 'divisibile per 3'
risposta2 = 'divisibile per 7'
risposta3 = 'non è divibile nè per 3 nè per 7'

function check3and7(numero2Utente){
    if (numero2Utente % 3 === 0 ){
        return risposta1
    } else if (numero2Utente % 7 === 0){
        return risposta2
    } else {
        return risposta3
    }
}

const messaggio2 = check3and7(numero2Utente)
console.log(messaggio2)  */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/


/* const inputEpi = "EPICODE"

function reverseString(inputEpi){
    let stringaArray = inputEpi.split("")
    let giraArray = stringaArray.reverse()
    let parolaContrario = giraArray.join("")
    return  parolaContrario
}

const risposta4 = reverseString(inputEpi)
console.log(risposta4)  */



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/


/* let stringaUtente = prompt('Inserisci una frase')
const dividiStringa = stringaUtente.split(' ')

function upperFirst(stringaUtente) {
    for (let i = 0; i < dividiStringa.length; i++) {
        const selezionaPrima = dividiStringa[i].charAt(0)
        const primaGrande = selezionaPrima.toUpperCase()
        const parolaNuova = primaGrande + dividiStringa[i].slice(1)
        paroleModificate.push(parolaNuova)
    }
    return paroleModificate.join(' ')
}

const paroleModificate = []
const risposta5 = upperFirst(stringaUtente)
console.log(risposta5) */


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/


/* let comandoUtente = prompt('inserisci parola da tagliare')

function cutString(comandoUtente){
    let taglioStringa = comandoUtente.slice(1, -1)
    return taglioStringa
}
const riposta6 = cutString(comandoUtente)
console.log(riposta6) 
 */
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/


 function giveMeRandom(){
    return Math.floor(Math.random() * 11)
}

let numeroCasuale = giveMeRandom()
console.log(numeroCasuale) 

/* SCRIVI QUI LA TUA RISPOSTA */
